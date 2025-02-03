import React from "react";

function SideBar(props) {
  const { latestNews } = props.newsData;
  console.log(latestNews);

  return (
    <div className="col-lg-8">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
            <a
              className="text-secondary font-weight-medium text-decoration-none"
              href=""
            >
              View All
            </a>
          </div>
        </div>
        {latestNews[0].map((element, index) => (
          <div className="col-lg-6" key={index}>
            <div className="position-relative mb-3">
              <img
                src={element.imgUrl}
                className="img-fluid w-100"
                alt=" "
                style={{ objectFit: "cover" }}
              />
              <div class="bg-white border border-top-0 p-4">
                <div class="mb-2">
                  <a
                    class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href=""
                  >
                    {element.category}
                  </a>
                  <a class="text-body" href="">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"
                  href=""
                >
                  {element.title}
                </a>
                <p class="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>SideBar!!!</p>
    </div>
  );
}

export default SideBar;
