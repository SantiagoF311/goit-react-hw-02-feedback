import React, { Component } from "react";

export class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(feedName) {
        this.setState({ [feedName]: this.state[feedName] + 1 })
    }

    render() {
        const feedBack = ['good', 'neutral', 'bad']
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad
        const positiveFeedback = Math.round (this.state.good/totalFeedback * 100)
        return (
            <>
                <h1>Please leave feedback</h1>
                {feedBack.map(feed => (
                    <button key={feed} onClick={() => this.handleClick(feed)}>
                        {feed}
                    </button>
                ))}
            </>
        )
    }   
}