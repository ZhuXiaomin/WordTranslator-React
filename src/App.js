import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import TranslateForm from './Components/TranslateForm';
import TranslateOutput from './Components/TranslateOutput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      translatedText: '',
      key: 'trnsl.1.1.20170729T051737Z.c3f1fa0c12da73f2.ec4e03cb11d2406d3b3a56b28d83162062bdabae'
    };

  }

  handleTranslate(word, lang) {
    if (word !== '') {
      this.setState({translatedText: 'Translating ...'});
    }
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + this.state.key + '&text=' + word + '&lang=' + lang).then((response) => {
      let translatedText = response.data.text.toString();
      this.setState({translatedText: translatedText});
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="text-center" id="app">
          <h1>Word Translator</h1>
          <h5 className="text-muted">Powered by React.js</h5>
          <br/>
          <TranslateForm translate={this.handleTranslate.bind(this)}/>
          <TranslateOutput translatedText={this.state.translatedText}/>
        </div>
      </div>
    );
  }
}

export default App;
