import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading
        ? <Loader />
        : <>
          <ScrollToTop />
          <NavBar />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </>}
    </>
  )
}

export default App
