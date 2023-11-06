import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import axios from 'axios';

class Calendrier extends Component {

    allEvents = null;

    loadAddEventPage() {
        //remplacer id = 1 par l'id du login
        var id = 16;
        window.location.href = `http://localhost:3000/addEvent/?id=${id}`;
    }

    loadDeleteEventPage() {
        //remplacer id = 1 par l'id du login
        var id = 14;
        window.location.href = `http://localhost:3000/deleteEvent/?id=${id}`;
    }

    loadEvents() {
        axios.get("http://localhost:3001/getEvents")
        .then((response)=>{
            this.allEvents = response.data
        })
        console.log(this.allEvents);
    }

    render() {
        return (
            <div>
                <button onClick={this.loadAddEventPage}>Ajouter Event</button>
                <button onClick={this.loadDeleteEventPage}>Suprimer Event</button>
                <FullCalendar 
                    plugins={[ dayGridPlugin ]} 
                    initialView="dayGridMonth"
                    locales={allLocales} 
                    locale={'fr'}
                    events={[
                        
                      ]}
                />
            </div>
        );
    }
}

export default Calendrier;