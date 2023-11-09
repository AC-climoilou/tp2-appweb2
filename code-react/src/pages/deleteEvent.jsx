import axios from 'axios';
import React, { useState } from 'react';

function deleteEvent() {

    const [userID, setUserID] = useState(null);
    const [listEvents, setListEvents] = useState(null);

    const loadUserID = () => {
        var id = null;
        axios.get("http://localhost:3001/loginID")
        .then((response)=>{
            id = response.data[0];
            setUserID(id);
        })
    }

    const loadEvents = () => {
        axios.get("http://localhost:3001/getEvents")
    }

    return (
        <>
            
        </>
    )
}

export default deleteEvent;