import React from 'react';
import './LogoPart.css';
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from '../Login/firebase.config';

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig);
}

const LogoPart = () => {
  const[user,setUser]=useState({
    isSignedIn:false,
    name:'',
   
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{     
      const{displayName,photoURl,email}=res.user;
      const signedInUser={
        isSignedIn:true,
        name:displayName,
       
      }
      setUser(signedInUser);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    })
   
      
    }
    const handleSignOut=()=>{
      firebase.auth().signOut()
      .then(res=>{
        const signedOutUser={
          isSignedIn:false,
          name:'',
         
  
        }        
        setUser(signedOutUser);
      })
      .catch(err=>{
  
      })
  }

  return (
    <div className="logo-part">
      <div>
      <img src={logo} alt=""/>
      </div>
      <div>
      <input className="search" type="text" placeholder="Search for Products"/>
      <button className="search_button" type="submit">Search</button>
      </div>
      <div>
     <nav>
       <ul>
         <li><a href="">Medichine</a>
          <ul className="dropdown">
            <li><a href="">Medical Heathcare Device</a></li>
            <li><a href="">Dental Oral care</a></li>
            <li><a href="">Medical healthcare device</a></li>
          </ul>
        </li>
       </ul>
     </nav>
    </div>
    <div className="Flex">
     {
       user.isSignedIn ?  <button className="button_design signOut" onClick={handleSignOut}>Sign Out</button>:<button className="button_design" onClick={handleSignIn}>Sign in</button>
      
     }
      {
      
        user.isSignedIn && <p className="name">{user.name}</p>
      }
      
      
     </div>
      
    </div>
  );
};

export default LogoPart;