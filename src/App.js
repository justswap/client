import React, {Component} from 'react';
import './App.css';
import Content from './components/content/content';

class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Content/>
            </div>
        );
    }
}

export default App;
