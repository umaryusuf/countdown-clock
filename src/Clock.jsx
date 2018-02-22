import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	}

	componentWillMount(){
		this.getTheTime();
	}

	componentDidMount() {
		setInterval(() => this.getTheTime(), 1000);
	}

	appendZero(num) {
		return num < 10 ? '0' + num : num;
	}

	getTheTime() {
		const time = Date.parse(this.props.deadline) - Date.parse(new Date());
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		const hours = Math.floor(time / (1000 * 60 * 60) % 24);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const seconds = Math.floor((time / 1000) % 60);

		this.setState({days, hours, minutes, seconds});
	}

	render() {
		return (
			<div>
        <span className="badge">{this.appendZero(this.state.days)} days</span>
        <span className="badge">{this.appendZero(this.state.hours)} hours</span>
        <span className="badge">{this.appendZero(this.state.minutes)} minutes</span>
        <span className="badge">{this.appendZero(this.state.seconds)} seconds</span>
      </div>
		);
	}
}

export default Clock;