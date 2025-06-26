import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Review from "../components/landing/Review";
import Product from "../components/landing/Product";

export default function Home() {
    return (
        <main className="min-h-screen space-y-12 md:space-y-24 mb-12 md:mb-24 bg-background">
            <Hero />
            <About />
            <Product />
            <Review />
        </main>
    )
}