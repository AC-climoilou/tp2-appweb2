import axios from 'axios';
import React, { useState } from 'react';

function deleteEvent() {

    const [userID, setUserID] = useState(null);

    const loadUserID = () => {
        var search = window.location.search;
        var params = new URLSearchParams(search);
        setUserID(params.get('id'));
    }

    const sendEventBD = () => {
        loadUserID();
        if (title !== "" && date !== null) {
            const bodyFormData = new FormData();
            bodyFormData.append("client_id", userID);

            // Convert FormData to JSON
            let jsonObject = {};
            bodyFormData.forEach((value, key) => {
                jsonObject[key] = value;
            });

            axios.post("http://localhoste:3001/deleteEvent", jsonObject)
                .then(response => {
                    console.log('Event added:', response.data);
                })
                .catch(error => {
                    console.error('Error adding event:', error);
                });
        } else {
            //Si data non valide
            
        }

        return (
            <>
                
            </>
        )
    }
}

export default deleteEvent;