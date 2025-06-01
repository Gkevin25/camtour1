import { databases } from '@/lib/appwrite'
import { Query } from 'appwrite'
import { DATABASE_CONFIG } from '@/lib/config/database'

// Database and collection IDs from configuration
const { DATABASE_ID, COLLECTIONS } = DATABASE_CONFIG
const TOURS_COLLECTION_ID = COLLECTIONS.TOURS

/**
 * Tour interface for TypeScript-like documentation
 * {
 *   id: string,
 *   title: string,
 *   image: string,
 *   price: number,
 *   duration: string,
 *   rating: number,
 *   reviews: number,
 *   location: string,
 *   tag: string,
 *   description: string,
 *   highlights: string[]
 * }
 */

/**
 * Fetch all tours from the Appwrite database
 * @returns {Promise<Array>} Array of tour objects
 */
export async function fetchTours() {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TOURS_COLLECTION_ID,
      [
        Query.orderDesc('$createdAt'), // Order by creation date, newest first
        Query.limit(100) // Limit to 100 tours
      ]
    )
    
    // Transform the Appwrite document format to match our expected structure
    const tours = response.documents.map(doc => ({
      id: doc.$id,
      title: doc.tour_name || '',
      image: doc.image || '/placeholder.svg?height=300&width=400',
      price: doc.price || 0,
      duration: doc.duration || '',
      rating: doc.rating || 0,
      reviews: doc.reviews || 0,
      location: doc.location || '',
      tag: doc.category || '',
      description: doc.description || '',
      highlights: doc.highlights || []
    }))
    
    return tours
  } catch (error) {
    console.error('Error fetching tours:', error)
    throw new Error('Failed to fetch tours. Please try again later.')
  }
}

/**
 * Fetch tours filtered by category/tag
 * @param {string} category - The category to filter by
 * @returns {Promise<Array>} Array of filtered tour objects
 */
export async function fetchToursByCategory(category) {
  try {
    if (category === 'all') {
      return await fetchTours()
    }
    
    const response = await databases.listDocuments(
      DATABASE_ID,
      TOURS_COLLECTION_ID,
      [
        Query.equal('tag', category),
        Query.orderDesc('$createdAt'),
        Query.limit(100)
      ]
    )
    
    const tours = response.documents.map(doc => ({
      id: doc.$id,
      title: doc.title || '',
      image: doc.image || '/placeholder.svg?height=300&width=400',
      price: doc.price || 0,
      duration: doc.duration || '',
      rating: doc.rating || 0,
      reviews: doc.reviews || 0,
      location: doc.location || '',
      tag: doc.tag || '',
      description: doc.description || '',
      highlights: doc.highlights || []
    }))
    
    return tours
  } catch (error) {
    console.error('Error fetching tours by category:', error)
    throw new Error(`Failed to fetch ${category} tours. Please try again later.`)
  }
}

/**
 * Fetch a single tour by ID
 * @param {string} tourId - The ID of the tour to fetch
 * @returns {Promise<Object>} Tour object
 */
export async function fetchTourById(tourId) {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      TOURS_COLLECTION_ID,
      tourId
    )
    
    return {
      id: response.$id,
      title: response.title || '',
      image: response.image || '/placeholder.svg?height=300&width=400',
      price: response.price || 0,
      duration: response.duration || '',
      rating: response.rating || 0,
      reviews: response.reviews || 0,
      location: response.location || '',
      tag: response.tag || '',
      description: response.description || '',
      highlights: response.highlights || []
    }
  } catch (error) {
    console.error('Error fetching tour by ID:', error)
    throw new Error('Failed to fetch tour details. Please try again later.')
  }
}

/**
 * Search tours by title or description
 * @param {string} searchTerm - The search term
 * @returns {Promise<Array>} Array of matching tour objects
 */
export async function searchTours(searchTerm) {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      TOURS_COLLECTION_ID,
      [
        Query.search('title', searchTerm),
        Query.orderDesc('$createdAt'),
        Query.limit(50)
      ]
    )
    
    const tours = response.documents.map(doc => ({
      id: doc.$id,
      title: doc.title || '',
      image: doc.image || '/placeholder.svg?height=300&width=400',
      price: doc.price || 0,
      duration: doc.duration || '',
      rating: doc.rating || 0,
      reviews: doc.reviews || 0,
      location: doc.location || '',
      tag: doc.tag || '',
      description: doc.description || '',
      highlights: doc.highlights || []
    }))
    
    return tours
  } catch (error) {
    console.error('Error searching tours:', error)
    throw new Error('Failed to search tours. Please try again later.')
  }
}
