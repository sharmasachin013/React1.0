import React from "react";
import { useEffect, useState } from "react";
import MainSlider from "../components/Slider/MainSlider";
import RightSlider from "../components/Slider/RightSlider";
import Featured from "../components/Featured";
import SideBar from "../components/SideBar";
import SideBarRight from "../components/SideBarRight";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [news, setData] = useState([]);

  const loadContainer = async () => {
    let endPoint =
      "https://dev-backendnews.pantheonsite.io/api/decoupled-news/home";
    let response = await fetch(endPoint);
    try {
      if (response.status === 200) {
        const result = await response.json();
        setData(result);
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
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">
            <MainSlider newsData={news.data}></MainSlider>
          </div>
          <div className="col-lg-5 px-0">
            <div className="row mx-0">
              <RightSlider newsData={news.data}></RightSlider>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 mb-3">
        <div className="container">
          <div className="section-title m-0 text-uppercase font-weight-bold">
            <h4 class="m-0 text-uppercase font-weight-bold">Featured News</h4>
          </div>
          <Featured newsData={news.data}></Featured>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <SideBar newsData={news.data} />
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
