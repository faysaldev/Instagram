import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import db, { storage } from '../firebase';
import firebase from 'firebase'
import { useStateValue } from '../StateProvider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


function ImageUpload() {

    const [img,setImg]=useState(null);
    const [progress,setProgress]=useState(0);
    const [caption,setCapton]=useState("");
    const [{user},dispatch]=useStateValue();

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImg(e.target.files[0]);
                console.log(img)
        }
    }

    const handleUpload=(e)=>{
        e.preventDefault();
        
        if(img){

            document.querySelector(".imgupload progress").classList.add("active");

            const uploadTask =storage.ref(`images/${img.name}`).put(img);
            // progress function...
            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                    const progresss = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    
                    setProgress(progresss);
                },
                (error)=>{
                    console.log(error);
                    alert(error.message);
                },
                ()=>{
                    storage.ref("images").child(img.name).getDownloadURL().then(url=>{
                        db.collection('post').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            img:url,
                            username:user.displayName,
                            avatar:user.photoURL
                        });
                        setProgress(0);
                        document.querySelector(".imgupload progress").classList.remove("active");
                        setCapton("");
                        setImg(null);
                    })
                }
            )

        }else{

            db.collection('post').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                img:false,
                username:user.displayName,
                avatar:user.photoURL
            });

            setCapton("");
            setImg(null);

        }


        

    }



    // this commponents css inside the Feed.css


    return (
        <from className="imgupload">
            <progress value={progress} max="100" />
            <input required type="text" value={caption} onChange={(e) => setCapton(e.target.value)} placeholder="Post caption ' Faysal" />
            <input className="file" hidden type="file" required onChange={handleChange} />
            <div onClick={()=> document.querySelector(".imgupload .file").click()} className="upload"><CloudUploadIcon /> Browse</div>
            <input disabled={!caption} type="submit" onClick={handleUpload} value="Upload" />
        </from>
    )
}

export default ImageUpload
