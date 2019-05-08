import React, { Component } from 'react';
// import { ClassComponent } from './class-component';
// import { FuncComponent } from './func-component';
import { DadJoke } from './dad-joke';
import jokes from './dad-jokes.json';

class App extends Component {
  render() {
    return (
      <>
        {/* <p>Hello World!</p>
        <ClassComponent greeting="Hello" name="Cameron" />
        <FuncComponent greeting="Hey" /> */}
        {
          jokes.map(joke => <DadJoke key={joke.key} question={joke.question} answer={joke.answer}/>)
        }
      </>
    );
  }
}

export default App;
