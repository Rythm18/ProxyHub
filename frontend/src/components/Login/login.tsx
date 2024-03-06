/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V2DUizFFhs8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Welcome Back!</CardTitle>
          <CardDescription>Please enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="email">
              Enrollment
            </Label>
            <Input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
              id="enrollment"
              placeholder="2101xxxxxx"
              required
              type="number"
            />
          </div>
          <div className="space-y-4">
            <Label className="text-lg font-semibold" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 dark:border-gray-700 dark:focus:ring-gray-600"
              id="password"
              required
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <a href="/hub">Sign In</a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

