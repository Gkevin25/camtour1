# Appwrite Database Setup for CamTour

This guide will help you set up the Appwrite database for the CamTour application to replace hardcoded tours data with dynamic data.

## Prerequisites

- An Appwrite account and project
- Access to the Appwrite console
- The project is already configured with Appwrite client (see `lib/appwrite.js`)

## Database Setup Steps

### 1. Create Database

1. Go to your Appwrite console
2. Navigate to "Databases" section
3. Create a new database with ID: `camtour-db`

### 2. Create Tours Collection

1. Inside the `camtour-db` database, create a new collection
2. Set Collection ID: `tours`
3. Add the following attributes:

#### Required Attributes:
- **title** (String, required, size: 255)
- **price** (Integer, required)
- **duration** (String, required, size: 50)
- **location** (String, required, size: 100)
- **tag** (String, required, size: 50)
- **description** (String, required, size: 1000)

#### Optional Attributes:
- **image** (String, optional, size: 500, default: "/placeholder.svg?height=300&width=400")
- **rating** (Double, optional, default: 0)
- **reviews** (Integer, optional, default: 0)
- **highlights** (String Array, optional)

### 3. Set Collection Permissions

Configure the following permissions for the tours collection:

#### Read Permissions:
- Any authenticated user can read tours
- Add role: `users` with `read` permission

#### Write Permissions (Optional):
- Only admins can create/update/delete tours
- Add role: `admins` with `create`, `update`, `delete` permissions

### 4. Populate Sample Data

Use the sample data provided in `lib/data/sample-tours.js` to create initial tour documents:

1. Go to the tours collection in Appwrite console
2. Click "Create Document"
3. Use the sample data to create each tour
4. Alternatively, use the Appwrite SDK to bulk import the data

### 5. Update Configuration (if needed)

If you used different database or collection IDs, update the configuration in:
- `lib/config/database.js`

## Verification

After setup, the tours page should:
1. Show a loading spinner while fetching data
2. Display tours from the database instead of hardcoded data
3. Show an error message if the database is unreachable
4. Support filtering by category (adventure, cultural, wildlife, etc.)

## Troubleshooting

### Common Issues:

1. **"Failed to fetch tours" error**
   - Check database and collection IDs in `lib/config/database.js`
   - Verify collection permissions allow read access
   - Check Appwrite project configuration in `lib/appwrite.js`

2. **Empty tours list**
   - Ensure you have created tour documents in the collection
   - Check that documents have all required fields
   - Verify the collection is not empty in Appwrite console

3. **Authentication errors**
   - Ensure users are logged in before accessing tours
   - Check that collection permissions include authenticated users

### Database Schema Reference

```javascript
// Tour document structure
{
  title: "Mount Cameroon Hiking Adventure",
  image: "/placeholder.svg?height=300&width=400",
  price: 85000,
  duration: "2 days",
  rating: 4.8,
  reviews: 124,
  location: "Buea",
  tag: "adventure",
  description: "Climb West Africa's highest peak...",
  highlights: [
    "Summit West Africa's highest mountain",
    "Experience diverse ecological zones",
    // ...
  ]
}
```

## Next Steps

After successful setup:
1. Test the tours page functionality
2. Add more tour data as needed
3. Consider implementing search functionality
4. Add tour booking features
5. Implement admin panel for tour management
