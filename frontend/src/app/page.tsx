import Landing from '@/app/components/landing'
import Intro from '@/app/components/intro'
import Navbar from './components/navbar'
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Landing/>
      <Intro/>
    </main>
  )
}
