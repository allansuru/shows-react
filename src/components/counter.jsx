import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0,
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

	handleIncrement = () => {
		console.log('click: ', this);
		// this.state.count++;
		this.setState({
			count: this.state.count + 1
		});
	};

	render() {
		return (
			<div>
				<span className={this.setColorBadge()}>{this.formatCount()}</span>
				<div className="alert alert-dark" role="alert">
					{this.state.address.street}
				</div>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
					Increment
				</button>
				{/* {this.state.tags.length === 0 && <p className="alert alert-primary">Vazio</p>} */}
				{this.renderTags()}
			</div>
		);
	}

	showMenu() {
		return (
			<ul className="list-group">
				{this.state.tags.map((tag, index) => (
					<li className="list-group-item" id={index} key={tag}>
						{tag}
					</li>
				))}
			</ul>
		);
	}

	renderTags() {
		if (this.state.tags.length === 0) return <p className="alert alert-danger">There are no tags!</p>;

		return this.showMenu();
	}

	setColorBadge() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? <h1>Zero</h1> : count;
	}
}

export default Counter;
