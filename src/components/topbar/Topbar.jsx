import React from "react";
import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Album Cover</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for artist, album titles, users, etc…"
            className="search"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topNavIcons">
          <NotificationsIcon />
          <span className="notifcationBadge">2</span>
          <PersonIcon />
          <span className="notifcationBadge">1</span>
        </div>
        <img src="/assets/ogProfile.jpeg" alt="img" className="topbarProfile" />
      </div>
    </div>
  );
}