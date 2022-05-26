import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CreatePokemon from "../pages/CreatePokemon";
import DetailPokemon from "../pages/DetailPokemon";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/form" element={<CreatePokemon/>} />
                <Route exact path="/detail/:id" element={<DetailPokemon/>} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
};

export default App;