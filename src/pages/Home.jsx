import Hero from "../components/landing/Hero";
import About from "../components/landing/About";

export default function Home() {
    return (
        <main className="min-h-screen space-y-12 mb-12 bg-background">
            <Hero />
            <About />
        </main>
    )
}