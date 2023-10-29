import axios from 'axios';
import React, { useState } from 'react';

function AddEvent(props) {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null);

    const sendEventBD = () => {
        if (title !== "" && date !== null) {
            const bodyFormData = new FormData();
            bodyFormData.append("name", title);
            bodyFormData.append("eDate", date);
            bodyFormData.append("client_id", props.id);

            // Convert FormData to JSON
            let jsonObject = {};
            bodyFormData.forEach((value, key) => {
                jsonObject[key] = value;
            });

            axios.post("http://127.0.0.1:3001/addEvent", jsonObject)
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