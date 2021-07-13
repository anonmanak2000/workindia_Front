import React from 'react';
import './Footer.css'
import { IconButton } from "@material-ui/core"
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';

function Footer(){
    return (
     <div className="Footer"> 
     <div className="item">
     <IconButton>
         <LocalMallIcon />
      </IconButton>
      <span className="caption">Home</span>
     </div>
     <div className="item">
     <IconButton>
         <AccountBalanceWalletIcon />
      </IconButton>
      <span className="caption">Recharge</span>
     </div>
     <div className="item">
     <IconButton>
         <AddCircleOutlineIcon />
      </IconButton>
      <span className="caption">Post Job</span>
     </div>
     <div className="item">
     <IconButton>
         <HelpIcon />
      </IconButton>
      <span className="caption">Help</span>
     </div>
     <div className="item">
     <IconButton>
         <PersonIcon />
      </IconButton>
      <span className="caption">Profile</span>
     </div>

     </div>
    );
}

export default Footer;