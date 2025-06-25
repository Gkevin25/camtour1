'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import TourCard from "@/components/tour-card"
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from "next/navigation"
import { fetchTours } from "@/lib/services/tours"



// Tour categories for filtering
const tourCategories = [
  { id: "all", name: "All Tours" },
  { id: "adventure", name: "Adventure Tours" },
  { id: "cultural", name: "Cultural Tours" },
  { id: "wildlife", name: "Wildlife & Nature" },
  { id: "beach", name: "Beach Getaways" },
  { id: "hiking", name: "Hiking & Trekking" },
]

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

export default function ToursPage() {
  const router = useRouter()
  const { user } = useAuth()

  // State for tours data and UI states
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  // Redirect to login if user is not authenticated
  if (!user) {
    router.push('/login')
  }

  // Fetch tours data on component mount
  useEffect(() => {
    const loadTours = async () => {
      try {
        setLoading(true)
        setError(null)
        const toursData = await fetchTours()
        console.log(toursData)
        setTours(toursData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tours')
        console.error('Error loading tours:', err)
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

  // Filter tours based on active category
  const filteredTours = activeCategory === "all"
    ? tours
    : tours.filter(tour => tour.tag.toLowerCase() === activeCategory.toLowerCase())

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="h-8 w-8 animate-spin text-green-700" />
      <span className="ml-2 text-lg">Loading tours...</span>
    </div>
  )

  // Error component
  const ErrorMessage = ({ message }: { message: string }) => (
    <Alert className="mx-auto max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
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
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/fako.jpg"
            alt="Cameroon Tours"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Explore Cameroon Tours</h1>
            <p className="mb-8 max-w-2xl text-lg">
              Discover the best tours and experiences across Cameroon&apos;s diverse landscapes and rich cultural heritage
            </p>

          </div>
        </section>

        <div className="container py-12">
          {/* Show loading or error state */}
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}

          {/* Tour Categories - only show when not loading and no error */}
          {!loading && !error && (
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="mb-8 grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                {tourCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {/* Featured Tours */}
                <section>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Featured Tours</h2>
                    <Select defaultValue="recommended">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-low">Price (Low to High)</SelectItem>
                        <SelectItem value="price-high">Price (High to Low)</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="duration">Duration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tours.slice(0, 3).map((tour: Tour) => (
                      <Card key={tour.id} className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative h-48">
                          <Badge className="absolute left-2 top-2 z-10 bg-green-700">{tour.tag}</Badge>
                          <Image
                            src={tour.image || "/placeholder.svg"}
                            alt={tour.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center text-sm text-gray-500">
                              <MapPin className="mr-1 h-4 w-4" />
                              {tour.location}
                            </span>
                            <span className="text-sm text-gray-500">{tour.duration}</span>
                          </div>
                          <h3 className="mt-2 line-clamp-2 font-semibold">
                            <Link href={`/tours/${tour.id}`} className="hover:text-green-700">
                              {tour.title}
                            </Link>
                          </h3>
                          <div className="mt-2 flex items-center">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                            <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div>
                              <span className="text-lg font-bold text-green-700">{tour.price.toLocaleString()} XAF</span>
                              <span className="text-sm text-gray-500"> per person</span>
                            </div>
                            <Link href={`/tours/${tour.id}`}>
                              <Button className="bg-green-700 hover:bg-green-800" size="sm">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* All Tours */}
                <section>
                  <h2 className="mb-6 text-2xl font-bold">All Tours</h2>
                  <div className="space-y-6">
                    {tours.map((tour: Tour) => (
                      <TourCard
                        key={tour.id}
                        id={tour.id}
                        title={tour.title}
                        image={tour.image}
                        imageGallery={tour.imageGallery}
                        price={tour.price}
                        duration={tour.duration}
                        rating={tour.rating}
                        reviews={tour.reviews}
                        location={tour.location}
                        description={tour.description}
                        highlights={tour.highlights}
                      />
                    ))}
                  </div>
                </section>
              </TabsContent>

              {/* Other tabs would have similar content but filtered */}
              {tourCategories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <section>
                    <h2 className="mb-6 text-2xl font-bold">{category.name}</h2>
                    <div className="space-y-6">
                      {filteredTours
                        .filter((tour: Tour) => tour.tag.toLowerCase() === category.id.toLowerCase())
                        .map((tour: Tour) => (
                          <TourCard
                            key={tour.id}
                            id={tour.id}
                            title={tour.title}
                            image={tour.image}
                            imageGallery={tour.imageGallery}
                            price={tour.price}
                            duration={tour.duration}
                            rating={tour.rating}
                            reviews={tour.reviews}
                            location={tour.location}
                            description={tour.description}
                            highlights={tour.highlights}
                          />
                        ))}
                    </div>
                  </section>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>

        {/* Why Choose Us */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Choose CamTour</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-green-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Local Expertise</h3>
                <p className="text-gray-600">
                  Our guides are local experts with deep knowledge of Cameroon&apos;s culture and landscapes
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-red-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-red-700"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Authentic Experiences</h3>
                <p className="text-gray-600">We focus on genuine cultural exchanges and authentic local experiences</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-yellow-600"
                  >
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                    <path d="m3 3 18 18" />
                    <path d="M10.5 13.5 3 21" />
                    <path d="m14 10-3.5 3.5" />
                    <path d="M10.5 13.5 14 17" />
                    <path d="M14 10 21 3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Best Price Guarantee</h3>
                <p className="text-gray-600">
                  We promise the best experiences at competitive prices with no hidden fees
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-green-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-700"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Small Groups</h3>
                <p className="text-gray-600">
                  We keep our tour groups small to ensure personalized attention and better experiences
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">What Our Customers Say</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                location: "United States",
                text: "The Mount Cameroon hiking tour was the highlight of my trip to Africa. The guides were knowledgeable and supportive, and the views were absolutely breathtaking. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                location: "Canada",
                text: "The wildlife tour exceeded all my expectations. We saw elephants, giraffes, and so many bird species. Our guide was passionate about conservation and taught us so much.",
                rating: 5,
              },
              {
                name: "Elena Rodriguez",
                location: "Spain",
                text: "The cultural tour through Foumban was incredible. Meeting local artisans and learning about their craft was a unique experience I'll never forget. CamTour provided an authentic glimpse into Cameroon's rich heritage.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
