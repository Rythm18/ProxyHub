/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V6yayPbFPLx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export default function Component() {
  return (
    <Card className="flex flex-col items-center mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
        <CardDescription>Enter your information and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
        <div className="space-y-2 text-left font-bold">
              <Label htmlFor="last-name" className="text-left">Username</Label>
              <Input  id="user-name" placeholder="username" />
          </div>
          <div className="space-y-2 text-left font-bold">
              <Label htmlFor="last-name ">Enrollment</Label>
              <Input id="last-name" placeholder="Enrollment" />
          </div>
          <div className="space-y-2 text-left font-bold">
            <Label htmlFor="email">Password</Label>
            <Input id="email" placeholder="password" type="password" />
          </div>
          <div className="space-y-2 text-left font-bold">
            <Label htmlFor="message">Branch</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Branches</SelectLabel>
                  <SelectItem value="ce">CE</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="csbs">CSBS</SelectItem>
                  <SelectItem value="iot">IOT</SelectItem>
                  <SelectItem value="ceai">CEAI</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}

