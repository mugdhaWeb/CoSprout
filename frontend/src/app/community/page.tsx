import Landing from '@/app/components/landing'
import Navbar from '@/app/components/navbar'
export default function Home() {
  return (
    <main className="bg-gradient-to-b overflow-hidden from-green-100 to-green-200 h-screen">
      <Navbar/>
      <div className="flex flex-col h-screen">
        Community Page
      </div>
    </main>
  )
}
