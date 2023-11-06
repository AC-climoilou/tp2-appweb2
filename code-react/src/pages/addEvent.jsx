import axios from 'axios';
import React, { useState } from 'react';

function AddEvent() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null);
    const [userID, setUserID] = useState(null);

    const loadUserID = () => {
        var search = window.location.search;
        var params = new URLSearchParams(search);
        var id = params.get('id');
        setUserID(parseInt(id));
        console.log(userID);
    }

    const sendEventBD = () => {
        loadUserID();
        if (title !== "" && date !== null && userID !== null) {

            let json = {
                name: title,
                eDate: date,
                client_id: userID,
              }

            axios.post("http://localhost:3001/addEvent", json).then((response) => {
                console.log(response);
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