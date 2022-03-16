import React from "react";




const Loader = () => {
    return (
        <div className="loader">
            <div className="overlay"></div>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Loading ...</div>
        </div>
    )
}
export default Loader;