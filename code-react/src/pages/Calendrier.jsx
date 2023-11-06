import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';


class Calendrier extends Component {

    loadAddEventPage() {
        //remplacer id = 1 par l'id du login
        var id = 1;
        window.location.href = `http://localhost:3000/addEvent/?id=${id}`;
    }

    loadDeleteEventPage() {
        //remplacer id = 1 par l'id du login
        var id = 1;
        window.location.href = `http://localhost:3000/deleteEvent/?id=${id}`;
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