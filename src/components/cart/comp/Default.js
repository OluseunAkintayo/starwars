import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="mt-16 mx-4 text-center bg-gray-200 py-8 rounded">
                <h1 className="text-red-500 font-bold mb-4">Error 404!</h1>
                <h3>The requested resource <span className="text-red-500 font-bold">{this.props.location.pathname}</span> was not found.</h3>
            </div>
        )
    }
}
