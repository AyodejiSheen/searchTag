import { View, Text } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-progress-bar-horizontal';




const ProgressBarComponent = (props) => {

    let { bar } = props;

    return (
        <View>
            <ProgressBar
                progress={bar}
                borderWidth={0}
                fillColor="#4BC58F"
                unfilledColor="#DDDDDD"
                height={4}
                duration={100}
            />
        </View>
    )
}

export default ProgressBarComponent