import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignupForm = () => {
  return (
    <Card className="sm:w-80 lg:w-96">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Masukkan email Anda di bawah ini untuk membuat akun baru
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Daftar
        </Button>
        <CardDescription>
          Sudah punya akun?{" "}
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Masuk
          </a>
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default SignupForm

