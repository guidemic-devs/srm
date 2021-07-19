import React from "react";
import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar(profile) {

  const HomeRightBar = () => {
    return(<>
    <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Raghu Gunu</b> and <b>3 others</b> Birthday today{" "}
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
              <Online key={u.id} user={u} />
          ))}
        </ul>
    </>)
  }

  const ProfileRightBar = () => {
    return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Varanasi</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">NewYork</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
      <div className="rightbarFollowing">
        <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
        <span className="rightbarFollowingName">James Bond</span>
      </div>
    </div>
    </>

      )
  }
  console.log(profile);
  return (
    
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile.profile? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
