import Image from "next/image"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    name: "Ngaoundere",
    image: "/ngaoundere2.jpg",
    tours: 24,
  },
  {
    id: 2,
    name: "Bertoua",
    image: "/bertoua2.jpg",
    tours: 18,
  },
  {
    id: 3,
    name: "Douala",
    image: "/douala1.jpg",
    tours: 32,
  },
  {
    id: 4,
    name: "Yaounde",
    image: "/yaounde5.jpg",
    tours: 29,
  },
  {
    id: 5,
    name: "Garoua",
    image: "/maroua1.jpg",
    tours: 15,
  },
  {
    id: 6,
    name: "Buea",
    image: "/Limbe3.jpg",
    tours: 12,
  },
]

export default function PopularDestinations() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.name.toLowerCase()}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="aspect-[4/3] w-full">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-sm">{destination.tours} tours available</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
