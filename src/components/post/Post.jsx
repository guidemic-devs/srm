import React, { useState } from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post(post) {
  const [like, setLike] = useState(post.post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.post.userId)[0].username}
            </span>
            <span className="postDate">{post.post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">{post.post?.desc}</div>
          <img className="postImg" src={post.post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" onClick={likeHandler}/>
            <img className="likeIcon" src="/assets/heart.png" alt="" onClick={likeHandler}/>
            <span className="postLikeCounter">
              {like} People Liked it
            </span>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">
              {post.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
