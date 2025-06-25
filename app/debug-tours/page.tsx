'use client'
import { useEffect, useState } from "react"
import { fetchTours } from "@/lib/services/tours"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Tour = {
  id: string
  title: string
  location: string
  price: number
  duration: string
  tag: string
  image?: string
  imageGallery?: string[]
}

export default function DebugToursPage() {
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const loadTours = async () => {
      try {
        setLoading(true)
        console.log('🔍 Fetching all tours for debugging...')
        const toursData = await fetchTours()
        console.log('✅ Tours data:', toursData)
        setTours(toursData)
      } catch (err) {
        console.error('❌ Error fetching tours:', err)
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    loadTours()
  }, [])

  if (loading) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold mb-4">Debug Tours - Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold mb-4">Debug Tours - Error</h1>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-4">Debug Tours Page</h1>
      <p className="mb-6">Total tours found: {tours.length}</p>
      
      <div className="space-y-4">
        {tours.map((tour, index) => (
          <Card key={tour.id} className="p-4">
            <CardContent>
              <h3 className="font-bold">Tour #{index + 1}</h3>
              <p><strong>ID:</strong> {tour.id}</p>
              <p><strong>Title:</strong> {tour.title}</p>
              <p><strong>Location:</strong> {tour.location}</p>
              <p><strong>Price:</strong> {tour.price} XAF</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
              <p><strong>Tag:</strong> {tour.tag}</p>
              <p><strong>Main Image:</strong> {tour.image ? 'Yes' : 'No'}</p>
              <p><strong>Gallery Images:</strong> {tour.imageGallery ? tour.imageGallery.length : 0} images</p>
              {tour.image && (
                <div className="mt-2">
                  <p><strong>Image URL:</strong> <span className="text-xs break-all">{tour.image}</span></p>
                </div>
              )}
              <div className="mt-2">
                <Button 
                  onClick={() => window.open(`/tours/${tour.id}`, '_blank')}
                  className="mr-2"
                >
                  Test Tour Link
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    console.log('Tour object:', tour)
                    navigator.clipboard.writeText(tour.id)
                    alert('Tour ID copied to clipboard!')
                  }}
                >
                  Copy ID
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {tours.length === 0 && (
        <p className="text-gray-600">No tours found in the database.</p>
      )}
    </div>
  )
}
