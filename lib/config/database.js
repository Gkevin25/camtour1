// Appwrite Database Configuration
// Update these values to match your Appwrite project setup

export const DATABASE_CONFIG = {
  // Replace with your actual database ID from Appwrite console
  DATABASE_ID: '682eeb4b0034b4b0f901',
  
  // Replace with your actual collection IDs from Appwrite console
  COLLECTIONS: {
    TOURS: '682eeb5c0033b37e5b6a',
    //BOOKINGS: 'bookings',
    //USERS: 'users',
    //REVIEWS: 'reviews'
  }
}

// Tour collection schema (for reference)
// The tours collection should have the following attributes:
// - title (string, required)
// - image (string, optional)
// - price (number, required)
// - duration (string, required)
// - rating (number, optional, default: 0)
// - reviews (number, optional, default: 0)
// - location (string, required)
// - tag (string, required) - values: adventure, cultural, wildlife, beach, hiking, nature
// - description (string, required)
// - highlights (array of strings, optional)
