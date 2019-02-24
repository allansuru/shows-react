import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: this.props.counter.value,
		imageUrl: 'https://picsum.photos/g/200/300',
		tags: [ 'Allan', 'Ronaldo', 'Pelé' ],
		address: {
			street: 'Av Paulista'
		}
	};

	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	// handleIncrement = (product) => {
	// 	console.log('click: ', this, product);
	// 	// this.state.count++;
	// 	this.setState({
	// 		count: this.state.count + 1
	// 	});
	// };

	// handleDecrement = () => {
	// 	this.setState({
	// 		count: this.state.count - 1
	// 	});
	// };

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps: ', prevProps);
		console.log('prevState: ', prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from the server
		}
	}

	componentWillUnmount() {
		console.log('Counter - Unmount');
	}

	onDelete = () => {
		console.log('on Deleteee', this.props.onDelete);
	};

	render() {
		console.log('Counter Rendered');
		// console.log('props: ', this.props);
		// console.log('id: ', this.props.counter.id);
		// console.log('props children: ', this.props.children);
		// console.log('State: ', this.state);
		return (
			<div>
				<span className={this.setColorBadge()}>{this.formatCount()}</span>
				<div className="alert alert-dark" role="alert">
					{this.props.children}
				</div>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button
					onClick={() => this.props.onDecrement(this.props.counter)}
					className="btn btn-secondary btn-sm ml-2"
				>
					decrement
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm ml-2"
				>
					delete
				</button>
				{/* {this.state.tags.length === 0 && <p className="alert alert-primary">Vazio</p>} */}
				{/* {this.renderTags()} */}
			</div>
		);
	}

	// showMenu() {
	// 	return (
	// 		<ul className="list-group">
	// 			{this.state.tags.map((tag, index) => (
	// 				<li className="list-group-item" id={index} key={tag}>
	// 					{tag}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p className="alert alert-danger">There are no tags!</p>;

	// 	return this.showMenu();
	// }

	setColorBadge() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? <h1>Zero</h1> : value;
	}
}

export default Counter;
