import React from 'react';
import {Link} from "react-router-dom";
import FilterByType from "../components/FilterByType";

const Form = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="add name pokemon" />
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" placeholder="add an image"/>
                </div>
                <div>
                    <label>Life</label>
                    <input type="text" placeholder="add life"/>
                </div>
                <div>
                    <label>Attack</label>
                    <input type="text" placeholder="add attack"/>
                </div>
                <div>
                    <label>Defense</label>
                    <input type="text" placeholder="add defense"/>
                </div>
                <div>
                    <label>Speed</label>
                    <input type="text" placeholder="add speed"/>
                </div>
                <div>
                    <label>Height</label>
                    <input type="text" placeholder="add height"/>
                </div>
                <div>
                    <label>Weight</label>
                    <input type="text" placeholder="add Weight"/>
                </div>
                <div>
                    <FilterByType />
                </div>
                <div>
                    <button>send</button>
                </div>
            </form>
            <div>
                <Link to="/home">
                    <button>Volver a Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Form;