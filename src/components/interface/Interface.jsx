import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./interface.css";

import NavBar from "../navbar/NavBar";

// import all pages
import TablePage from "../../pages/table/TablePage";
import StatPage from "../../pages/stats/StatPage";

function Interface(){

    return(
        <div className="interface" >
        <NavBar />
            {/* <h1>Vite + React</h1> */}
            {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={<StatPage/>} />
                    <Route path="/table" element={<TablePage/>} />
                    <Route path="/form" element={<TablePage/>} />
                    <Route path="/card" element={<TablePage/>} />
                    <Route path="/modal" element={<TablePage/>} />
                    <Route path="/stats" element={<StatPage/>} />
                </Routes>
            {/* </BrowserRouter> */}
        </div>
    )

}


export default Interface;
