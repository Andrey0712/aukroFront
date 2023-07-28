import React from "react";
import { Link } from "react-router-dom";

import Carousel from "@brainhubeu/react-carousel";
import Icon from "react-fa";
import "@brainhubeu/react-carousel/lib/style.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./Categories.css";

const Categories = ({ title, categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount);
  // console.log(amount);

  // const categoriesResponsiv = {
  //   desktop: {
  //     breakpoint: { max: 1077, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 768 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 767, min: 464 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  return (
    <section className="sectionCategories">
      <h2>{title}</h2>
      <div className="listCategories">
        {/* <Carousel
          responsive={categoriesResponsiv}
          arrowLeft={<Icon className="icon-example" name="arrow-left" />}
          arrowRight={<Icon className="icon-example" name="arrow-right" />}
          addArrowClickHandler
        > */}
        {/* <Carousel
          responsive={categoriesResponsiv}
          // autoPlay={true}
          // swipeable={true}
          // draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        > */}
        {list.map(({ id, name, image }) => (
          <Link to={`/categories/${id}`} key={id} className="itemCategories">
            <div
              className="imageCategories"
              style={{ backgroundImage: `url(${image})` }}
            />
            <h3 className="titelCategories">{name}</h3>
          </Link>
        ))}
        {/* </Carousel> */}
      </div>
    </section>
  );
};

export default Categories;
