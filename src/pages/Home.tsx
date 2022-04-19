import React, { SetStateAction } from "react";
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
          <Main id={0} value={""} active={false} setActiveButton={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        } } />
          <Footer />
          {/* <Info /> */}

        </div>
    )
}
export default Home;