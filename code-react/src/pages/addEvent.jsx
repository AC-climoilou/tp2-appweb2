import axios from 'axios';
import React, { useState } from 'react';

function AddEvent() {

    const [title, setTitle] = useState("");
    const [date, setDate] = useState(null);
    const [userID, setUserID] = useState(null);

    const loadUserID = () => {
        var i = 1;
        axios.get("https://tp2-backend-5e52.onrender.com/loginID")
        .then((response)=>{
            setUserID(response.data[0].client_id);
        })
    }

    const sendEventBD = () => {
        loadUserID();
        console.log(userID);
        if (title !== "" && date !== null && userID !== null) {

            let json = {
                name: title,
                eDate: date,
                client_id: userID,
              }

            axios.post("https://tp2-backend-5e52.onrender.com/addEvent", json).then((response) => {
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