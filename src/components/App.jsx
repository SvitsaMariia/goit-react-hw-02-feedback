import { Component } from "react";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Notification} from './Notification/Notification'
import {Section} from './Section/Section'
import {Statistics} from './Statistics/Statistics'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


handleLeaveFeedback = feedback => {
  this.setState(prevState => ({[feedback]: prevState[feedback] + 1}));
};

countTotalFeedback = () => {
  return Object.values(this.state).reduce((total, value) => total + value, 0);
};

countPositiveFeedbackPercentage = total  => {
  return Number.parseInt((this.state.good * 100) / total);
};


render() {
  const {good, neutral, bad} = this.state;
  const totalFeedback = this.countTotalFeedback();
  const positivePercentage = 
  this.countPositiveFeedbackPercentage(totalFeedback);
  return ( 
    <>
    <Section title='Please leave feedback'>
      <FeedbackOptions 
       options={Object.keys(this.state)}
       onLeaveFeedback={this.handleLeaveFeedback} 
       />
    </Section>
  
    <Section title='Statistics'>
      {totalFeedback ? (
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}/>
      ) : (
        <Notification message="No feedback given"/>
      )}
    </Section>
     </>

      );
     }
    };


    







