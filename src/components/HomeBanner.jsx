import React, { useState, useEffect } from "react";
import "./HomeBanner.css";
import img1 from "../assets/bannerImages/img1.png";
import img2 from "../assets/bannerImages/img2.png";
import img3 from "../assets/bannerImages/img3.png";
import img4 from "../assets/bannerImages/img4.png";




const HomeBanner = () => {
  useEffect(() => {
    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");
    let carousel = document.querySelector(".carousel");
    let listHTML = document.querySelector(".carousel .list");

    const showSlider = (type) => {
      nextButton.style.pointerEvents = "none";
      prevButton.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      let items = document.querySelectorAll(".carousel .list .item");
      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }

      setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton.onclick = () => showSlider("next");
    prevButton.onclick = () => showSlider("prev");
  }, []);

  return (
    <div className="carousel">
      <div className="list ">
        <div className="item">
          <img src={img1} alt="Slide 1" className="absolute w-[300px] ml-30  h-auto object-contain min-w-[320px] focus: " />
          <div className="introduce">
            <div className="title">Most comfortable 2025 ps4 gaming headset</div>
            <div className="topic">HeadPhone</div>
            <div className="des">
            Experience ultimate comfort and immersive sound with the HyperX Cloud III Wireless gaming headset.
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img2} alt="Slide 2" class="w-[300px] h-auto ml-10 object-contain min-w-[540px]" />
          <div className="introduce w-2000">
            <div className="title">Most comfortable 2025 ps4 gaming headset</div>
            <div className="topic">HeadPhone</div>
            <div className="des">
            Experience ultimate comfort and immersive sound with the HyperX Cloud III Wireless gaming headset.
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img3} alt="Slide 3" class="w-[300px]  ml-10 h-auto object-contain min-w-[560px]" />
          <div className="introduce ">
            <div className="title">Most comfortable 2025 ps4 gaming headset</div>
            <div className="topic">HeadPhone</div>
            <div className="des">
            Experience ultimate comfort and immersive sound with the HyperX Cloud III Wireless gaming headset.
            </div>
          </div>
        </div>

        <div className="item">
          <img src={img4} alt="Slide 4" class="w-48 ml-40 h-auto object-contain max-w-[320px]" />
          <div className="introduce">
            <div className="title">Most comfortable 2025 ps4 gaming headset</div>
            <div className="topic">HeadPhone</div>
            <div className="des">
            Experience ultimate comfort and immersive sound with the HyperX Cloud III Wireless gaming headset.
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
    </div>
  );
};

export default HomeBanner;
