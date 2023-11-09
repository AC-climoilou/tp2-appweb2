import axios from 'axios';
import React, { useState } from 'react';

function DeleteEvent() {

    const [userID, setUserID] = useState(null);
    const [listEvents, setListEvents] = useState(null);

    const loadUserID = () => {
        var i = 1;
        axios.get("http://localhost:3001/loginID")
        .then((response)=>{
            setUserID(response.data[0].client_id);
        })
    }

    const loadEvents = () => {
        loadUserID();
        console.log(userID)
        var data = 1;
        var table = [];
        var finalTable = [];
        axios.get("http://localhost:3001/getEvents")
        .then((response)=>{
            data = response.data
            for (var i in data) {
                table.push(data[i]);
            }
            for (var i = 0 ; i < data.length ; i++) {
                //verification id user connected
                if(table[i].client_id === userID) {
                    finalTable.push({title: table[i].name, start: table[i].eDate});
                }
            }
            console.log(finalTable)
            setListEvents(finalTable);
        })
    }

    return (
        <>
            <button onClick={loadEvents}>Load Events</button>

        </>
    )
}

export default DeleteEvent;