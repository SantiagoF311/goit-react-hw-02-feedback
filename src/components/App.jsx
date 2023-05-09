import { Feedback } from "./Feedback";
import React, { Component } from "react";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

    
    handleFeedback = (option) => {
      this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
    };
  
    render() {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      const positivePercentage = Math.round((good / total) * 100) || 0;

      if (this.state.good || this.state.bad || this.state.neutral) { 
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        </div>
      );
    } else {
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">        
              <h3>Not feedback given</h3>
          </Section>
        </div>
      )
    }
  }
}
  
  export default App;