import * as React from "react";
import './css/site.css'

export class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='main'>
                <div className='head'></div>
                <div className='leftNav'>
                    <ul>
                        <li className='NavDsign'>Admin</li>
                        <li>Home</li>
                        <li>Page</li>
                    </ul>
                </div>
                <div className="middle"></div>
                
            </div>
        )
    }
}