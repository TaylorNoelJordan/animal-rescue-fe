import React from 'react';
import { fetchAnimals, fetchDonations } from '../utilz/apiCalls';
import { getAnimals, loadComplete, hasErrored, getDonations } from '../actions';
import { connect } from 'react-redux';
import AnimalsDisplay from './AnimalsDisplay';
import DonationsDisplay from './DonationsDisplay';
import DonationForm from './DonationForm';
import './App.css';

export class App extends React.Component {
  componentDidMount() {
    fetchAnimals()
    .then(animals => this.props.getAnimals(animals))
    .then(this.props.loadComplete())
    .catch(error => this.props.hasErrored(error))

    fetchDonations()
    .then(donations => this.props.getDonations(donations))
    .then(this.props.loadComplete())
    .catch(error => this.props.hasErrored(error))
  }

  render() {
    return (
      <main>
        <header className='app-header'>
          <h1 className='app-title'>Animal Rescue</h1>
          <DonationForm />
        </header>
        <section className='content'>
        <AnimalsDisplay />
        <DonationsDisplay />
        </section>
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
  hasErrored: errorMsg => dispatch(hasErrored(errorMsg)),
  getDonations: donations => dispatch(getDonations(donations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
