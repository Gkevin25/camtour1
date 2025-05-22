import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import TourCard from "@/components/tour-card"

// This would normally come from a database or API
const getDestinationData = (slug: string) => {
  // Sample data for Limbe
  if (slug === "limbe") {
    return {
      name: "Limbe",
      region: "Coastal Region",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Limbe is a coastal city in the Southwest Region of Cameroon, known for its black sand beaches, botanical garden, and wildlife center. Situated at the foot of Mount Cameroon, it offers a unique blend of natural beauty, wildlife conservation, and cultural experiences.",
      highlights: [
        "Black Sand Beaches",
        "Limbe Wildlife Centre",
        "Limbe Botanical Garden",
        "Mount Cameroon Views",
        "Fresh Seafood",
      ],
      history:
        "Originally named Victoria, Limbe was founded in 1858 by British missionaries. It was renamed Limbe in 1982 and has a rich history influenced by German and British colonial periods. The city has grown from a small fishing village to an important port and tourism destination.",
      activities: [
        {
          name: "Visit the Limbe Wildlife Centre",
          description:
            "Home to rescued primates including gorillas, chimpanzees, and drills, as well as other wildlife. The center focuses on conservation and rehabilitation.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Relax on Down Beach",
          description:
            "Experience the unique black sand beaches formed from volcanic deposits. Enjoy swimming, sunbathing, and fresh seafood at beachside restaurants.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Explore the Limbe Botanical Garden",
          description:
            "Established in 1892, these gardens feature diverse plant species, walking paths, and a stunning view of the Atlantic Ocean.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          name: "Visit the Limbe Regional Museum",
          description:
            "Learn about the cultural heritage and history of the Southwest Region through artifacts and exhibitions.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
      tours: [
        {
          id: 2,
          title: "Limbe Wildlife Centre & Black Sand Beaches Day Trip",
          image: "/placeholder.svg?height=300&width=400",
          price: 45000,
          duration: "1 day",
          rating: 4.7,
          reviews: 98,
          location: "Limbe",
          description:
            "Discover Limbe's famous wildlife center and relax on unique black sand beaches. Includes hotel pickup and lunch.",
          highlights: [
            "Visit the Limbe Wildlife Centre and see rescued primates",
            "Relax on the volcanic black sand beaches",
            "Enjoy a traditional Cameroonian lunch",
            "Learn about local conservation efforts",
          ],
        },
      ],
      weather:
        "Limbe has a tropical monsoon climate with a distinct wet season from June to October and a drier season from November to May. Average temperatures range from 23°C to 32°C (73°F to 90°F) throughout the year.",
      gettingThere:
        "Limbe is approximately 70 km from Douala, Cameroon's largest city. You can reach Limbe by taxi or bus from Douala in about 1-2 hours, depending on traffic. The nearest international airport is Douala International Airport.",
    }
  }

  // Default data for other destinations
  return {
    name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    region: "Cameroon",
    image: "/placeholder.svg?height=800&width=1600",
    description: `Detailed information about ${
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
    } coming soon.`,
    highlights: ["Natural Beauty", "Cultural Experiences", "Local Cuisine", "Friendly People"],
    history: "Historical information coming soon.",
    activities: [
      {
        name: "Explore Local Attractions",
        description: "Discover the unique attractions this destination has to offer.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Experience Local Culture",
        description: "Immerse yourself in the rich cultural heritage of the region.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    tours: [],
    weather: "Weather information coming soon.",
    gettingThere: "Transportation information coming soon.",
  }
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationData(params.slug)

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
              <Link href="/destinations" className="text-gray-500 hover:text-green-700">
                Destinations
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-900">{destination.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">{destination.name}</h1>
            <p className="mb-8 max-w-2xl text-lg">{destination.region}</p>
            <div className="flex space-x-4">
              <Button className="bg-green-700 hover:bg-green-800">Explore Tours</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                View Map
              </Button>
            </div>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6 grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="tours">Tours</TabsTrigger>
                  <TabsTrigger value="practical">Practical Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold">About {destination.name}</h2>
                    <p className="text-gray-700">{destination.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Highlights</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 rounded-full bg-green-100 p-2">
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
                              className="h-5 w-5 text-green-700"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">History</h3>
                    <p className="text-gray-700">{destination.history}</p>
                  </div>

                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=1600"
                      alt={`${destination.name} landscape`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Things to Do in {destination.name}</h2>

                  <div className="space-y-8">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative h-[250px] overflow-hidden rounded-lg">
                          <Image
                            src={activity.image || "/placeholder.svg"}
                            alt={activity.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-semibold">{activity.name}</h3>
                          <p className="text-gray-700">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tours" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Tours in {destination.name}</h2>

                  {destination.tours.length > 0 ? (
                    <div className="space-y-6">
                      {destination.tours.map((tour) => (
                        <TourCard
                          key={tour.id}
                          title={tour.title}
                          image={tour.image}
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
                  ) : (
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <h3 className="mb-2 text-lg font-semibold">No Tours Available Yet</h3>
                      <p className="mb-4 text-gray-600">
                        We're currently developing new tours for this destination. Check back soon!
                      </p>
                      <Button className="bg-green-700 hover:bg-green-800">Browse All Tours</Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="practical" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Practical Information</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Weather & Climate</h3>
                        </div>
                        <p className="text-gray-700">{destination.weather}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <MapPin className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Getting There</h3>
                        </div>
                        <p className="text-gray-700">{destination.gettingThere}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <Info className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Local Tips</h3>
                        </div>
                        <ul className="list-inside list-disc space-y-2 text-gray-700">
                          <li>Learn a few basic French phrases as it's widely spoken</li>
                          <li>Respect local customs and traditions</li>
                          <li>Bargaining is expected in markets, but do so respectfully</li>
                          <li>Carry cash as credit cards may not be widely accepted</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
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
                            className="mr-2 h-5 w-5 text-green-700"
                          >
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                          </svg>
                          <h3 className="text-lg font-semibold">Best Time to Visit</h3>
                        </div>
                        <p className="text-gray-700">
                          The dry season (November to February) offers the best weather conditions for visiting{" "}
                          {destination.name}. This period provides clearer skies, less rainfall, and more comfortable
                          temperatures for outdoor activities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Map Location</h3>
                    <div className="relative h-[200px] overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt={`Map of ${destination.name}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" className="bg-white/80">
                          View Larger Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Nearby Destinations</h3>
                    <div className="space-y-4">
                      {["Douala", "Buea", "Kribi"].map((nearby, index) => (
                        <Link
                          key={index}
                          href={`/destinations/${nearby.toLowerCase()}`}
                          className="flex items-center rounded-lg border p-3 transition-colors hover:bg-green-50"
                        >
                          <div className="mr-3 h-10 w-10 overflow-hidden rounded-md">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt={nearby}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{nearby}</span>
                          <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Need Help Planning?</h3>
                    <p className="mb-4 text-gray-700">
                      Our travel experts can help you create the perfect itinerary for your visit to {destination.name}.
                    </p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">Contact Us</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Destinations */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Kribi", "Douala", "Mount Cameroon"].map((related, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={related}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{related}</h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">
                      Discover the beauty and attractions of {related}, another amazing destination in Cameroon.
                    </p>
                    <Link href={`/destinations/${related.toLowerCase().replace(/ /g, "-")}`}>
                      <Button className="w-full bg-green-700 hover:bg-green-800">Explore</Button>
                    </Link>
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
