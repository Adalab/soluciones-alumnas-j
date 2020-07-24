import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';
import '../App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.myText = '';
    this.translateText = this.translateText.bind(this);
  }

  translateText(text_from_child) {
    this.myText =  text_from_child.replace(/[aeiou]/ig, 'i');
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <TextInput getInformation={this.translateText}/>
        <MIMIMITranslator displayText={this.myText}/>
      </div>
    );
  }

}

export default App;
