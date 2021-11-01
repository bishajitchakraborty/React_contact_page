import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

ReactDOM.render(
  <>
     <div className="contact_page">
        <div className="contact_head">
             <h2>Get In Touch</h2>
             <h4>Just drop us a line. We will be glad to answer your enquries.</h4>
        </div>  
     </div>
       
     

     <div className="contact">
     
       {/* <div className="contact_info">
             
            <div className="nested_coninfo">
                 <h4>Contact Information</h4>
                  <div className="row">
                       <LocationCityIcon/>Khilkhett 2b/e, 3115a
                  </div>

                    <div className="row">
                          <LocalPhoneIcon/>018799822436
                   </div>

                   <div className="row">
                         <EmailIcon/>google@gmail.com
                   </div>
                   <div className="icon">
                      <FacebookIcon/><WhatsAppIcon/><YouTubeIcon/>
                   </div>
            </div>
           
       </div> */}


       <div className="contact_form">
           <div className="contact_info">
             
                <div className="nested_coninfo">
                      <h4>Contact Information</h4>
                      <div className="row">
                           <LocationCityIcon/>
                          <p>Khilkhett 2b/e, 3115a</p>
                      </div>

                        <div className="row">
                              <LocalPhoneIcon/><p>+008018799822436</p>
                        </div>

                         <div className="row">
                               <EmailIcon/><p>google@gmail.com</p>
                          </div>
                          <div className="icon">
                               <FacebookIcon/><WhatsAppIcon/><YouTubeIcon/>
                          </div>
                  </div>
              </div>

            <h3>Send us a Message</h3>
            <div className="form_icon">
              <EmailIcon/>
            </div>
           
            <input type="text" className="input" placeholder="First Name *"/>

              <div className="one">    
               <CheckTwoToneIcon/>
            </div>
            <input type="text" className="input1"placeholder="Last Name *"/><br/>

            <input type="email" className="input"placeholder="Email Address *"/>
            <div className="one">    
              <CancelIcon/>
            </div>
          

            <input type="text" className="input1"placeholder="Subject *"/>
            <textarea className="area" placeholder="Message *"/><br/>
            <input type="button"  className="btn" value="Submit" />
       </div>
     
     </div>

     
  </>,
  document.getElementById('root')
);

reportWebVitals();
