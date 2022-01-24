import React, { useState, Component } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native'
class App extends Component {

    state = {
        switchValue: true
    }
    handleSwitch = () => {
        const { switchValue } = this.state;

        this.setState({ switchValue: !switchValue })
    }

    render() {
        const { switchValue } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.secondaryView}>
                    <View style={styles.a1}></View>
                    <View style={styles.a2}></View>
                    <View style={styles.a3}></View>
                </View>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '100%',
    },
    secondaryView: {
        height: '33.33%',
        backgroundColor: 'red',
        width: '100%'
    },
    view1: {
        backgroundColor: 'aqua',
        height: '33.33%',
        width: '100%'

    },
    view2: {
        height: '33.33%',
        backgroundColor: 'red',
        width: '100%'
    },
    a1: {
        backgroundColor: 'blue',
        width: '33.33%',
        height: '100%'
    },
    a2: {
        backgroundColor: 'yellow',
        width: '33.33%',
        height: '100%'

    },
    a3: {
        backgroundColor: 'purple',
        width: '33.33%',
        height: '100%'

    },
});

export default App;