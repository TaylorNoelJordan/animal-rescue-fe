import React from 'react';
import { connect } from 'react-redux';
import { addDonation, hasErrored } from '../actions';
import { postDonation } from '../utilz/apiCalls'


class DonationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            donation: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const newDonation = {...this.state, id: Date.now()}
        postDonation(newDonation)
        .then(donation => this.props.addDonation(donation))
        .catch(error => this.props.hasErrored(error))
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ name: '', donation: ''})
    }

    render () {
        return (
        <form className='donation-form'>
            <input 
                className='donation-input' 
                type='text' 
                name='name' 
                placeholder='Enter your name...' 
                value={this.state.name}
                onChange={this.handleChange} />
            <input 
                className='donation-input' 
                type='text' 
                name='donation' 
                placeholder='Enter an amount...' 
                value={this.state.donation}
                onChange={this.handleChange} />
            <button className='donation-submit' onClick={e => this.handleSubmit(e)}>Donate!</button>
        </form>
        )
    }
}

const mapStateToProps = state => ({
    donations: state.donations,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    addDonation: donation => dispatch(addDonation(donation)),
    hasErrored: error => dispatch(hasErrored(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm)