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
            setListEvents(finalTable);
        })
    }

    return (
        <>
            <button>Load Events</button>
        </>
    )
}

export default deleteEvent;