import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useRef } from "react";

import { Category } from "./static/News";
import Header from "./components/Header";
import TopBoxes from "./components/TopBoxes";
import BottomNews from "./components/BottomNews";
import AddCard from "./components/AddCard";

function App() {
  const [category, setCategory] = useState("0");
  const carouselRef = useRef(null);

  const handleCategory = (cat) => {
    setCategory(cat);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (carouselRef.current) {
      if (cat >= "1" && cat < "8") {
        carouselRef.current.goToSlide(cat - 1);
      }
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      // backgroundColor: "red",
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="container main">
        <div className="row justify-content-center">
          <Header />
          <div className="col col-lg-3  sticky">
            <AddCard
              image={
                "https://images.pexels.com/photos/10969083/pexels-photo-10969083.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
            <AddCard
              image={
                "https://images.pexels.com/photos/1126384/pexels-photo-1126384.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
          </div>
          <div className="col col-lg-6 col-md-12  ">
            <div className="sticky3">
              <Carousel responsive={responsive} ref={carouselRef}>
                {Category.map((cat) => {
                  return (
                    <TopBoxes
                      category={cat.name}
                      key={cat.id}
                      catid={cat.id}
                      colorBox={cat.id === category ? true : false}
                      onclick={handleCategory}
                    />
                  );
                })}
              </Carousel>
            </div>
            <hr></hr>
            <BottomNews category={category} onclick={handleCategory} />
          </div>
          <div className="col col-lg-3 sticky2">
            <AddCard
              image={
                "https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
            <AddCard
              image={
                "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
