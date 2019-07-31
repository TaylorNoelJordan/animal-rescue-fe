import React from 'react';


const AnimalTile = ({ img, name, species, description }) => {
    return (
        <article className='animal-tile'>
            <img src={img} alt='animal' className='animal-tile-img'/>
            <h2 className='animal-name'>{name}</h2>
            <p className='animal-species'>{species}</p>
            <p className='animal-description'>{description}</p>
        </article>
    )
}

export default AnimalTile