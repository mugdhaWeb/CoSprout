import Landing from "@/app/components/landing";
import NavbarAlt from "@/components/navbarAlt";
export default function Home() {
    return (
        <main className="bg-gradient-to-b overflow-hidden from-green-100 to-green-200 h-screen">
            <NavbarAlt />
            <div className="flex flex-col h-screen">
                <div className="flex-grow">
                    <iframe
                        title="Google"
                        className="w-full h-full"
                        src="https://zc488meakd7.typeform.com/to/UHiYCdrR"
                        allowFullScreen
                    />
                </div>
            </div>
        </main>
    );
}
