import React from 'react';
import './Features.css'
import { IconButton } from "@material-ui/core"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ShareIcon from '@material-ui/icons/Share';
import GradeIcon from '@material-ui/icons/Grade';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Features(){
    return (
     <div className="Features"> 
  <div className="Card2">
                   <div className="top">
                        <IconButton>
                            <AccountBalanceIcon />
                            <span><p>My Transactions</p></span>
                        </IconButton>
                   </div>
                   <div className="top">
                        <IconButton>
                            <ShareIcon />
                            <span><p>Share this App</p></span>
                        </IconButton>
                   </div>
                   <div className="top">
                        <IconButton>
                            <GradeIcon />
                            <span><p>Rate Us</p></span>
                        </IconButton>
                   </div>
                   <div className="top">
                        <IconButton>
                            <ExitToAppIcon />
                            <span><p>Sign Out</p></span>
                        </IconButton>
                   </div>

            </div>
     </div>
    );
}

export default Features;