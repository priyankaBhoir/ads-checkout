import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AdPackage extends Component {
	static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.array.isRequired
	}
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="icon-block" style={{height: 200}}>
				<h5 className="center">{this.props.title}</h5>
				<ul>{this.props.description.map((desc, index) => <li key={index}> {desc} </li>)} </ul>
				<div className="ad-price"> $ {this.props.price} </div>
			</div>
		)
	}
}
