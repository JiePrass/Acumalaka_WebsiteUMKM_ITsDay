import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Review from "../components/landing/Review";

export default function Home() {
    return (
        <main className="min-h-screen space-y-12 mb-12 bg-background">
            <Hero />
            <About />
            <Review />
        </main>
    )
}