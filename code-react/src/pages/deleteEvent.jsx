import axios from 'axios';
import React, { useState } from 'react';

function deleteEvent() {

    const [userID, setUserID] = useState(null);

    const loadUserID = () => {
        var search = window.location.search;
        var params = new URLSearchParams(search);
        var id = params.get('id');
        setUserID(parseInt(id));
    }

    const loadEvents = () => {
        axios.get("https://localhost:3001/getEvents")
    }

    return (
        <>
            
        </>
    )
}

export default deleteEvent;