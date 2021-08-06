import React, { useEffect, useState }from 'react'
import { Avatar } from '@material-ui/core'
import './Sidebarchat.css'
import db from './firebase';
import { Link } from 'react-router-dom';
function Sidebarchat({ id,name,addnewchat}) {
    const [randomimg, setrandomimg]=useState( ' ');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [id]);

    useEffect(() => {
       Math.floor(
           setrandomimg(  Math.random()*5000))
    }, [])
    const createchat =()=>{
        const roomname =prompt("plz Enter  a name for a chat room ")
        if(roomname){
            // do something clever database stuff 
            db.collection('rooms').add({
                name:roomname,
            })
        }
    };

    return !addnewchat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarchat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${randomimg}.svg`} />
                <div className="sidebarchat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
     
    ):(
        <div onClick ={createchat} className="sidebarchat">
            <h2>Add new chat</h2>
        </div>

    )
}

export default Sidebarchat
