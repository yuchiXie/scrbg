import * as React from "react";
import { DefaultButton, PrimaryButton, Stack, IStackTokens, formProperties } from 'office-ui-fabric-react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import { Switch, Route } from 'react-router';
import {Home} from '../Home/home'
import {Admin} from '../Admin/admin'
import {Page} from '../Page/page'
import './css/site.css'


const stackTokens: IStackTokens = { childrenGap: 40 };
export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='main'>
                <div className='head'>
                <Stack horizontal tokens={stackTokens}>
                <PrimaryButton text="SCRBG"  allowDisabledFocus disabled={false} checked={false} className='button'/>
                {/* <span className='title'>SCRBG</span> */}
                <SearchBox
                        styles={{ root: { width: 200 } }}
                        placeholder="Search"
                        onEscape={ev => {
                        console.log('Custom onEscape Called');
                        }}
                        onClear={ev => {
                        console.log('Custom onClear Called');
                        }}
                        onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                        onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                        onFocus={() => console.log('onFocus called')}
                        onBlur={() => console.log('onBlur called')}
                    className='searchBoxChange'/>
                </Stack>
                
                </div>
                <div className='leftNav'>
                    <ul className='NavUl'>
                        <li className='NavDsign NavChange'>《</li>
                        <li ><Link to='/' className='NavDsign'>Home</Link></li>
                        <li ><Link to='/Admin' className='NavDsign'>Admin</Link></li>
                        <li ><Link to='/Page' className='NavDsign'>Page</Link></li>
                    </ul>
                </div>
                <div className="middle">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Admin" component={Admin} />
                        <Route path="/Page" component={Page} />
                    </Switch>
                </div>
                
            </div>
        )
    }
}