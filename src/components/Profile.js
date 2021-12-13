import React from 'react'
import { Redirect } from 'react-router';
import { useStateValue } from '../StateProvider';
import './Profile.css';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import BorderHorizontalIcon from '@material-ui/icons/BorderHorizontal';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



function Profile() {

    const [{user},dispatch]=useStateValue();
if(!user){
    return(
        <Redirect to="/" />
    )
}else{
    return (
        <div className="profile">
           <header>
               <div className="header__top">
                <div className="profile__img">
                    <img src="/my.jpg"/>
                </div>

                <div className="profile__info">
                    <div className="profile_info_top">
                        <h3>faysalmridha11</h3>

                        <div className="editeProfile">
                            <button>Edite Profile</button>
                            <SettingsIcon />
                        </div>
                    </div>

                    <div className="follower__number">
                        <span>7 posts</span>
                        <span>32 followers</span>
                        <span>72 following</span>
                    </div>

                    <div className="desciption">
                        <h4>Faysal Mridha</h4>

                        <span>Software</span>

                        <div className="big__des">
                        Smile, Life is beautiful 😍😍😍<a>https://github.com/phanison898/facebook-clone</a>
                        </div>
                    </div>
                </div>
               </div>

               <div className="header__bottom_story">
                   <div className="single__story">
                   <img src="/story.jpg" />
                   <span>Fm</span>    
                </div> 
               </div>
           </header>


            <div className="main__profile">


                <hr />
                <div className="post__top">
                    <div className="single">
                    <AppsIcon />
                    <h3>POSTS</h3>
                    </div>

                    <div className="single">
                    <BorderHorizontalIcon />
                    <h3>IGTV</h3>
                    </div>

                    <div className="single">
                    <BookmarkBorderIcon />
                    <h3>SAVED</h3>
                    </div>

                    <div className="single">
                    <AssignmentIndIcon />
                    <h3>TAGGED</h3>
                    </div>
                </div>


                <div className="profile__posts">
                    <div className="single__post">
                        <img src="/ins1.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>2</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>


                    <div className="single__post">
                        <img src="/ins2.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>2</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>


                    <div className="single__post">
                        <img src="/ins3.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>1</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="single__post">
                        <img src="/ins4.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>1</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="single__post">
                        <img src="/ins5.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>3</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>1</p>
                            </div>
                        </div>
                    </div>

                    <div className="single__post">
                        <img src="/ins6.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>1</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>


                    <div className="single__post">
                        <img src="/ins7.jpg" />

                        <div className="overlay">
                            <div className="heart">
                                <FavoriteIcon /> <p>4</p>
                            </div>
                            
                            <div className="heart">
                                <CommentIcon /> <p>0</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



<footer>
<div className="footer__top">
<a>About</a>
<a>Blog</a>
<a>Jobs</a>
<a>Help</a>
<a>API</a>
<a>Privacy</a>
<a>Terms</a>
<a>Top Accounts</a>
<a>Hashtags</a>
<a>Locations</a>
</div>


<div className="footer__middle">
<a>Beauty</a>
<a>Dance</a>
<a>Fitness</a>
<a>Food & Drink</a>
<a>Home & Garden</a>
<a>Music</a>
<a>Visual Arts</a>
</div>

<div className="footer__bottom">
    
<a>English</a>
<a>English <ArrowDownwardIcon /></a>
<a>© 2021 Instagram from Facebook</a>
</div>
</footer>
        </div>
    )

}

}

export default Profile
