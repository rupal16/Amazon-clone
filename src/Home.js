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
            title="Amazon Brand - Solimo Stainless Steel Kitchen Press/Noodles/Murukku maker"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71XZyRPY5GL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={456}
            title="Roam Universal Premium Bike Phone Mount for Motorcycle - Bike Handlebars, Adjustable, Fits iPhone 11, X, XR, 8 | 8 Plus, 7 | 7 Plus, 6s Plus | Galaxy, S10,...."
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/713fujBvS9L._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={789}
            title="Mattel Star Wars The Child Plush Toy, 8-in Small Yoda Baby Figure from The Mandalorian, Collectible Stuffed Character for Movie Fans of All Ages, 3 and...."
            price={1.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81dv%2B3OtWDL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={512}
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display."
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={567}
            title="Oculus Quest All-in-one VR Gaming Headset – 128GB."
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71D9OsZmWxL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={257}
            title="EDOW Throw Pillow Insert, Set of 2 Down Alternative Polyester Square Form Decorative Pillow, Cushion,Sham Stuffer. (White, 18x18)."
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71p0wTseBOL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
