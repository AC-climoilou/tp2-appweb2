import axios from 'axios';
import React, { useState } from 'react';

function AddEvent() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null);
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
            bodyFormData.append("name", title);
            bodyFormData.append("eDate", date);
            bodyFormData.append("client_id", userID);

            // Convert FormData to JSON
            let jsonObject = {};
            bodyFormData.forEach((value, key) => {
                jsonObject[key] = value;
            });

            axios.post("http://localhoste:3001/addEvent", jsonObject)
                .then(response => {
                    console.log('Event added:', response.data);
                })
                .catch(error => {
                    console.error('Error adding event:', error);
                });
        } else {
            //Si data non valide
            
        }
    }

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeDate = (e) => {
        setDate(e.target.value);
    }

    return (
        <>
            <h1>Nom de l'evenement</h1>
            <input type="text" onChange={changeTitle} />
            <h1>Date</h1>
            <input type="date" onChange={changeDate} />
            <button onClick={sendEventBD}>Enregistrer</button>
        </>
    )
}

export default AddEvent;