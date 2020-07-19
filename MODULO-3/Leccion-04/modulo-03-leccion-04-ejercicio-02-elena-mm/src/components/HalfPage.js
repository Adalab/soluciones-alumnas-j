import React from 'react';

/* Class-based components */
class HalfPage extends React.Component {
    render() {
        return (
            <div className="half-page">
                {this.props.children}
            </div>
        );
    }
}

/* Functional components */

export default HalfPage;