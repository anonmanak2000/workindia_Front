import React from 'react';
import './Recharge.css'
import { IconButton } from "@material-ui/core"
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function Recharge(){
    return (
           <div className="Recharge">
            <div className="Card1">
                   <div className="top">

                       <IconButton>
                            <AttachMoneyIcon />
                            <span><p style={{marginLeft:-2}}>2340</p></span>
                       
                        </IconButton>
                
                      < button className="btn">Recharge</button>
                   </div>
            </div>
           </div> 
    );
}

export default Recharge;