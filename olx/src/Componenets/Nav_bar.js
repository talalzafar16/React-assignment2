import React from 'react'
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Download from 'D:/project/react/olx/src/logo/Download.png';
import Download1 from 'D:/project/react/olx/src/logo/Download1.png';
import BusinessIcon from '@mui/icons-material/Business';
import './Nav_bar.css';
import BasicMenu from './Menu.js';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
export default function nav_bar() {
  return (<>
    <div class="header">
        <navbar>
            <ul id="nav">
            <li class="item"><Button size="small"><img width="46" src={Download}/></Button></li>
            <li class="item"><Button startIcon={<DirectionsCarIcon/>} sx={{color:"black"}}> MOTORS</Button></li>
            <li class="item"><Button startIcon={<BusinessIcon/>} sx={{color:"black"}}>PROPERTY</Button></li>
            </ul>
        </navbar>
        <div class="search">
        <navbar>
            <ul>
                <li><Button size="small"><img width="46" src={Download1}/></Button></li>
                <li><Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase size="large" fullwidth sx={{ ml: 1, flex: 1}} placeholder="Find Cars,phones and more.."/>
                <Button startIcon={<SearchIcon sx={{color:"black"}}/>} sx={{background:"gray"}}></Button></Paper></li>
                {/* <li><BasicMenu/></li> */}
            </ul>
        </navbar>

    </div>
    </div>
    
    </>
  )
}
