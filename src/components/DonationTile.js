import React from 'react';

const DonationTile = ({ name, donation}) => {
    return (
        <article className='donation-tile'>
            <p>{name} recently donated ${donation}.</p>
        </article>
    )
}

export default DonationTile;