import React from 'react';
import { fetchAnimals } from '../utilz/apiCalls';
import { getAnimals, loadComplete, hasErrored } from '../actions';
import { connect } from 'react-redux';
import AnimalsDisplay from './AnimalsDisplay'
import './App.css';

export class App extends React.Component {
  componentDidMount() {
    fetchAnimals()
    .then(animals => this.props.getAnimals(animals))
    .then(this.props.loadComplete())
    .catch(error => this.props.hasErrored(error))

  }

  render() {
    return (
      <main>
        <header className='app-header'>
          <h1 className='app-title'>Animal Rescue</h1>
        </header>
        <AnimalsDisplay />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  animals: state.animals,
  error: state.error,
  loading: state.isLoading,
  donations: state.donations
});

const mapDispatchToProps = dispatch => ({
  getAnimals: animals => dispatch(getAnimals(animals)),
  loadComplete: () => dispatch(loadComplete()),
  hasErrored: errorMsg => dispatch(hasErrored(errorMsg))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
