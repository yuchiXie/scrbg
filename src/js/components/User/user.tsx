import * as React from 'react';
import {CommandBarBasic} from '../../containers/commandbar/commandbar'
import {DetailsListDocuments} from '../../containers/tabylist/tabylist'
import {ToggleBasic} from '../../containers/toggles/toggles'
import {PersonaInitials} from '../../containers/persona/persona'
import './css/site.css'

export class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>   
                <h2 className='userID'>
                    <PersonaInitials/>
                </h2>
                <div className='toggleBasic'>
                    <ToggleBasic/>
                </div>
                <h2 className='titleID'>Active Users</h2>
                <div className='lineCommon'></div>
                <div className='commandBar'>
                    <CommandBarBasic/>
                </div>
                <div className='DetailsList'>
                    <DetailsListDocuments/>
                </div>
            </div>
        )
    }
}