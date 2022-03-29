import React from "react";
import MyCarousel from "../components/carousel";
import Footer from "../components/footer";
import Info from "../components/info";
import Loader from "../components/loader";
import Main from "../components/homepage";
import Header from "../components/navbar";





const Home = () => {
    return(
        <div className="home">
          <Header />
          <MyCarousel />
          <Main />
          <Footer />
          {/* <Info /> */}

        </div>
    )
}
export default Home;