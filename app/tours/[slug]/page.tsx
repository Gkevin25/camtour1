'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {  Star, Clock, MapPin, Users, Calendar, Check, Info, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { fetchTourById } from "@/lib/services/tours"
import { useAuth } from '@/contexts/AuthContext'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { sendBookingConfirmationEmail, initializeEmailJS, testEmailJS, type BookingData } from "@/lib/services/email"
import { toast, Toaster } from "sonner"


// Interface for Tour data structure
interface Tour {
  id: string
  title: string
  image: string
  imageGallery: string[]
  price: number
  duration: string
  rating: number
  reviews: number
  location: string
  tag: string
  description: string
  highlights: string[]
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { user } = useAuth()

  // State for tour data and UI states
  const [tour, setTour] = useState<Tour | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [numberOfTravelers, setNumberOfTravelers] = useState<number>(1)
  const [isBooking, setIsBooking] = useState(false)

  // Redirect to login if user is not authenticated
  if (!user) {
    router.push('/login')
  }

  // Fetch tour data on component mount
  useEffect(() => {
    const loadTour = async () => {
      try {
        setLoading(true)
        setError(null)
        setNotFound(false)

        console.log('🔍 Attempting to fetch tour with ID:', params.slug)

        // Use the slug as the tour ID
        const tourData = await fetchTourById(params.slug)
        console.log('✅ Successfully fetched tour data:', tourData)
        setTour(tourData as Tour)
      } catch (err) {
        console.error('❌ Error loading tour:', err)
        console.error('❌ Error details:', {
          message: err instanceof Error ? err.message : 'Unknown error',
          stack: err instanceof Error ? err.stack : 'No stack trace',
          tourId: params.slug
        })

        if (err instanceof Error && err.message.includes('not found')) {
          setNotFound(true)
        } else {
          setError(err instanceof Error ? err.message : 'Failed to load tour details')
        }
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      console.log('🚀 Starting tour fetch for slug:', params.slug)
      loadTour()
    }
  }, [params.slug])

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS()
  }, [])

  // Handle booking confirmation
  const handleBookNow = async () => {
    console.log('🔍 handleBookNow called with user:', user)

    if (!tour || !user) {
      toast.error('Please log in to book this tour')
      return
    }

    if (!date) {
      toast.error('Please select a booking date')
      return
    }

    // Debug user object
    console.log('🔍 User object:', user)
    console.log('🔍 User email:', user.email)
    console.log('🔍 User name:', user.name)

    // Validate user email - Appwrite user object uses 'email' property
    const userEmail = user.email
    if (!userEmail) {
      toast.error('User email not found. Please log in again.')
      return
    }

    setIsBooking(true)

    try {
      const totalPrice = tour.price * numberOfTravelers

      const bookingData: BookingData = {
        userEmail: userEmail,
        userName: user.name || userEmail.split('@')[0],
        tourTitle: tour.title,
        tourPrice: tour.price,
        tourDuration: tour.duration,
        tourLocation: tour.location,
        tourDescription: tour.description,
        tourHighlights: tour.highlights,
        bookingDate: format(date, 'PPPP'),
        numberOfTravelers,
        totalPrice
      }

      console.log('📧 Sending booking confirmation...', bookingData)

      const result = await sendBookingConfirmationEmail(bookingData)

      if (result.success) {
        toast.success('Booking confirmed! Check your email for details.')
      } else {
        toast.error(result.message)
      }

    } catch (error) {
      console.error('❌ Booking error:', error)
      toast.error('Failed to process booking. Please try again.')
    } finally {
      setIsBooking(false)
    }
  }

  // Test EmailJS configuration
  const handleTestEmail = async () => {
    if (!user?.email) {
      toast.error('Please log in to test email')
      return
    }

    try {
      const result = await testEmailJS(user.email)
      if (result.success) {
        toast.success('Test email sent successfully!')
      } else {
        toast.error(`Test email failed: ${result.message}`)
      }
    } catch (error) {
      toast.error('Test email failed')
      console.error('Test email error:', error)
    }
  }

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-green-700" />
      <span className="ml-2 text-lg">Loading tour details...</span>
    </div>
  )

  // Error component
  const ErrorMessage = ({ message }: { message: string }) => (
    <Alert className="mx-auto max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )

  // 404 Not Found component
  const NotFoundMessage = () => (
    <div className="container py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
      <p className="text-gray-600 mb-8">The tour you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      <Link href="/tours">
        <Button className="bg-green-700 hover:bg-green-800">
          Browse All Tours
        </Button>
      </Link>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="CamTour Logo" width={120} height={80} className="h-12 w-auto" />
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Show loading state */}
        {loading && (
          <div className="container py-12">
            <LoadingSpinner />
          </div>
        )}

        {/* Show error state */}
        {error && (
          <div className="container py-12">
            <ErrorMessage message={error} />
          </div>
        )}

        {/* Show not found state */}
        {notFound && <NotFoundMessage />}

        {/* Show tour content when loaded successfully */}
        {!loading && !error && !notFound && tour && (
          <>
            {/* Tour Header */}
            <div className="container py-6">
              <h1 className="text-3xl font-bold">{tour.title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="ml-1 font-medium">{tour.rating}</span>
                  <span className="ml-1 text-gray-500">({tour.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-5 w-5 text-gray-500" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-5 w-5 text-gray-500" />
                  <span>{tour.duration}</span>
                </div>
              </div>
            </div>

            {/* Tour Gallery */}
            <div className="container mb-8">
              <div className="grid grid-cols-4 grid-rows-2 gap-2">
                {/* Main image - always show the primary tour image */}
                <div className="col-span-2 row-span-2 relative h-[400px]">
                  <Image
                    src={tour.image || "/placeholder.svg?height=800&width=600"}
                    alt={tour.title}
                    fill
                    className="rounded-l-lg object-cover"
                  />
                </div>

                {/* Gallery images - show from imageGallery array or fallback to main image */}
                {Array.from({ length: 4 }, (_, index) => {
                  const galleryImage = tour.imageGallery && tour.imageGallery[index]
                    ? tour.imageGallery[index]
                    : tour.image || "/placeholder.svg?height=400&width=300"

                  const isLastImage = index === 3
                  const hasMoreImages = tour.imageGallery && tour.imageGallery.length > 4

                  return (
                    <div key={index} className="relative h-[196px]">
                      <Image
                        src={galleryImage}
                        alt={`${tour.title} - Image ${index + 2}`}
                        fill
                        className={`object-cover ${
                          index === 1 ? "rounded-tr-lg" :
                          index === 3 ? "rounded-br-lg" : ""
                        }`}
                      />
                      {isLastImage && hasMoreImages && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-br-lg bg-black/50">
                          <Button variant="outline" className="text-white">
                            +{tour.imageGallery.length - 4} More Photos
                          </Button>
                        </div>
                      )}
                      {isLastImage && !hasMoreImages && (
                        <div className="absolute inset-0 flex items-center justify-center rounded-br-lg bg-black/50">
                         
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

        <div className="container pb-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Tour Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6 grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">What&apos;s Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold">About This Tour</h2>
                    <p className="text-gray-700">
                      {tour.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Tour Highlights</h3>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {tour.highlights && tour.highlights.length > 0 ? (
                        tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>{highlight}</span>
                          </li>
                        ))
                      ) : (
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-green-700" />
                          <span>Detailed highlights coming soon</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Additional Information</h3>
                    <div className="rounded-lg border">
                      <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                        <div className="p-4">
                          <h4 className="font-medium text-gray-500">Tour Duration</h4>
                          <p>{tour.duration}</p>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-500">Group Size</h4>
                          <p>Maximum 12 people</p>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-500">Languages</h4>
                          <p>English, French</p>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-500">Accessibility</h4>
                          <p>Not wheelchair accessible</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Tour Itinerary</h2>

                  <div className="space-y-6">
                    <div className="relative border-l-2 border-green-700 pl-6">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-green-700"></div>
                      <h3 className="text-lg font-semibold">8:00 AM - Hotel Pickup</h3>
                      <p className="text-gray-700">
                        Your guide will meet you at your hotel in Douala. Settle into our comfortable, air-conditioned
                        vehicle for the journey to Limbe (approximately 1 hour).
                      </p>
                    </div>

                    

                     <div className="relative border-l-2 border-green-700 pl-6">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-green-700"></div>
                      <h3 className="text-lg font-semibold">4:00 PM - Return Journey</h3>
                      <p className="text-gray-700">
                        Begin the return journey to Douala, with a possible stop at a local market to purchase souvenirs
                        if time permits.
                      </p>
                    </div>

                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-green-700"></div>
                      <h3 className="text-lg font-semibold">5:30 PM - Hotel Drop-off</h3>
                      <p className="text-gray-700">Arrive back at your hotel in Douala.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="includes" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">What&apos;s Included</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-lg font-semibold text-green-700">Included</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>Hotel pickup and drop-off in Douala</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>Transportation in air-conditioned vehicle</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>Professional English-speaking guide</span>
                          </li>
                          
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>Traditional Cameroonian lunch</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-green-700" />
                            <span>Bottled water</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-lg font-semibold text-red-600">Not Included</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-red-600" />
                            <span>Gratuities (optional)</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-red-600" />
                            <span>Personal expenses</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-red-600" />
                            <span>Alcoholic beverages</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-red-600" />
                            <span>Travel insurance</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 h-5 w-5 text-red-600" />
                            <span>Additional activities not mentioned in the itinerary</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">What to Bring</h3>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Comfortable walking shoes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Swimwear and towel</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Sunscreen and hat</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Insect repellent</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Camera</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Some cash for souvenirs or extra expenses</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Reviews</h2>
                    <Button className="bg-green-700 hover:bg-green-800">Write a Review</Button>
                  </div>

                  <div className="rounded-lg border p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold">{tour.rating}</div>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= Math.floor(tour.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">Based on {tour.reviews} reviews</div>
                      </div>

                      <div className="hidden space-y-2 md:block">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center">
                            <span className="mr-2 w-3">{rating}</span>
                            <Star className="mr-2 h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
                              <div
                                className="h-full bg-yellow-500"
                                style={{
                                  width: `${
                                    rating === 5
                                      ? "75%"
                                      : rating === 4
                                        ? "20%"
                                        : rating === 3
                                          ? "3%"
                                          : rating === 2
                                            ? "1%"
                                            : "1%"
                                  }`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Sample reviews */}
                      <div className="border-b pb-6">
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <span className="font-semibold">Sarah J.</span>
                            <span className="ml-2 text-sm text-gray-500">April 2023</span>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Amazing experience! The wildlife center was educational and seeing the animals up close was
                          incredible. The black sand beaches were beautiful and unlike anything I&apos;ve seen before. Our
                          guide was knowledgeable and friendly. Highly recommend!
                        </p>
                      </div>

                      <div className="border-b pb-6">
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <span className="font-semibold">Michael T.</span>
                            <span className="ml-2 text-sm text-gray-500">March 2023</span>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${star <= 4 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Great day trip from Douala. The lunch was delicious and featured local specialties. The only
                          reason I&apos;m giving 4 stars instead of 5 is because the drive was a bit longer than expected due
                          to traffic. Otherwise, everything was perfect!
                        </p>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <span className="font-semibold">Elena R.</span>
                            <span className="ml-2 text-sm text-gray-500">February 2023</span>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">
                          This tour exceeded my expectations! Our guide was passionate about wildlife conservation and
                          shared fascinating information throughout the day. The beaches were less crowded than I
                          expected, which was a pleasant surprise. The whole experience felt authentic and not touristy
                          at all.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline">Read More Reviews</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 text-center">
                  <div className="text-sm text-gray-500">From</div>
                  <div className="text-3xl font-bold text-green-700">{tour.price.toLocaleString()} XAF</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <div className="mb-6 space-y-4">
                 <div className="relative">
                   <Popover>
                     <PopoverTrigger asChild>
                       <Button variant="outline" className="w-full justify-start text-left font-normal bg-green-700 text-white hover:bg-green-800">
                           <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                       </PopoverTrigger>
                       <PopoverContent className="w-auto p-0">
                          <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus className="bg-black text-white"
                          fromDate={new Date()} />
                        </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Number of Travelers</label>
                    <div className="relative">
                      <select
                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        value={numberOfTravelers}
                        onChange={(e) => setNumberOfTravelers(Number(e.target.value))}
                      >
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6">6 Adults</option>
                        <option value="7">7 Adults</option>
                        <option value="8">8 Adults</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Total Price Display */}
                <div className="mb-4 rounded-md bg-gray-50 p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Price:</span>
                    <span className="text-lg font-bold text-green-700">
                      {(tour.price * numberOfTravelers).toLocaleString()} XAF
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {tour.price.toLocaleString()} XAF × {numberOfTravelers} traveler{numberOfTravelers > 1 ? 's' : ''}
                  </div>
                </div>

                <Button
                  className="mb-2 w-full bg-green-700 hover:bg-green-800 disabled:opacity-50"
                  onClick={handleBookNow}
                  disabled={isBooking || !date}
                >
                  {isBooking ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Confirmation...
                    </>
                  ) : (
                    'Book Now'
                  )}
                </Button>



                <div className="mb-6 rounded-md bg-green-50 p-3 text-sm text-green-800">
                  <div className="flex items-start">
                    <Info className="mr-2 h-5 w-5 text-green-700" />
                    <div>
                      <p className="font-medium">Free cancellation</p>
                      <p>Cancel up to 24 hours in advance for a full refund</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-gray-500" />
                    <span>Duration: {tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-gray-500" />
                    <span>Group size: Up to 12 people</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                    <span>Pickup included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        )}
      </main>

      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  )
}
