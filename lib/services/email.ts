import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

// TypeScript interfaces
export interface BookingData {
  userEmail: string
  userName: string
  tourTitle: string
  tourPrice: number
  tourDuration: string
  tourLocation: string
  tourDescription: string
  tourHighlights: string[]
  bookingDate: string
  numberOfTravelers: number
  totalPrice: number
}

export interface EmailResult {
  success: boolean
  message: string
  result?: any
  error?: string
}

/**
 * Send tour booking confirmation email
 * @param bookingData - The booking information
 * @returns Email sending result
 */
export async function sendBookingConfirmationEmail(bookingData: BookingData): Promise<EmailResult> {
  try {
    console.log('📧 Sending booking confirmation email...', bookingData)

    // Validate required environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing. Please check your environment variables.')
    }

    // Validate user email
    if (!bookingData.userEmail || bookingData.userEmail.trim() === '') {
      throw new Error('User email is required but was empty or undefined')
    }

    // Prepare email template parameters
    const templateParams = {
      // EmailJS standard parameters - try multiple naming conventions
      to_email: bookingData.userEmail,
      user_email: bookingData.userEmail,  // Alternative naming
      email: bookingData.userEmail,       // Another alternative
      to_name: bookingData.userName,
      user_name: bookingData.userName,
      from_name: 'CamTour',
      reply_to: 'noreply@camtour.com',

      // Tour information
      tour_title: bookingData.tourTitle,
      tour_price: bookingData.tourPrice.toLocaleString(),
      tour_duration: bookingData.tourDuration,
      tour_location: bookingData.tourLocation,
      tour_description: bookingData.tourDescription,
      tour_highlights: bookingData.tourHighlights.join('\n• '),

      // Booking details
      booking_date: bookingData.bookingDate,
      number_of_travelers: bookingData.numberOfTravelers,
      total_price: bookingData.totalPrice.toLocaleString(),
      booking_id: generateBookingId(),
      booking_timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Douala'
      })
    }

    console.log('📧 Email template parameters:', templateParams)

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('✅ Email sent successfully:', result)
    return {
      success: true,
      message: 'Booking confirmation email sent successfully!',
      result
    }

  } catch (error) {
    console.error('❌ Error sending email:', error)
    return {
      success: false,
      message: 'Failed to send confirmation email. Please contact support.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Generate a unique booking ID
 * @returns Unique booking ID
 */
function generateBookingId(): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8)
  return `CT-${timestamp}-${randomStr}`.toUpperCase()
}

/**
 * Initialize EmailJS (call this once in your app)
 */
export function initializeEmailJS(): void {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
    console.log('✅ EmailJS initialized successfully')
  } else {
    console.warn('⚠️ EmailJS public key not found')
  }
}

/**
 * Test EmailJS configuration with a simple email
 */
export async function testEmailJS(testEmail: string): Promise<EmailResult> {
  try {
    console.log('🧪 Testing EmailJS with email:', testEmail)

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS configuration is missing')
    }

    const testParams = {
      to_email: testEmail,
      user_email: testEmail,
      email: testEmail,
      to_name: 'Test User',
      user_name: 'Test User',
      from_name: 'CamTour Test',
      tour_title: 'Test Tour',
      tour_price: '50,000',
      tour_duration: '1 day',
      tour_location: 'Test Location',
      tour_description: 'This is a test email',
      tour_highlights: 'Test highlight 1\n• Test highlight 2',
      booking_date: 'Test Date',
      number_of_travelers: 1,
      total_price: '50,000',
      booking_id: 'TEST-123',
      booking_timestamp: new Date().toLocaleString()
    }

    console.log('🧪 Test parameters:', testParams)

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      testParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('✅ Test email sent successfully:', result)
    return {
      success: true,
      message: 'Test email sent successfully!',
      result
    }

  } catch (error) {
    console.error('❌ Test email failed:', error)
    return {
      success: false,
      message: 'Test email failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
