import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-8xl/none">
              Welcome to ProxyHub
            </h1>
            <br />
            <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-400">
              Experience the ease of keeping your attendance above 75% . Sign up now to join the community.
              Help others and get helped by others.
            </p>
          </div>
          <br />
          <br />
          <div className="w-full max-w-sm space-y-2">
            <form className="grid gap-2">
              <div className="flex gap-6 items-center">
              <Button type="submit" className="text-xl h-15 w-40 transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><a href="/login">Login</a></Button>
              <Button type="submit" className="text-xl h-15 w-40 transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><a href="/login">Sign Up</a></Button>
              </div>
            </form>
            <br />
            <br />
            <p className="text-xs text-gray-500 dark:text-gray-400"></p>
          </div>
        </div>
      </div>
    </section>
  )
}