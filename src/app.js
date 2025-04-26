import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/Header";
import BodyPart from "./components/Body";
import Footer from "./components/Footer";
//import resDatalist from "./utilities/mockData"; // Import the mock data
import resDatalist from "./utilities/mockdata"; // Import the mock data




const Applayout = () => {
    return (
        <div className="app-data">
            <AppHeader />
            <BodyPart ResDatalist = {resDatalist}/>
            <Footer/>
            
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);