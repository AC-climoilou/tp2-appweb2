import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';


class Calendrier extends Component {

    loadAddEventPage() {
        window.location.assign("http://localhost:3000/addEvent/");
    }

    render() {
        return (
            <div>
                <button onClick={this.loadAddEventPage}>Ajouter Event</button>
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