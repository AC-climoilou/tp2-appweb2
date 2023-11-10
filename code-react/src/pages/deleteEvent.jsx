import axios from 'axios';
import React, { useState } from 'react';

function DeleteEvent() {

    const [userID, setUserID] = useState(null);
    const [listEvents, setListEvents] = useState(null);
    const [loadedEvents, setLoadedEvents] = useState(false);

    const loadUserID = () => {
        axios.get("http://localhost:3001/loginID")
        .then((response)=>{
            setUserID(response.data[0].client_id);
        })
    }

    const loadEvents = () => {
        loadUserID();
        var data = 1;
        var table = [];
        var finalTable = [];
        axios.get("http://localhost:3001/getEvents")
        .then((response)=>{
            data = response.data
            for (var i in data) {
                table.push(data[i]);
            }
            for (var j = 0 ; j < data.length ; j++) {
                //verification id user connected
                if(table[j].client_id === userID) {
                    finalTable.push({title: table[j].name, start: table[j].eDate, id: table[j].event_id});
                }
            }
            console.log(finalTable);
            setListEvents(finalTable);
            setLoadedEvents(true);
        })
    }

    const deleteEventHandler = (id) => {
        console.log(id);
        let json = {
            id: id
          }
          axios.delete("http://localhost:3001/deleteEvent", {data: json}).then((response) => {
                console.log(response)
            });
    }

    return (
        <>
            <button onClick={loadEvents}>Load Events</button>
            {loadedEvents && (
                <div>
                    <h1>Events:</h1>
                    <ul>
                        {listEvents.map((event, index) => (
                            <li key={index}>
                                <h2>{event.title}</h2>
                                <button onClick={() => deleteEventHandler(event.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default DeleteEvent;