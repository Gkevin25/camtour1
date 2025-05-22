import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Filter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import TourCard from "@/components/tour-card"

export default function DayTripsPage() {
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
              <span className="font-medium text-gray-900">Day Trips & Excursions</span>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-green-700 py-8 text-white">
          <div className="container">
            <h1 className="text-3xl font-bold md:text-4xl">Cameroon Day Trips & Excursions</h1>
            <p className="mt-2 text-lg">
              Explore the best of Cameroon with our carefully curated day trips and excursions
            </p>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="mb-3 font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[45000]} max={100000} step={5000} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">5,000 XAF</span>
                      <span className="text-sm font-medium">45,000 XAF</span>
                      <span className="text-sm text-gray-600">100,000 XAF</span>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <Accordion type="single" collapsible className="mb-6 w-full">
                  <AccordionItem value="duration">
                    <AccordionTrigger className="font-medium">Duration</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="duration-1" />
                          <label
                            htmlFor="duration-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Less than 1 hour
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="duration-2" />
                          <label
                            htmlFor="duration-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            1 to 4 hours
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="duration-3" defaultChecked />
                          <label
                            htmlFor="duration-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            4 hours to 1 day
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Tour Type */}
                <Accordion type="single" collapsible className="mb-6 w-full">
                  <AccordionItem value="type">
                    <AccordionTrigger className="font-medium">Tour Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-1" defaultChecked />
                          <label
                            htmlFor="type-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Day Trips
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-2" />
                          <label
                            htmlFor="type-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Cultural Tours
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-3" />
                          <label
                            htmlFor="type-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Nature & Wildlife
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="type-4" />
                          <label
                            htmlFor="type-4"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Adventure Tours
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Attractions */}
                <Accordion type="single" collapsible className="mb-6 w-full">
                  <AccordionItem value="attractions">
                    <AccordionTrigger className="font-medium">Attractions</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="attr-1" />
                          <label
                            htmlFor="attr-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Mount Cameroon
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="attr-2" />
                          <label
                            htmlFor="attr-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Limbe Wildlife Centre
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="attr-3" />
                          <label
                            htmlFor="attr-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Kribi Beaches
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="attr-4" />
                          <label
                            htmlFor="attr-4"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Lobe Falls
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Departure Point */}
                <Accordion type="single" collapsible className="mb-6 w-full">
                  <AccordionItem value="departure">
                    <AccordionTrigger className="font-medium">Departure Point</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dep-1" defaultChecked />
                          <label
                            htmlFor="dep-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Douala
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dep-2" />
                          <label
                            htmlFor="dep-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Yaoundé
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dep-3" />
                          <label
                            htmlFor="dep-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Limbe
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dep-4" />
                          <label
                            htmlFor="dep-4"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Kribi
                          </label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button className="w-full bg-green-700 hover:bg-green-800">Apply Filters</Button>
              </div>
            </div>

            {/* Tour Listings */}
            <div className="lg:col-span-3">
              {/* Sort and Results Count */}
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <p className="text-gray-600">
                  <span className="font-medium">24</span> tours found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
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
              </div>

              {/* Tour Cards */}
              <div className="space-y-6">
                <TourCard
                  title="Limbe Wildlife Centre & Black Sand Beaches Day Trip"
                  image="/placeholder.svg?height=300&width=400"
                  price={45000}
                  duration="8 hours"
                  rating={4.8}
                  reviews={124}
                  location="Limbe"
                  description="Discover Limbe's famous wildlife center and relax on unique black sand beaches. Includes hotel pickup, lunch, and guided tour."
                  highlights={[
                    "Visit the Limbe Wildlife Centre and see rescued primates",
                    "Relax on the volcanic black sand beaches",
                    "Enjoy a traditional Cameroonian lunch",
                    "Learn about local conservation efforts",
                  ]}
                />

                <TourCard
                  title="Mount Cameroon Hiking Day Excursion"
                  image="/placeholder.svg?height=300&width=400"
                  price={65000}
                  duration="10 hours"
                  rating={4.9}
                  reviews={87}
                  location="Buea"
                  description="Experience the lower slopes of Mount Cameroon with expert guides. Perfect for nature lovers and hiking enthusiasts."
                  highlights={[
                    "Guided hike on the lower slopes of Mount Cameroon",
                    "Spectacular views of the surrounding landscape",
                    "Learn about local flora and fauna",
                    "Picnic lunch included",
                  ]}
                />

                <TourCard
                  title="Kribi Waterfall & Beach Excursion"
                  image="/placeholder.svg?height=300&width=400"
                  price={55000}
                  duration="9 hours"
                  rating={4.7}
                  reviews={156}
                  location="Kribi"
                  description="Visit the spectacular Lobe Falls where the river meets the ocean and enjoy time on Kribi's pristine beaches."
                  highlights={[
                    "See the unique Lobe Falls where water cascades directly into the ocean",
                    "Relax on Kribi's beautiful white sand beaches",
                    "Optional boat ride to get closer to the falls",
                    "Fresh seafood lunch at a local restaurant",
                  ]}
                />

                <TourCard
                  title="Douala City & Cultural Tour"
                  image="/placeholder.svg?height=300&width=400"
                  price={35000}
                  duration="6 hours"
                  rating={4.6}
                  reviews={92}
                  location="Douala"
                  description="Explore Cameroon's largest city with a knowledgeable local guide. Visit markets, museums, and cultural sites."
                  highlights={[
                    "Visit the Douala Maritime Museum",
                    "Explore the colorful Central Market",
                    "See the historic Bonanjo district",
                    "Sample local cuisine at a traditional restaurant",
                  ]}
                />

                <TourCard
                  title="Yaoundé Political & Historical Tour"
                  image="/placeholder.svg?height=300&width=400"
                  price={40000}
                  duration="7 hours"
                  rating={4.5}
                  reviews={78}
                  location="Yaoundé"
                  description="Discover Cameroon's capital city, including government buildings, museums, and cultural landmarks."
                  highlights={[
                    "Visit the National Museum of Yaoundé",
                    "See the Unity Palace and government district",
                    "Explore the Central Market",
                    "Panoramic views from Mont Fébé",
                  ]}
                />

                <TourCard
                  title="Foumban Royal Palace & Artisan Tour"
                  image="/placeholder.svg?height=300&width=400"
                  price={50000}
                  duration="9 hours"
                  rating={4.8}
                  reviews={64}
                  location="Foumban"
                  description="Explore the historic Foumban Royal Palace and meet local artisans known for their exceptional craftsmanship."
                  highlights={[
                    "Tour the Foumban Royal Palace and Museum",
                    "Meet local artisans and see traditional crafts being made",
                    "Shop for authentic Cameroonian art and crafts",
                    "Learn about the history of the Bamoun Kingdom",
                  ]}
                />
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-700 text-white hover:bg-green-800">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Popular Destinations in Cameroon</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {["Limbe", "Kribi", "Douala", "Yaoundé", "Buea", "Foumban"].map((city) => (
                <Link
                  key={city}
                  href={`/destinations/${city.toLowerCase()}`}
                  className="group rounded-lg bg-white p-4 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-2 text-green-700 group-hover:text-green-800">
                    <MapPin className="mx-auto h-6 w-6" />
                  </div>
                  <h3 className="font-medium">{city}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container py-12">
          <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What should I bring on a day trip in Cameroon?</AccordionTrigger>
                <AccordionContent>
                  We recommend bringing sunscreen, a hat, comfortable walking shoes, insect repellent, a water bottle,
                  and a camera. For beach excursions, bring swimwear and a towel. It's also good to have some local
                  currency for small purchases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are meals included in the day trips?</AccordionTrigger>
                <AccordionContent>
                  Most of our day trips include at least one meal, typically lunch. Check the specific tour details for
                  information about included meals. Some tours may offer stops where you can purchase food or drinks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 2-3 days in advance to secure your spot, especially during peak tourist
                  season (November-February). Some popular tours may require booking further in advance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What is the cancellation policy?</AccordionTrigger>
                <AccordionContent>
                  Most tours offer free cancellation up to 24 hours before the start time. Some specialized tours may
                  have different policies. The specific cancellation policy is listed on each tour's booking page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do the tours have English-speaking guides?</AccordionTrigger>
                <AccordionContent>
                  Yes, all our tours include English-speaking guides. Many guides also speak French, and some speak
                  local Cameroonian languages. If you need a guide with specific language skills, please mention this
                  when booking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
