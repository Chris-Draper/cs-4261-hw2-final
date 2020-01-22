import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        clothing: []
    };

    removeClothing = index => {
        const { clothing } = this.state;
    
        this.setState({
            clothing: clothing.filter((clothing, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = clothing => {
        this.setState({clothing: [...this.state.clothing, clothing]});
    }

    render() {
        const { clothing } = this.state;
        
        return (
            <div className="container">
                <h1>My Closet</h1>
                <p>Add your clothes!</p>
                <Table
                    clothingData={clothing}
                    removeClothing={this.removeClothing}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;