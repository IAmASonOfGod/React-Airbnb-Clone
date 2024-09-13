import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import "./Home.css";
import Card from "../Card";
import { listListing } from "../../actions/listingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  console.log("Listings data:", listings); // Inspect data here

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              key={listing.id} // Add a unique key here
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://th.bing.com/th/id/R.71b7e7721662da649f461a52400629ae?rik=cpa1Iw0HZAXAEw&pid=ImgRaw&r=0"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://theartofarchitecture.com/wp-content/uploads/2017/06/cedarhaven_2_ext.jpg"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://th.bing.com/th/id/R.6300b604b785a2bbf6a6a84fabcafdc6?rik=SO%2bVzwB9%2bzpXzw&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2014%2f10%2fpretty-apartment-design.jpg&ehk=yltVQgFouhkAWk%2bsOwsHK5RV9uiEdP7vntwOqCA8Zcc%3d&risl=&pid=ImgRaw&r=0"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of sunny Bournemouth."
          price="£130/night"
        />

        <Card
          src="https://i.pinimg.com/originals/fe/d0/17/fed017520c7f0c25db8c91b80d20e538.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this penthouse."
          price="£350/night"
        />

        <Card
          src="https://th.bing.com/th/id/R.724271c219390dd9db3fb6cdec4aad5a?rik=ccb1S%2bF%2fsH0JQQ&pid=ImgRaw&r=0"
          title="1 Bedroom Apartment"
          description="Superhost with amenities and a fabulous shopping complex nearby."
          price="£70/night"
        />
      </div> */}
    </div>
  );
};

export default Home;
