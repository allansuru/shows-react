import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4, title: 'SuRu' },
			{ id: 2, value: 55, title: 'Gui' },
			{ id: 3, value: 0, title: 'Ka' },
			{ id: 4, value: 12, title: 'KimKim' }
		]
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({
			counters: counters
		});
		console.log(counters);
	};

	render() {
		return (
			<div>
				{this.state.counters.map((counter) => (
					<Counter onDelete={this.handleDelete} key={counter.id} value={counter.value} counter={counter}>
						<h1>{counter.title}</h1>
					</Counter>
				))}
			</div>
		);
	}
}
export default Counters;
