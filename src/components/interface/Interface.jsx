import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./interface.css";

import NavBar from "../navbar/NavBar";

function Interface(){

    return(
        <div className="interface" >
        <NavBar />
            <h1>Vite + React</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" />
                </Routes>
            </BrowserRouter>
        </div>
    )

}


export default Interface;
