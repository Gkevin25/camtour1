// Utility script to migrate hardcoded tours data to Appwrite database
// Run this script once to populate your database with initial data

import { databases } from '@/lib/appwrite'
import { ID, Query } from 'appwrite'
import { DATABASE_CONFIG } from '@/lib/config/database'
import { sampleTours } from '@/lib/data/sample-tours'


const { DATABASE_ID, COLLECTIONS } = DATABASE_CONFIG

/**
 * Migrate sample tours data to Appwrite database
 * This function creates tour documents in the database
 */
export async function migrateTours() {
  console.log('Starting tours migration...')
  
  const results = {
    success: 0,
    failed: 0,
    errors: []
  }

  for (const tour of sampleTours) {
    try {
      const document = await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.TOURS,
        ID.unique(),
        {
          title: tour.title,
          image: tour.image,
          price: tour.price,
          duration: tour.duration,
          rating: tour.rating,
          reviews: tour.reviews,
          location: tour.location,
          tag: tour.tag,
          description: tour.description,
          highlights: tour.highlights
        }
      )
      
      console.log(`✅ Created tour: ${tour.title}`)
      results.success++
    } catch (error) {
      console.error(`❌ Failed to create tour: ${tour.title}`, error)
      results.failed++
      results.errors.push({
        tour: tour.title,
        error: error.message
      })
    }
  }

  console.log('\n📊 Migration Results:')
  console.log(`✅ Successfully created: ${results.success} tours`)
  console.log(`❌ Failed to create: ${results.failed} tours`)
  
  if (results.errors.length > 0) {
    console.log('\n🔍 Errors:')
    results.errors.forEach(({ tour, error }) => {
      console.log(`- ${tour}: ${error}`)
    })
  }

  return results
}

/**
 * Check if tours collection is empty
 */
export async function checkToursCollection() {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.TOURS,
      [Query.limit(1)]
    )
    
    return {
      exists: true,
      isEmpty: response.documents.length === 0,
      count: response.total
    }
  } catch (error) {
    console.error('Error checking tours collection:', error)
    return {
      exists: false,
      isEmpty: true,
      count: 0,
      error: error.message
    }
  }
}

/**
 * Clear all tours from the database (use with caution!)
 */
export async function clearTours() {
  console.log('⚠️  Clearing all tours from database...')
  
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.TOURS
    )
    
    const deletePromises = response.documents.map(doc =>
      databases.deleteDocument(DATABASE_ID, COLLECTIONS.TOURS, doc.$id)
    )
    
    await Promise.all(deletePromises)
    console.log(`✅ Deleted ${response.documents.length} tours`)
    
    return { success: true, deleted: response.documents.length }
  } catch (error) {
    console.error('❌ Error clearing tours:', error)
    return { success: false, error: error.message }
  }
}

// Example usage (uncomment to run):
// 
// // Check if collection exists and is empty
// checkToursCollection().then(result => {
//   console.log('Collection status:', result)
//   
//   if (result.isEmpty) {
//     // Migrate data if collection is empty
//     migrateTours()
//   } else {
//     console.log(`Collection already has ${result.count} tours`)
//   }
// })

// To run this migration:
// 1. Ensure your Appwrite database and collection are set up
// 2. Update the database configuration in lib/config/database.js
// 3. Import and call migrateTours() in a component or script
// 4. Or use the Appwrite console to manually create documents
