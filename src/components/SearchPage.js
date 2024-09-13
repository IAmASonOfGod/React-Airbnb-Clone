import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="search_page">
      <div className="searchPage_info">
        <p>62 stays . 26 August to 30 August . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://th.bing.com/th/id/R.efcf1f767b5135629fa25ddd9dd2fb84?rik=hBt7G3wKYnWsBg&riu=http%3a%2f%2fwww.arthurscourtmotorlodge.co.nz%2fuploads%2fimages%2fGallery%2fLargeOneBed%2fA+Large+One+Bedroom+Apartment.jpg&ehk=MZRde1WxB5CnLr66Kse8l0SqKCusyoPO1WnYqhfgMJc%3d&risl=&pid=ImgRaw&r=0"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking"
        star={4.73}
        price="£30/night"
        total="£117/total"
      />
      <SearchResult
        img="https://th.bing.com/th/id/R.fde08aa73e9c5098ee35d5b70a7c6086?rik=iUIRG1B1YIqcJA&pid=ImgRaw&r=0"
        location="Secluded Cabin in the Vermont Forest"
        title="Escape to a Cozy Cabin with Scenic Views"
        description="2 guests . 1 bed . 1 bath . Fireplace . Hiking Trails . Free Wi-Fi"
        star={4.8}
        price="£50/night"
        total="£200/total"
      />
      <SearchResult
        img="https://www.notreloft.com/images/2014/07/loft-penthouse-new-york-00600.jpg"
        location="Trendy Loft in SoHo, New York"
        title="Stay in a Stylish Loft with City Views"
        description="4 guests . 2 beds . 1 bath . Modern Amenities . Rooftop Access . Central Location"
        star={4.9}
        price="£120/night"
        total="£480/total"
      />
      <SearchResult
        img="https://th.bing.com/th/id/R.375fce36bb0e343becefe638b1713c36?rik=tyVk%2fxCpF%2bOgrQ&pid=ImgRaw&r=0"
        location="Seaside Beach House in Bali"
        title="Relax in a Beachfront Paradise"
        description="6 guests . 3 beds . 2 baths . Pool . Beach Access . Daily Breakfast"
        star={4.7}
        price="£85/night"
        total="£510/total"
      />
      <SearchResult
        img="https://th.bing.com/th/id/R.0d402e0456ca4504ed2380d49157bee4?rik=s2ouuj7dUT8gBQ&pid=ImgRaw&r=0"
        location="Luxurious Villa in Tuscany"
        title="Experience Italian Elegance with Stunning Views"
        description="8 guests . 4 beds . 4 baths . Private Pool . Vineyard Views . Gourmet Kitchen"
        star={5.0}
        price="£200/night"
        total="£1400/total"
      />
    </div>
  );
};

export default SearchPage;
