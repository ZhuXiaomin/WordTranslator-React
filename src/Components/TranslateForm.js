import React, {Component} from 'react';
import uuid from 'uuid';

class TranslateForm extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      lang: ''
    }
  }
  static defaultProps = {
    languageOpts: [
      {
        id: uuid.v4(),
        name: 'English',
        value: 'en'
      }, {
        id: uuid.v4(),
        name: 'French',
        value: 'fr'
      }, {
        id: uuid.v4(),
        name: 'Chinese',
        value: 'zh'
      }, {
        id: uuid.v4(),
        name: 'Russian',
        value: 'ru'
      }, {
        id: uuid.v4(),
        name: 'Korean',
        value: 'ko'
      }
    ]
  }

  handleSubmit(e) {
    if (this.refs.words.value === '') {
      alert('Word is required!');
    } else {
      this.setState({
        word: this.refs.words.value,
        lang: this.refs.lang.value
      }, function() {
        // translate request
        this.props.translate(this.state.word, this.state.lang)
      })
    }
    e.preventDefault();
  }

  render() {
    // get language option components
    let languageOptions = this.props.languageOpts.map(op => {
      return <option key={op.id} value={op.value}>{op.name}</option>;
    });

    return (
      <div className="row" id="translateForm">
        <div className="col-md-6 col-md-offset-3">
          <form id="transForm" className="well form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control" type="text" ref="words" placeholder="Enter words ..."/>
            <select className="form-control" ref="lang">
              {languageOptions}
            </select>
            <input className="btn btn-primary submitButton" type="submit" value="Translate"/>
          </form>
        </div>
      </div>
    );
  }
}

export default TranslateForm;
