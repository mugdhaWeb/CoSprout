import Landing from "./components/landing";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-green-100 to-green-200 sm:h-full lg:h-screen">
      <Navbar />
      <Landing />
    </main>
  );
}
