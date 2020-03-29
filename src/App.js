import React from 'react'
import Loading from './Loading'

import * as Location from 'expo-location'
import { Alert } from 'react-native'

class App extends React.Component {
  state = {
    isLoading: true
  }

  getLoction = async () => {
    try {
      await Location.requestPermissionsAsync()
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync()
      this.setState({ isLoading: false })
    } catch (error) {
      Alert.alert("Can't find you", "So sad")
    }
  }

  componentDidMount() {
    this.getLoction()
  }

  render() {
    const { isLoading } = this.state

    return isLoading ? <Loading /> : null
  }

}

export default App