import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import SplashScreen from "./components/layout/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const splashDuration = 3500; // total animasi splash
    const fadeOutDuration = 1000; // durasi fade out sesuai SplashScreen

    // Tampilkan splash terlebih dahulu
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => {
        setShowContent(true);
      }, fadeOutDuration);
    }, splashDuration);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <>
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

      {showContent && (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}
