import React from 'react'
import { Link } from 'react-router-dom';
import './SideBarItems.css';
import {Nav} from "react-bootstrap"

function SideBarItems() {
    return (
        <div className="SideBarItems">
           <h4> Quick Checkout....</h4>
           <hr/>
            <div className="SideBarItem">
               
             <img src="" alt="" height="50" width="50"/>
              
             <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p>Placement History</p> </Link> 
            </div> 
            <div className="SideBarItem">
                <img src="" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p >Placement Cell</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"> <p>College_Curriculum</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0NBjxrY_766I0VnnMYVux9rrMjiwa-y2KA&usqp=CAU" alt=""  height="50" width="50"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p>Clubs</p></Link>
            </div>

             {/* <div class="sidenav">
               
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/clients">Clients</Link>
                <Link href="/contact">Contact</Link>
            </div>
             */}
        </div>
    )
}

export default SideBarItems;

