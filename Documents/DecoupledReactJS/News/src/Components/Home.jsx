import { useEffect, useState } from "react";

// import main from './main.jsx';
import MainMenu from "./MainMenu.jsx";
import Header from "./Header.jsx";
import MainSlider from "./MainSlider.jsx";
import RightSlider from "./RightSlider.jsx";
import Featured from "./Featured.jsx";
import Footer from "./Footer.jsx";
import NewsSidebar from "./NewsSidebar.jsx";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselItems, setCarouselItems] = useState([]);
  const [rightSlider, setRightSliderItems] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newssidebar, setNewsSideBar] = useState([]);
  const [tradndingNews, setTradndingNews] = useState([]);

  const loadContainer = async () => {
    let endPoint =
      "https://dev-backendnews.pantheonsite.io/api/decoupled-news/home";
    let response = await fetch(endPoint);
    try {
      if (response.status === 200) {
        const result = await response.json();

        setCarouselItems(result);
        setRightSliderItems(result.data.silderRight);
        setFeatured(result.data.featuredNode);
        setNewsSideBar(result.data.latestNews[0]);
        setTradndingNews(result.data.trandingNode[0]);
        //console.log(result.data.trandingNode[0]);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContainer();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div id="main-menu" className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
          <ul className="navbar-nav">
            <MainMenu />
          </ul>
        </nav>
      </div>

      <div id="slider" className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">
            <MainSlider carouselItems={carouselItems} />
          </div>
          <div className="col-lg-5 px-0">
            <RightSlider mainSliderRight={rightSlider} />
          </div>
        </div>
      </div>

      <Featured featured={featured} />
      <NewsSidebar newsslidebar={newssidebar} trandingNews={tradndingNews} />
      <Footer />
    </>
  );
}
