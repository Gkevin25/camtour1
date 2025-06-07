import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

const destinations = [
  {
    id: "coastal-region",
    name: "Adamawa (Adamaoua)",
    image: "/coastal1.jpg",
    description:
      "Explore Cameroon's beautiful coastline with black and white sand beaches, wildlife centers, and vibrant port cities.",
    locations: [
      {
        id: "Ngaoundere",
        name: "Capital: Ngaoundéré",
        image: "/limbe11.jpg",
        description:
          "Known for its black sand beaches and wildlife center, Limbe offers a unique coastal experience at the foot of Mount Cameroon.",
      },
      
      
    ],
  },
  {
    id: "western-highlands",
    name: "Centre (Centre)",
    image: "/western1.jpg",
    description:
      "Discover the mountainous region of Cameroon with its cool climate, tea plantations, and rich cultural heritage.",
    locations: [
      {
        id: "yaounde",
        name: "Capital: Yaoundé",
        image: "/buea1.jpg",
        description:
          "The gateway to Mount Cameroon, offering hiking adventures and stunning views of the surrounding landscape.",
      },
      
    ],
  },
  {
    id: "northern-savanna",
    name: "East (Est)",
    image: "/savanah1.jpg",
    description:
      "Experience the vast savannas of northern Cameroon, home to diverse wildlife and traditional cultures.",
    locations: [
      {
        id: "bertoua",
        name: "Capital: Bertoua",
        image: "/waza1.webp",
        description:
          "A UNESCO Biosphere Reserve featuring elephants, giraffes, lions, and numerous bird species in their natural habitat.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "Far North (Extrême-Nord)",
    image: "/limbe4.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "maroua",
        name: "Capital: Maroua",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "Littoral (Littoral)",
    image: "/bertoua4.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "douala",
        name: "Capital: Douala",
        image: "/limbe5.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "North (Nord)",
    image: "/rainforest1.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "korup-national-park",
        name: "Capital: Garoua",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "Northwest (Nord-Ouest)",
    image: "/rainforest1.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "korup-national-park",
        name: "Capital: Bamenda",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "West (Ouest)",
    image: "/rainforest1.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "korup-national-park",
        name: "Capital: Bafoussam",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "South (Sud)",
    image: "/rainforest1.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "korup-national-park",
        name: "Capital: Ebolowa",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
  {
    id: "rainforest-region",
    name: "Southwest (Sud-Ouest)",
    image: "/rainforest1.jpg",
    description:
      "Explore the dense rainforests of southern and eastern Cameroon, home to incredible biodiversity and indigenous communities.",
    locations: [
      {
        id: "korup-national-park",
        name: "Capital: Buea",
        image: "/korup1.jpg",
        description:
          "One of Africa's oldest and most diverse rainforests, home to over 400 tree species and numerous endangered animals.",
      },
      
    ],
  },
]

export default function DestinationsPage() {
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
            alt="Cameroon Destinations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Discover Cameroon's Destinations</h1>
            <p className="mb-8 max-w-2xl text-lg">
              From coastal beaches to rainforests, mountains to savannas - explore the diverse regions of Africa in
              miniature
            </p>
          </div>
        </section>

        {/* Map Overview */}
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Regions of Cameroon</h2>
          <div className="relative mx-auto h-[1500px] w-full max-w-4xl rounded-lg border shadow-md">
            <Image
              src="/MapofCameroon.png?height=800&width=200"
              alt="Map of Cameroon"
              fill
              className="rounded-lg object-cover"
            />
            {/* This would be an interactive map in a real implementation */}
          </div>
        </section>

        {/* Regions */}
        <div className="container py-12">
          <div className="space-y-16">
            {destinations.map((region) => (
              <section key={region.id} id={region.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src={region.image || "/kribi1.jpg"}
                      alt={region.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="mb-4 text-3xl font-bold">{region.name}</h2>
                    <p className="mb-6 text-lg text-gray-700">{region.description}</p>
                    <div className="space-y-4">
                      {region.locations.map((location) => (
                        <Link
                          key={location.id}
                          href={`/destinations/${location.id}`}
                          className="flex items-center rounded-lg border p-4 transition-colors hover:bg-green-50"
                        >
                          <div className="mr-4 h-16 w-16 overflow-hidden rounded-md">
                            <Image
                              src={location.image || "/limbe3.jpg"}
                              alt={location.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{location.name}</h3>
                            <p className="text-sm text-gray-600 line-clamp-1">{location.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                    <Button className="mt-6 bg-green-700 hover:bg-green-800">Explore {region.name} Tours</Button>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Featured Destinations */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Featured Destinations</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Mount Cameroon",
                  image: "/mount1.jpg",
                  description:
                    "West Africa's highest peak, offering challenging hikes and diverse ecosystems from rainforest to alpine.",
                },
                {
                  name: "Lobe Falls",
                  image: "/lobe1.jpg",
                  description:
                    "One of the few places in the world where a waterfall flows directly into the ocean, located near Kribi.",
                },
                {
                  name: "Limbe Wildlife Centre",
                  image: "/wildlife1.jpg",
                  description:
                    "A sanctuary for rescued primates and other wildlife, offering educational tours and conservation programs.",
                },
              ].map((destination, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/limbe9.jpg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{destination.name}</h3>
                    <p className="mb-4 text-gray-600">{destination.description}</p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">Explore</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Travel Tips for Cameroon</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Best Time to Visit</h3>
              <p className="mb-4 text-gray-700">
                The dry season (November to February) is generally the best time to visit Cameroon. The weather is more
                predictable, roads are more accessible, and wildlife viewing is optimal. However, each region has its
                own microclimate:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Coastal Region: November to February offers less rainfall and humidity</li>
                <li>Western Highlands: October to March provides clearer views and better hiking conditions</li>
                <li>Northern Savanna: November to May is the dry season with better wildlife viewing</li>
                <li>Rainforest Region: December to February has slightly less rainfall</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">What to Pack</h3>
              <p className="mb-4 text-gray-700">
                Cameroon's diverse climates require thoughtful packing. Here are some essentials:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Lightweight, breathable clothing for hot coastal and northern areas</li>
                <li>Warmer layers for the highlands, especially in the evenings</li>
                <li>Rain gear during the rainy season (March to November, varies by region)</li>
                <li>Sturdy walking shoes or hiking boots for uneven terrain</li>
                <li>Insect repellent and sunscreen</li>
                <li>Basic first aid kit and any necessary medications</li>
                <li>Camera with extra batteries (charging opportunities may be limited in remote areas)</li>
              </ul>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
