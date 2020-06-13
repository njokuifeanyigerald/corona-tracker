import React, { Component } from 'react';
import {Cards, CountryPicker, Charts} from './components/index';
import styles from './app.module.css';
import { fetchData } from './api/api';
import Covid from '../src/image/covid-19.png';

class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData)
    this.setState({data: fetchedData, country:country});
  }

  render() {
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.Image} alt="corona" src={Covid}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
         
      </div>
    )
  }
}


export default App;
