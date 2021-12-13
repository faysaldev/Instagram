import { Avatar } from '@material-ui/core'
import React from 'react'

function Story() {

const Story= [
    {
    src:"/my.jpg",
    text:"Faysal"
    },
    {
        src:"/faisu.jpg",
        text:"Faisu"
    },
    {
    src:"/sonny.jpg",
    text:"Sonny"
    },
    {
    src:"/qazi.jpg",
    text:"Qazi"
    },
    {
        src:"/arisfa.jpg",
        text:"Arishfa"
        },
        {
            src:"/jannat.jpg",
            text:"Jannat"
        },
        {
        src:"/riaz.jpg",
        text:"Riaz"
        },

        {
        src:"/naz.jpg",
        text:"Naz"
        }
];

// css in the header.css file

    return (
        <div className="story">
            <ul>
                {Story.map((doc)=> (
                    <li>
                    <a>
                       <div className="img">
                       <img src={doc.src} />
                       </div>
                        <p>{doc.text}</p>
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Story
