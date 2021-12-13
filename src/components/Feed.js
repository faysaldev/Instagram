import React, { useEffect, useState } from 'react'
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import './Feed.css'
import ImageUpload from './ImageUpload'
import Post from './Post'
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts,setPosts] =useState([]);
    const [{user},dispatch]=useStateValue();

useEffect(()=>{
db.collection('post').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
    setPosts(snapshot.docs.map((doc)=> ({
        id:doc.id,
        data:doc.data()
    })))
})

console.log(posts);
},[])

    return (
        <div className="feed">

        {user? <ImageUpload />:(
            <div className="youN__login">
                <h3>Sorry You Need to Sign up to Post</h3>
            </div>
        )}

        <FlipMove>
        {posts.map((post)=>(
            <Post id={post.id} key={post.id} username={post.data.username} avatar={post.data.avatar} img={post.data.img} caption={post.data.caption} />
        ))}
        </FlipMove>
        </div>
    )
}

export default Feed
