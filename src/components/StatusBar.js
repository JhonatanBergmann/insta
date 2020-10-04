import React, { Component } from 'react'
import {
    StatusBar, View
} from 'react-native'

class StatusBarDark extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    barStyle='dark-content'
                    hidden={false}
                    backgroundColor='#FAFAFA' />
             </View>
        )
    }
}

export default StatusBarDark