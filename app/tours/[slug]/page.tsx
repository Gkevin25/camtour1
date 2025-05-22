import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Clock, MapPin, Users, Calendar, Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  // This would normally fetch data based on the slug
  const tourName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

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
            <Button variant="ghost">Sign In</Button>
            <Button className="bg-green-700 hover:bg-green-800">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="container">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-gray-500 hover:text-green-700">
                Home
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <Link href="/tours" className="text-gray-500 hover:text-green-700">
                Tours
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <Link href="/tours/day-trips" className="text-gray-500 hover:text-green-700">
                Day Trips & Excursions
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-900">{tourName}</span>
            </div>
          </div>
        </div>

        {/* Tour Header */}
        <div className="container py-6">
          <h1 className="text-3xl font-bold">{tourName}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              <span className="ml-1 font-medium">4.8</span>
              <span className="ml-1 text-gray-500">(124 reviews)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-1 h-5 w-5 text-gray-500" />
              <span>Limbe, Cameroon</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-5 w-5 text-gray-500" />
              <span>8 hours</span>
            </div>
          </div>
        </div>

        {/* Tour Gallery */}
        <div className="container mb-8">
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            <div className="col-span-2 row-span-2 relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt={tourName}
                fill
                className="rounded-l-lg object-cover"
              />
            </div>
            <div className="relative h-[196px]">
              <Image src="/placeholder.svg?height=400&width=300" alt="Tour image" fill className="object-cover" />
            </div>
            <div className="relative h-[196px]">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Tour image"
                fill
                className="rounded-tr-lg object-cover"
              />
            </div>
            <div className="relative h-[196px]">
              <Image src="/placeholder.svg?height=400&width=300" alt="Tour image" fill className="object-cover" />
            </div>
            <div className="relative h-[196px]">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Tour image"
                fill
                className="rounded-br-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-br-lg bg-black/50">
                <Button variant="outline" className="text-white">
                  View All Photos
                </Button>
              </div>
            </div>
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
                  <TabsTrigger value="includes">What's Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold">About This Tour</h2>
                    <p className="text-gray-700">
                      Discover the natural beauty and wildlife of Limbe on this full-day excursion from Douala. Visit
                      the famous Limbe Wildlife Centre, home to rescued primates and other animals native to Cameroon's
                      forests. After an educational tour of the center, enjoy a traditional Cameroonian lunch before
                      heading to Limbe's unique black sand beaches for relaxation and swimming.
                    </p>
                    <p className="mt-4 text-gray-700">
                      This tour is perfect for nature lovers, families, and anyone interested in conservation efforts in
                      Cameroon. Your knowledgeable guide will share insights about local culture, wildlife, and the
                      volcanic origins of Limbe's distinctive beaches.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Tour Highlights</h3>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Visit the Limbe Wildlife Centre and see rescued primates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Relax on the volcanic black sand beaches</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Enjoy a traditional Cameroonian lunch</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Learn about local conservation efforts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Spectacular views of Mount Cameroon (weather permitting)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-green-700" />
                        <span>Comfortable round-trip transportation from your hotel</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Additional Information</h3>
                    <div className="rounded-lg border">
                      <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                        <div className="p-4">
                          <h4 className="font-medium text-gray-500">Tour Duration</h4>
                          <p>8 hours</p>
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
                      <h3 className="text-lg font-semibold">9:30 AM - Limbe Wildlife Centre</h3>
                      <p className="text-gray-700">
                        Arrive at the Limbe Wildlife Centre for a guided tour. See chimpanzees, gorillas, drills, and
                        other primates, as well as various bird species. Learn about conservation efforts and
                        rehabilitation programs.
                      </p>
                    </div>

                    <div className="relative border-l-2 border-green-700 pl-6">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-green-700"></div>
                      <h3 className="text-lg font-semibold">12:30 PM - Lunch</h3>
                      <p className="text-gray-700">
                        Enjoy a traditional Cameroonian lunch at a local restaurant featuring fresh seafood and other
                        local specialties.
                      </p>
                    </div>

                    <div className="relative border-l-2 border-green-700 pl-6">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-green-700"></div>
                      <h3 className="text-lg font-semibold">2:00 PM - Black Sand Beaches</h3>
                      <p className="text-gray-700">
                        Head to Limbe's famous black sand beaches. Relax, swim, or take a walk along the shore. Your
                        guide will explain the volcanic origins of these unique beaches.
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
                  <h2 className="mb-4 text-2xl font-semibold">What's Included</h2>

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
                            <span>Entrance fees to Limbe Wildlife Centre</span>
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
                        <div className="text-4xl font-bold">4.8</div>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= 5 ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <div className="mt-1 text-sm text-gray-500">Based on 124 reviews</div>
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
                          incredible. The black sand beaches were beautiful and unlike anything I've seen before. Our
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
                          reason I'm giving 4 stars instead of 5 is because the drive was a bit longer than expected due
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
                  <div className="text-3xl font-bold text-green-700">45,000 XAF</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <div className="mb-6 space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Select Date</label>
                    <div className="relative">
                      <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span>Select a date</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Number of Travelers</label>
                    <div className="relative">
                      <select className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adults</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="mb-4 w-full bg-green-700 hover:bg-green-800">Book Now</Button>

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
                    <span>Duration: 8 hours</span>
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

        {/* Similar Tours */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Similar Tours You Might Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mount Cameroon Hiking Day Excursion",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 65000,
                  location: "Buea",
                },
                {
                  title: "Kribi Waterfall & Beach Excursion",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 55000,
                  location: "Kribi",
                },
                {
                  title: "Douala City & Cultural Tour",
                  image: "/placeholder.svg?height=300&width=400",
                  price: 35000,
                  location: "Douala",
                },
              ].map((tour, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{tour.location}</span>
                    </div>
                    <h3 className="mb-2 line-clamp-2 font-semibold">{tour.title}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-green-700">{tour.price.toLocaleString()} XAF</span>
                        <span className="text-sm text-gray-500"> per person</span>
                      </div>
                      <Button className="bg-green-700 hover:bg-green-800" size="sm">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
