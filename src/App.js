import React, {
	Component
} from 'react';
import NavBar from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

class App extends Component {

	state = {
		counters: [{
				id: 1,
				value: 4,
				title: 'SuRu'
			},
			{
				id: 2,
				value: 55,
				title: 'Gui'
			},
			{
				id: 3,
				value: 0,
				title: 'Ka'
			},
			{
				id: 4,
				value: 12,
				title: 'KimKim'
			}
		]
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {
			...counter
		};
		counters[index].value++;
		this.setState({
			counters
		});
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {
			...counter
		};
		counters[index].value--;
		this.setState({
			counters
		});
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
		return ( <
			React.Fragment > < NavBar totalCounters = {
				this.state.counters.filter(c => c.value > 0).length
			}
			/ > < main > < Counters onReset = {
			this.handleReset
		}
		onIncrement = {
			this.handleIncrement
		}
		onDecrement = {
			this.handleDecrement
		}
		onDelete = {
			this.handleDelete
		}

		counters = {
			this.state.counters
		}
		/ > < /main > <
		/React.Fragment>
	)
}
}

export default App;