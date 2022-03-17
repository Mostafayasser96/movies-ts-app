import React from "react";
import MyCarousel from "../components/carousel";
import Footer from "../components/footer";
import Main from "../components/main";
import Header from "../components/navbar";




const Home = () => {
    return(
        <div className="home">
          <Header />
          <MyCarousel />
          <Main />
          <Footer />
        </div>
    )
}
export default Home;