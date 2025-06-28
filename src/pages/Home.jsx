import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Product from "../components/landing/Product";
import BatikanAI from "../components/landing/BatikanAI";
import Delivery from "../components/landing/Delivery";
import Review from "../components/landing/Review";
import Contact from "../components/landing/Contact";

export default function Home() {
    return (
        <main className="min-h-screen space-y-16 md:space-y-[80px] mb-12 md:mb-24 bg-background">
            <Hero />
            <About />
            <Product />
            <BatikanAI />
            <Delivery />
            <Review />
            <Contact />
        </main>
    )
}