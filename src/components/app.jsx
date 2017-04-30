import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'ReactJS is developed by _____?',
          choices: [
            {
              id: 'a',
              text: 'Google Engineers'
            },
            {
              id: 'b',
              text: 'Facebook Engineers'
            },
            {
              id: 'c',
              text: 'None of the above'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'ReactJS is an MVC based framework?',
          choices: [
            {
              id: 'a',
              text: 'Partialy Correct'
            },
            {
              id: 'b',
              text: 'False'
            },
            {
              id: 'c',
              text: 'True'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'Which of the following concepts is/are key to ReactJS?',
          choices: [
            {
              id: 'a',
              text: 'Component-oriented design'
            },
            {
              id: 'b',
              text: 'Event delegation model'
            },
            {
              id: 'c',
              text: 'Both of the above'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'ReactJS focuses on which of the following part when considering MVC?',
          choices: [
            {
              id: 'a',
              text: 'M (Model)'
            },
            {
              id: 'b',
              text: 'V (View)'
            },
            {
              id: 'c',
              text: 'C (Controller)'
            }
          ],
          correct: 'b',
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render(){
    if(this.state.current > this.state.questions.length){
      var scorebox = '';
      var results = <Results {...this.state} />
    }else{
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
        {results}
      </div>
    )
  }
}

export default App