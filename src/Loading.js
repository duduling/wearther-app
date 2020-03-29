import React from 'react'
import styled from '@emotion/native'

// #region
const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 60px 32px;
    background-color: #FDF6AA;
`

const LoadingText = styled.Text`
    color: #2c2c2c;
    font-size: 28px;
`

const CustomStatusBar = styled.StatusBar`

`
// #endregion

const Loading = () => {
    return (
        <Container>
            <CustomStatusBar barStyle={'dark-content'} />
            <LoadingText>Getting the weather...</LoadingText>
        </Container>
    )
}

export default Loading