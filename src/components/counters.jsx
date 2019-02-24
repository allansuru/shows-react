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

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({
			counters: counters
		});
		console.log(counters);
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({
			counters
		});
	};

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.handleReset();
					}}
					className="btn btn-primary btn-sm-m-2"
				>
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
						key={counter.id}
						value={counter.value}
						counter={counter}
					>
						<h1>{counter.title}</h1>
					</Counter>
				))}
			</div>
		);
	}
}
export default Counters;
