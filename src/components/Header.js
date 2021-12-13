import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './Header.css';
import suggestion from './Saggation'
import datas from './Data.json'
import { useStateValue } from '../StateProvider';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { Link } from 'react-router-dom';

function Header() {


const searchWrapper = document.querySelector(".header__input");
const inputBox = document.querySelector(".header__input input");
const sugBox = document.querySelector(".suggaiton__area");

const [search, setSearch]=useState('');
const  [results, setResults]=useState('');

const [userPhotUrl,setuserPhotoURl] =useState("");

const  [user, setuser]=useState(false);


const Selectsearch=(e)=>{

    setSearch(e.target.value);

    setResults(datas.filter((fm)=>{
        if(!search){
            document.querySelector(".suggaiton__area").classList.remove('active');
            return "<p>No data found</p>";
        }else if(fm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            document.querySelector(".suggaiton__area").classList.add('active');
            return fm;
        }
    }).map((sug)=>(
        <div className="suggation">
            <Avatar src={sug.avatar}/>
            <h4>{sug.name}</h4>
        </div>
    )))


}


const [{}, dispatch] = useStateValue();
const loginHandler=()=>{
    auth.signInWithPopup(provider).then((result)=>{
        dispatch({
            type:actionTypes.SET_USER,
            user: result.user,
        });

        setuserPhotoURl(result.user.photoURL);
        
    }).catch((error)=> alert(error.message));

    setuser(true);


}


    return (
        <div className="header">
            <div className="header__left">
               <Link to="/">
               <img src="/logo.png"/>
               </Link>
            </div>

            <div className="header__input">
                <div className="input__area">
                    <input value={search} type="text"placeholder="Type to search" onChange={Selectsearch} />
                    <SearchIcon />

                </div>

                <div class="suggaiton__area">
                {results}
                </div>
            </div>

            {user? (
                <div className="header__right">
                <IconButton>
                    <HomeIcon style={{color:"black",fontWeight:"bold"}}/>
                </IconButton>

                <IconButton>
                    <MessageIcon />
                </IconButton>

                <IconButton>
                    <ExploreIcon />
                </IconButton>

                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>

                <Link to="/profile">
                <Avatar src={userPhotUrl} />
                </Link>
            </div>
            ):(
                <Button onClick={loginHandler}>Sign Up</Button>
            )}
        </div>
    )
}

export default Header






// const Selectsearch=(e)=>{

//     setSearch(e.target.value);

//     let emptArry =[];

//     if(search){
//         emptArry= suggestion.filter((data)=>{
//             return data.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
//         });

//         emptArry= emptArry.map((data)=>{
//             return  data= "<li>"+data+"</li>";
//         })

//         searchWrapper.classList.add("active");


//     }else{
//         document.querySelector(".header__input").classList.remove("active");
//     }

//     showSuggestions(emptArry);

// }





// const showSuggestions=(list)=>{

//     let listData;
//     if(!list.length){
//       const  userValue=search;
//         listData="<li>"+userValue+"</li>";
//     }else{
//         listData=list.join("");
//     }

//     sugBox.innerHTML=listData;

//     console.log(listData)

// }