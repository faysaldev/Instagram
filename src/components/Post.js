import React, { forwardRef, useEffect, useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TelegramIcon from '@material-ui/icons/Telegram';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';




const Post=forwardRef(({id,avatar,username,img,caption,timestamp},ref)=> {

    const [like, setLike] =useState(false);
    const [{user},dispatch]=useStateValue();
    const [comment,setComment] =useState('')
    const [comments,setComments] =useState([]);
    const [updatetext,setUpdateText] =useState(false);
    const [upcomment,setUpcomment] =useState("");

    const [name,setName]=useState([]);


    const yourLike=()=>{
      if(like){
          setLike(false);
      }else{
          setLike(true);
      }
    }


    useEffect(()=>{
        db.collection('post').doc(id).collection('comment').onSnapshot((snapshot)=>{
            setComments(snapshot.docs.map((doc)=> doc.data()))
        })

        //get the user who post the post

        db.collection('post').doc(id).onSnapshot((snapshot)=>{
            setName(snapshot.data());
        })

    },[id])



    const SentComment=(e)=>{
        e.preventDefault();
        db.collection('post').doc(id).collection('comment').add({
            avatar:user.photoURL,
            text:comment,
            username:user.displayName
        })

        setComment("")
    }

    const deletePost=()=>{
        if(name.username===user.dispatch || user.displayName==="Faysal Mridha"){
            alert(`${user.displayName} ' Are you sure to Delete`);
            db.collection('post').doc(id).delete();  
        }

    }

    const upDatePost=()=>{

        if(name.username===user.dispatch || user.displayName==="Faysal Mridha"){
            db.collection('post').doc(id).update({
                caption:upcomment
            });
            setUpdateText(false);
        }
    }

    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <div className="post__headerleft">
                    <img src={avatar} />
                    <p>{username}</p>
                    <span>{timestamp}</span>
                </div>
                

            {user? (
                <div className="post__headerRight">
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                 <div className="deletemenu">
                 <span onClick={()=> setUpdateText(true)}>Edit</span>
                 <span onClick={deletePost}>Delete</span>
                 </div>
               
                </div>
            ):(
                <div className="post__headerRight">
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            )}



            </div>
           <div className="post__img">
              {updatetext && user?
              (<div className="update__text">
                  <input type="text" defaultValue={caption}  onChange={(e)=> setUpcomment(e.target.value)} />
                  <button onClick={upDatePost}>Update</button>
              </div>) : <p>{caption}</p>}

           {img && <img  src={img} alt="" />}
           </div>

            <div className="post__fotter">
                <div className="post__fotterleft">
               {user?(
                    <IconButton onClick={yourLike}>
                    {like? <FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon />}
                </IconButton>
               ):(
                <IconButton onClick={yourLike}>
                <FavoriteBorderIcon />
                </IconButton>
               )}

                <IconButton>
                    <CommentIcon />
                </IconButton>

                <IconButton>
                    <TelegramIcon />
                </IconButton>
                </div>

                <IconButton>
                    <TurnedInNotIcon />
                </IconButton>
            </div>

                <div className="allcomments">
                {comments.map((doc)=>(
                    <div className="comment">
                    <Avatar src={doc.avatar} />
                    <h4>{doc.username} <span>{doc.text}</span></h4>
                </div>
                ))}


                </div>

            {user && (
                <div className="commets">



                <form>
                    <InsertEmoticonIcon />
                    <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)} placeholder="Type a Comment ' Faysal" />

                    <button onClick={SentComment} type="submit" disabled={!comment}>Post</button>
                </form>
            </div>
            )}
        </div>
    )
})

export default Post
