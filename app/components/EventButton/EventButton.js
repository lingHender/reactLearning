import React from 'react';

class EventButton extends React.Component {
    constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);
        this.state = {
            clickEvent : null,
            count : 0
        }
    }

    eventHandler(e) {
        console.log(this.state.count);
        console.log(e.type);
        this.setState({
            clickEvent: e.type,
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.eventHandler}> event </button>
            </div>
        )
    }
}

export default EventButton;