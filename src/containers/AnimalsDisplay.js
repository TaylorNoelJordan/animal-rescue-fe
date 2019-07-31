import React from 'react';
import AnimalTile from '../components/AnimalTile';
import { connect } from 'react-redux';


const AnimalsDisplay = ({ animals }) => {

    const tiles = animals.map(animal => {
        return <AnimalTile
                    key={animal.id}
                    img={animal.img}
                    name={animal.name}
                    species={animal.species}
                    description={animal.description}
                 />
    })

    return (
        <section className='animals-display'>
            {tiles}
        </section>
    )
}

const mapStateToProps = state => ({
    animals: state.animals
})

export default connect(mapStateToProps)(AnimalsDisplay)