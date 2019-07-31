import React from 'react';
import { fetchAnimals } from '../utilz/apiCalls';
import { getAnimals } from '../actions';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetchAnimals()
    .then(animals => this.props.getAnimals(animals))
    .catch(error => this.props.hasErrored(error))

  }

  render() {
    return (
      <main>
        <header>
          <h1>Animal Rescue</h1>
        </header>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals
});

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
