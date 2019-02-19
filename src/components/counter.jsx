import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: 'https://picsum.photos/g/200/300',
        address: {
            street: 'Av Paulista'
        }
     };

  
    render() {

        return (
            <div>
                <span className={this.setColorBadge()}>
                    {this.formatCount()}
                </span>
                {/* <div class="alert alert-dark" role="alert">
                    {this.state.address.street}
                </div> */}
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    setColorBadge() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;