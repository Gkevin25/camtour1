
import { LoginForm } from "@/components/auth/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            CamTour
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">Welcome back! Please sign in to continue exploring Cameroon</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


















/*

1. Imports: The code begins by importing necessary components and libraries. It imports a `LoginForm` component for handling user authentication, several UI components related to card layouts (like `Card`, `CardContent`, `CardDescription`, `CardHeader`, and `CardTitle`), and a `Link` component from Next.js for navigation between pages.

2. Component Definition: The main part of the code defines a functional component called `LoginPage`. This component is exported as the default export of the module, allowing it to be used in other parts of the application.

3. Return Statement: Inside the component, a return statement is used to render JSX, which is a syntax extension for JavaScript that looks similar to HTML.

4. Main Container: The outermost element is a `div` that serves as a container for the entire login page. It is styled to take up the full height of the screen and uses flexbox to center its content both vertically and horizontally. The background color is set to a light gray, and padding is applied for spacing.

5. Content Wrapper: Inside the main container, there is another `div` that limits the maximum width of the content and adds vertical spacing between its child elements.

6. Header Section: A `div` is used to center the text content at the top of the page. It includes a link that serves as the logo for the application, which navigates to the home page. Below the logo, there is a heading that prompts users to sign in, along with a welcoming message.

7. Card Component: A card layout is created using the imported card components. The card contains a header section with a title and a description, indicating that this area is for signing in.

8. Login Form: The `LoginForm` component is rendered within the card's content area. This component is responsible for displaying the input fields where users can enter their credentials.

9. Sign-Up Prompt: Below the card, there is another centered `div` that contains a paragraph prompting users who do not have an account to sign up. It includes a link that navigates to the signup page.

10. **Closing Tags**: The component structure is closed properly, ensuring that all elements are nested correctly.

Overall, this code defines a structured and styled login page that provides users with a clear interface for signing in to their accounts, while also offering a link to create a new account if they do not have one.*\
