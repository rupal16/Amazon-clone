import React from "react";

import Banner from "./images/amazon-banner.jpg";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Banner} />
        <div className="home__row">
          <Product
            id={123}
            title="The lean startup Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of ty"
            price={29.99}
            image="https://i.pinimg.com/originals/f3/50/d9/f350d960214d22aacc38f020de0b8f6d.jpg"
            rating={5}
          />
          <Product
            id={456}
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/512syhuJD7L._SL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={789}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            price={1.99}
            image="https://images.crateandbarrel.com/is/image/Crate/SlantPlanterLightGrayGroupSHS17/$web_zoom$/190411135432/slant-light-greyplanters.jpg"
            rating={5}
          />
          <Product
            id={512}
            title="Lorem Ipsum is industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            price={39.99}
            image="https://www.grabadeal.in/image/cache/catalog/Animal%20Toys/VT-23-800x800.jpg"
            rating={4}
          />
          <Product
            id={567}
            title="Lorem text ever since the 1500s,Lorem text ever since the 1500s,Lorem text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            price={39.99}
            image="https://www.tasteofhome.com/wp-content/uploads/2020/04/Artesia-Large-Honey-Rattan-Bread-Basket.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={257}
            title="Lorem Ipsum is s and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            price={39.99}
            image="https://i.pinimg.com/originals/15/43/df/1543df6fbe7c9b04f0a43544b7bd47df.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
