import React from 'react';
import './Navbar.css'
import { IconButton } from "@material-ui/core"
import SignalWifi2BarIcon from '@material-ui/icons/SignalWifi2Bar';
import SignalCellularConnectedNoInternet3BarIcon from '@material-ui/icons/SignalCellularConnectedNoInternet3Bar';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="icons">
            <IconButton>
                 <SignalWifi2BarIcon className="wifi" />
             </IconButton>
             <IconButton>
                 <SignalCellularConnectedNoInternet3BarIcon className="wifi" />
             </IconButton>
             <IconButton>
                 <BatteryFullIcon className="wifi" />
             </IconButton>
            </div>

        </div>
    );
}

export default Navbar;