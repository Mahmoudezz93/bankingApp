import React, { Component } from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import { AsyncStorage } from "react-native"

export default class splash extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount = async()=>{
        this.timeoutHandle = setTimeout(()=>{
            // Add your logic for the transition
            this._retrieveData();
    }, 2800);

    }

    _retrieveData = async() => {                                        // search for a stored token in the local storage // 
    try {
        const value = await AsyncStorage.getItem('USER_TOKEN');
        if( value != null)
        {
            // We have token //
            await this.setState({token: value});
            console.log("we have data")                             
            this.props.navigation.replace("Tabs")
        }else {
            // We have no token -- Nav to login or signup
            console.log("we have no data")
            this.props.navigation.navigate("Login")
        }
    } catch (error) { }
}
    render() {
        return (
            <View style={{ alignSelf:'center',justifyContent:'center',flex:1}}>
                <Text style={{fontSize:18,fontWeight:'700',alignSelf:'center',
            textAlign:'center'}}>Welcome To Banking App </Text>
            </View>
        )
    }
}
