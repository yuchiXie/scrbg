import * as React from "react";
import { DefaultButton, PrimaryButton, Stack, IStackTokens, formProperties } from 'office-ui-fabric-react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { Switch, Route } from 'react-router';
import {User} from '../User/user'
import {Admin} from '../Admin/admin'
import {Page} from '../Page/page'
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import './css/site.css'


const stackTokens: IStackTokens = { childrenGap: 40 };
const SettingsIcon = () => <Icon iconName="Settings" className="ms-IconExample" />;
const MailIcon = () => <Icon iconName="Mail" className="ms-IconExample" />;
const QuestionIcon = () => <Icon iconName="SunQuestionMark" className="ms-IconExample" />;
const PeopleIcon = () => <Icon iconName="People" className="ms-IconExample" />;
const HomeIcon = () => <Icon iconName="Home" className="ms-IconExample" />;
const GlobeIcon = () => <Icon iconName="Globe" className="ms-IconExample" />;
export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='main'>
                <div className='head'>
                    <span className='title'>SCRBG</span>
                    <span className='iconSettings'>
                        <SettingsIcon/>
                    </span>
                    <span className='iconMail'>
                        <MailIcon/>
                    </span>
                    <span className='iconQuestion'>
                        <QuestionIcon/>
                    </span>
                </div>
                <div className='leftNav'>
                    <ul className='NavUl'>
                        {/* <li className='NavDsign NavChange'>《</li> */}
                        <li ><Link to='/' className='NavDsign'><PeopleIcon/>User</Link></li>
                        <li ><Link to='/Admin' className='NavDsign'><HomeIcon/>Admin</Link></li>
                        <li ><Link to='/Page' className='NavDsign'><GlobeIcon/>Page</Link></li>
                    </ul>
                </div>
                <div className="middle">
                    <Switch>
                        <Route path="/" exact component={User} />
                        <Route path="/Admin" component={Admin} />
                        <Route path="/Page" component={Page} />
                    </Switch>
                </div>
                
            </div>
        )
    }
}