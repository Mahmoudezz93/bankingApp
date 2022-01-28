import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { API, Login } from "../../functions/config"
import StoreMan from "../../functions/storage"
import { StackActions, NavigationActions, CommonActions, } from '@react-navigation/native';

export default class login extends Component {

    state = {
        isReady: true,                  // email and password for login // 
        email: '',
        name: '',
        password: '',
        age: '',
        token: ''
    }

    constructor(props) {
        super(props);
        this.Storager = new StoreMan();
    }


    saveData = (result) => {
        let self = this;
        this.Storager.set_item("USER_TOKEN", result);
        console.log("nav to login")
        this.navigateToLogin();

    }
        // login and then save the token and navigate to the application // 

    navigateToLogin() {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Tabs' }]
            })
        )

    }

    render() {
        return (
            this.state.isReady ?
                <View style={Pagestyles.container}>
                    <Text>Login to your Account
                    </Text>
                    <View style={{ flex: 0.8, alignSelf: 'center', }}>

                        <TextInput
                            style={Pagestyles.inputField}
                            placeholder='Email'
                            textAlign="center"
                            onChangeText={text => this.setState({ email: text })}
                            value={this.state.email}
                        ></TextInput>

                        <TextInput
                            style={Pagestyles.inputField}
                            placeholder='Ente your Password..'
                            secureTextEntry={true}
                            textAlign="center"
                            onChangeText={text => this.setState({ password: text })}
                            value={this.state.password}
                        ></TextInput>



                        <Button onPress={() => { this.navigateToLogin() }} rounded style={Pagestyles.button} title='Log in' >
                        </Button>
                        <Text onPress={() => { this.props.navigation.navigate("Signup") }} style={{marginVertical:5,textAlign:'center'}}>or Sign up</Text>
                    </View>
                   
                </View>
                : <View>
                    <Text>Loading Screen</Text>
                </View>
        )
    }
}

const Pagestyles = StyleSheet.create({

    container: { alignSelf: 'center', justifyContent: 'center', flex: 1 },
    button: { width: 250, height: 30, backgroundColor: '#1E90FF', marginVertical: 5, borderRadius: 9 },
    inputField: { width: 250, height: 35, alignSelf: "center", justifyContent: "space-around", backgroundColor: '#eeeeee', marginVertical: 10, borderWidth: 0.4, borderRadius: 7 },
    textMain: { textAlign: 'center', color: 'white', fontSize: 16 }
})
