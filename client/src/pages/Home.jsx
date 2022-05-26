import React from 'react';
import ListPokemon from "../containers/ListPokemon";

import Header from "../containers/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <ListPokemon />
        </div>
    );
};

export default Home;