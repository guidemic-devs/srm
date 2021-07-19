import React from 'react'
import "./closeFriend.css";

export default function CloseFriend(user) {
    return (
        <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src={user.user.profilePicture}
              alt=""
            />
            <span className="sidebarFriendName">{user.user.username}</span>
          </li>
    )
}
