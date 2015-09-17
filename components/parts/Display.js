import React from 'react'

let Display = React.createClass({
	render() {
		return (this.props.if) ? <div>{this.props.children}</div> : null;
	}
});

module.exports = Display;
