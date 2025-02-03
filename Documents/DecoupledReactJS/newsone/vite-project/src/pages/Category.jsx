import { useEffect, useState } from "react";

import MainMenu from "../components/MainMenu.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselItems, setCarouselItems] = useState([]);
  const [rightSlider, setRightSliderItems] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newssidebar, setNewsSideBar] = useState([]);
  const [tradndingNews, setTradndingNews] = useState([]);
  const [news, setData] = useState([]);
  const category = useLocation();

  // const loadContainer = async () => {
  //   let endPoint =
  //     "https://dev-backendnews.pantheonsite.io/api/decoupled-news/home";
  //   let response = await fetch(endPoint);
  //   try {
  //     if (response.status === 200) {
  //       const result = await response.json();

  //       setCarouselItems(result);
  //       setData(result);
  //       setRightSliderItems(result.data.silderRight);
  //       setFeatured(result.data.featuredNode);
  //       setNewsSideBar(result.data.latestNews[0]);
  //       setTradndingNews(result.data.trandingNode[0]);
  //     } else {
  //       throw new Error(`Error: ${response.status}`);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadContainer();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <p>Category!</p>
    </>
  );
}
