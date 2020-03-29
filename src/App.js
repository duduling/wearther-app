import React from 'react'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import axios from 'axios'

import { Loading, Weather } from './Pages'

const API_KEY = 'f03352dede38792942907e733fb9bb1d'

class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeathre = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios({
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    })
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main
    })
  }

  getLoction = async () => {
    try {
      await Location.requestPermissionsAsync()

      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync()

      this.getWeathre(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", "So sad")
    }
  }

  componentDidMount() {
    this.getLoction()
  }

  render() {
    const { isLoading, temp, condition } = this.state

    return isLoading ? <Loading /> : <Weather temp={temp} condition={'Haze'} />
  }

}

export default App