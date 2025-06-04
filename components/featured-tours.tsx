'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { fetchTours } from "@/lib/services/tours"
import { Star, Loader2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

export default function FeaturedTours() {
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadFeaturedTours = async () => {
      try {
        setLoading(true)
        console.log('🔍 Fetching featured tours...')
        const toursData = await fetchTours()

        // Get first 3 tours as featured tours
        const featuredTours = toursData.slice(0, 3)
        console.log('✅ Featured tours loaded:', featuredTours)
        setTours(featuredTours)
      } catch (err) {
        console.error('❌ Error fetching featured tours:', err)
        setError(err instanceof Error ? err.message : 'Failed to load featured tours')
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedTours()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-green-700" />
        <span className="ml-2 text-gray-600">Loading featured tours...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Alert className="max-w-md mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {error}
        </AlertDescription>
      </Alert>
    )
  }

  if (tours.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No featured tours available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour: Tour) => (
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
              <span className="text-sm text-gray-500">{tour.location}</span>
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
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full items-center justify-between">
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
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
