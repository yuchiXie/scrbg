import * as React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import {Main} from "./js/components/Main/main"
import './css/site.css'

const App:React.FC = () =>{
    return (
        <div className='app'>
            <BrowserRouter>
            <Main/>
            </BrowserRouter>
        </div>
    )
}
export default App;