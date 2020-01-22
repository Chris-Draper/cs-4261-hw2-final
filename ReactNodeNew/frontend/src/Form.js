import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            type: '',
            color: '',
            style: '',
            season: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, type, color, style, season } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />

                <label for="type">Type</label>
                <input 
                    type="text" 
                    name="type" 
                    id="type"
                    value={type} 
                    onChange={this.handleChange} />

                <label for="color">Color</label>
                <input 
                    type="text" 
                    name="color" 
                    id="color"
                    value={color} 
                    onChange={this.handleChange} />

                <label for="style">Style</label>
                <input 
                    type="text" 
                    name="style" 
                    id="style"
                    value={style} 
                    onChange={this.handleChange} />

                <label for="season">Season</label>
                <input 
                    type="text" 
                    name="season" 
                    id="season"
                    value={season} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;