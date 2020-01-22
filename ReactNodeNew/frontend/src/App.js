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

    componentDidMount() {
        this.refresh();
      }
    
    refresh() {
        fetch('http://localhost:4001/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ clothing: data })
        })
        .catch(console.log)
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