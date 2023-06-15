import * as React from "react";
import logo from "../Images/Logo.png";
import {nav } from "bootstrap";
import Navbar from "./Navbar";
import '../index.css';


export default function HomeNavBar() {
  return (
    <div>
    <nav class="Navbg">
      <a class="navbar-brand" href="#">
        <img  
          src= {logo}  
          idth="80"
          height="80"
          class="imgAlignLeft"
          alt="1"
        ></img>
      </a>
      <h1 class="rightAlign" >Broker Vote Application</h1>
    </nav>
    </div>
    
  );
}
