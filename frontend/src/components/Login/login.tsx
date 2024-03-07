'use-client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V2DUizFFhs8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default function Component() {
  const navigate = useNavigate();

  const [enrollment, setEnrollment] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        enrollment,
        password,
      });

      console.log(enrollment, password );

      if (response.status === 200) {
        navigate('/hub');
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

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
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignIn} className="w-full py-3 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

