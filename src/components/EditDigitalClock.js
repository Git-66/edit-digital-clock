import React, { Component } from 'react';

import { render } from 'react-dom';

   

class EditDigitalClock extends Component {

    constructor(props) {
        super(props)
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
          currentTime: time,
          hours: today.getHours(),
          minutes :today.getMinutes(),
          seconds:today.getSeconds() 
        }  
    } 

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          time: new Date()
        });
    }

    editHour = (event) => {
        this.setState({
            hours: event.target.value,
            currentTime: this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds
        })
    }

    editMinute = (event) => {
        this.setState({
            minutes: event.target.value,
            currentTime: this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds
        })
    }

    editSecond = (event) => {
        this.setState({
            seconds: event.target.value,
            currentTime: this.state.hours + ':' + this.state.minutes + ':' + this.state.seconds
        })
    }

      render() {
        return (
          <div>
    
            <p>
              London Clock
            </p>
            <input type='number' value={this.state.hours} onChange={this.editHour}></input>
            <input type='number' value={this.state.minutes} onChange={this.editMinute}></input>
            <input type='number' value={this.state.seconds} onChange={this.editSecond}></input>
            
          </div>
        );
    
      }
}
export default EditDigitalClock 
