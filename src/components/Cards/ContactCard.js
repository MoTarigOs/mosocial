import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../DataContext';
import './ContactCard.css';
import Svgs from '../../Assets/icons/Svgs';
import img from '../../Assets/images/idea_image.jpg';


const ContactCard = ({
  user_id, contact_id, id, pic, username, new_messages, created_at, setIsChat, updateSeenMessages
}) => {

    const [deleteAlert, setDeleteAlert] = useState(false);
    const { setUserID, set_navigateTo_userUsername, set_navigateTo_userID } = useContext(DataContext);

    return (
      <li className='ContactCardLi' onClick={() => {
        setIsChat(true);
        setUserID(user_id);
        set_navigateTo_userID(contact_id);
        set_navigateTo_userUsername(username);
        updateSeenMessages(id);
      }}>

          <div className='deleteContact' onMouseLeave={() => setDeleteAlert(false)}>
              <div className='svgDiv' onClick={() => setDeleteAlert(true)}><Svgs type={"Delete"} /></div>
              {deleteAlert === true 
              && <div className='alert'>
                      <p>delete this contact ?</p>
                      <button onClick={() => setDeleteAlert(false)}>Delete</button>
                  </div>}
          </div>

          <img src={img}/>

          <div>
              <h2>{username}</h2>
              <p>{created_at}</p>
          </div>
          
          {new_messages > 0 && <h4>{new_messages}</h4>}

      </li>
    )
};

export default ContactCard;
