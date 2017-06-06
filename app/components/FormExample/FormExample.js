import React from 'react';

class FormExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuest: 2
        }
        this.changeInputHandle = this.changeInputHandle.bind(this);
    }

    changeInputHandle(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input  name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.changeInputHandle}
                    />
                </label>
                <br />
                <label>
                    <input  name="numberOfGuest"
                            type="number"
                            value={this.state.numberOfGuest}
                            onChange={this.changeInputHandle}
                    />
                </label>
            </form>
        )
    }
}

export default FormExample;