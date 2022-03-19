import React from "react";
import MyCarousel from "../components/carousel";
import Footer from "../components/footer";
import Loader from "../components/loader";
import Main from "../components/main";
import Header from "../components/navbar";




const Home = () => {
    return(
        <div className="home">
          <Header />
          <MyCarousel />
          <Main />
          <Footer />
          {/* <Loader /> */}
        </div>
    )
}
export default Home;