import React, {Component} from 'react';

class TranslateOutput extends Component {
  constructor() {
    super();
    this.state = {
      translatedText: ''
    }
  }
  render() {
    return (
      <div>
        <h2 className="text-success">{this.props.translatedText}</h2>
      </div>
    );
  }
}

export default TranslateOutput;
