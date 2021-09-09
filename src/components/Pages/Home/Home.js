import React from 'react';
import "./Home.css";
import Feed from '../../center/Feed';
import SideBar from '../../SideBar/SideBar';
import RightsideBar from "../../RightsideBar/RightsideBar"


export default function Home() {
    return (
        <div className="homeContent">
            <SideBar />
            <Feed />
            <RightsideBar />
        </div>
    )
}
