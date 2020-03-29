import React from 'react'
import { StatusBar } from 'react-native'
import styled from '@emotion/native'
import PropTypes from 'prop-types'

import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const Temp = styled.Text`
    font-size: 32px;
    color: white;
`

const HalfContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const BottomHalfContainer = styled(HalfContainer)`
    align-items: flex-start; 
`

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
    text-align: left;
`

const SubTitle = styled.Text`
    font-size: 24px;    
    color: white;
    font-weight: 600;
`

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",
    ]).isRequired
}

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    }
}

function Weather({ temp, condition }) {
    return (
        <Container
            colors={weatherOptions[condition].gradient}
        >
            <StatusBar barStyle="light-content" />
            <HalfContainer>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color='white' />
                <Temp>{`${Math.round(temp)}°`}</Temp>
            </HalfContainer>
            <BottomHalfContainer>
                <Title>{weatherOptions[condition].title}</Title>
                <SubTitle>{weatherOptions[condition].subtitle}</SubTitle>
            </BottomHalfContainer>
        </Container>
    )
}

export default Weather