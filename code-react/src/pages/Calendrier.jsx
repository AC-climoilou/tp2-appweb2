import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import axios from 'axios';


class Calendrier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allEvents: [],
            idUser: 2
        };
        this.loadEvents = this.loadEvents.bind(this);
        this.loadAddEventPage = this.loadAddEventPage.bind(this);
        this.loadDeleteEventPage = this.loadDeleteEventPage.bind(this);

    
      }

    loadAddEventPage() {
        window.location.href = `http://localhost:3000/addEvent/`;
    }

    loadDeleteEventPage() {
        window.location.href = `http://localhost:3000/deleteEvent/`;
    }

    getUserID() {
        axios.get("https://tp2-backend-5e52.onrender.com/loginID")
        .then((response)=>{
            this.setState({
                idUser: response.data[0].client_id
            })
        })
    }

    loadEvents() {
        this.getUserID();
        console.log(this.state.idUser)
        var data = 1;
        var table = [];
        var finalTable = [];
        axios.get("https://tp2-backend-5e52.onrender.com/getEvents")
        .then((response)=>{
            data = response.data
            for (var i in data) {
                table.push(data[i]);
            }
            for (var j = 0 ; j < data.length ; j++) {
                //verification id user connected
                if(table[j].client_id === this.state.idUser) {
                    finalTable.push({title: table[j].name, start: table[j].eDate});
                }
            }
            this.setState({
            allEvents: finalTable
            })
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.loadEvents}>Load Events</button>
                <button onClick={this.loadAddEventPage}>Ajouter Event</button>
                <button onClick={this.loadDeleteEventPage}>Suprimer Event</button>
                <FullCalendar 
                    plugins={[ dayGridPlugin ]} 
                    initialView="dayGridMonth"
                    locales={allLocales} 
                    locale={'fr'}
                    events={this.state.allEvents}
                />
            </div>
        );
    }
}

export default Calendrier;
