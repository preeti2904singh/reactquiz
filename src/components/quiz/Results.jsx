import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class Results extends Component{
  render(){
    var percent = (this.props.score / this.props.questions.length * 100);
    if(percent > 80){
      var message = 'Awsome Job!';
    }else if(percent < 80 && percent > 60){
      var message = 'You did Ok!'
    }else{
      var message = 'You dis Horrible!'
    }

    return(
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message} </h1>
        <hr/>
        <a href="index.html"> Take Again</a>
      </div>
    )
  }
}

export default Results