import React from 'react';
import DonationTile from '../components/DonationTile';
import { connect } from 'react-redux';

const DonationsDisplay = ({ donations }) => {
    const amounts = donations.map(donation => {
        return <DonationTile 
                    name={donation.name}
                    donation={donation.donation}
                />
    })
    return (
        <section className='donations-sidebar'>
            {amounts}
        </section>
    )
}

const mapStateToProps = state => ({
    donations: state.donations
})

export default connect(mapStateToProps)(DonationsDisplay)