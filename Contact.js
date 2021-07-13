import React from 'react';
import './Contact.css'
import { IconButton } from "@material-ui/core"
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Contact(){
    return(
         <div className="Contact">
            <div className="Card">
                   <div className="top">
                        <h3>S and S Technologies</h3>
                        <IconButton>
                            <BorderColorIcon />
                        </IconButton>
                   </div>
                   <hr></hr>
                   <div className="bottom">
                       <IconButton>
                          <PhoneIcon />
                          <span><p>1234567890</p></span>
                       </IconButton>
                       <IconButton>
                          <MailIcon />
                          <span><p>john.doe@workindia.in</p></span>
                       </IconButton>
                       <IconButton>
                          <LocalMallIcon />
                          <span><p>27EATRR6713BDSGV</p></span>
                       </IconButton>
                   </div>
            </div>
         </div>
    );
}

export default Contact;