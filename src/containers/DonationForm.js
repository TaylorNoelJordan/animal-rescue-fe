import React from 'react';
import { connect } from 'react-redux';
import { addDonation } from 'actions';
import { postDonation } from '../utilz/apiCalls'


class DonationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            donation: ''
        }
    }

    render () {
        <form className='donation-form'>
            <input className='donation-input' type='text' name='name' placeholder='Enter your name...' value={this.state.name} />
            <input className='donation-input' type='text' name='donation' placeholder='Enter an amount...' value={this.state.donation} />
            <button className='donation-submit'>Donate!</button>
        </form>
    }
}

const mapStateToProps = state => ({
    donations: state.donations
})

const mapDispatchToProps = dispatch => ({
    addDonation: donation => dispatch(addDonation(donation))
})

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm)