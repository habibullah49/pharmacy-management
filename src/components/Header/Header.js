import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown,faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
  return (
       <div className="container_sec">

        <div >
       <p className="hedder style">Welcome to online store</p>
      </div>
      <div>
       <h2 className="hedder"> <FontAwesomeIcon className="icon" icon={faPhoneSquareAlt} /> Need Help?01793192906</h2>
      </div>
      <div>
       <h3 className="hedder">Hours:7 days a week from 9.00 am to 7.00 pm</h3>
      </div>

      <div>
        <h3 className="hedder"> <FontAwesomeIcon className="icon" icon={faCartArrowDown} />cart(0)</h3>
       </div>
    </div>
      
    
  );
};

export default Header;