import React, { Component } from 'react'
import { View, Text, TextInput, Button,StyleSheet} from 'react-native'
import axios from "axios";
import StoreMan from "../../functions/storage"
import { StackActions, NavigationActions, CommonActions } from '@react-navigation/native';

export default class SignUp extends Component {

    state = {
        isReady: true,
        email: '',
        name: '',
        password: '',
        password_comfirmation: '',
        age: '',
        token: ''
    }

    constructor(props) {
        super(props);
        this.Storager = new StoreMan();
    }

    Sign = async () => {                                          // sign up function  
        let self = this;    
        this.setState({ isReady: false });
        //here you are login request 
        await axios
            .post(  {
                headers: {
                    "Content-Type": "application/json",
                    
                },

                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                age: this.state.age,

            })
            .then(result => {
                console.log("User has been set");
                console.log(result.data.token)
                self.saveData(result.data.token);

            })
            .catch(function (error) {
                if (error.response) {
                    //error handling
                    alert(error.response.data.error);
 
                }
            });
        this.setState({ isReady: true });
    }


    saveData = (result) => {                                    // save token in the local storage and nav to the app 
        let self = this;
        console.log('save data')
        this.Storager.set_item("USER_TOKEN", result);
        console.log("nav to login")
        this.navigateToLogin();

    }

    navigateToLogin() {
        this.props.navigation.dispatch(
            CommonActions.reset ({
                index: 0,
                routes: [{ name: 'Tabs' }]
            })
        )

    }

    render() {
        return (
            this.state.isReady ?
                <View style={Pagestyles.container}>
                    <Text style={Pagestyles.textMain,{color:'black',textAlign:'center'}}>Create Account
                    </Text>
                    <View style={{ flex: 0.8, alignSelf: 'center'  }}>
                        <TextInput
                            style={Pagestyles.inputField}
                            placeholder='Enter your name...'
                            textAlign="center"
                            onChangeText={text => this.setState({ name: text })}
                            value={this.state.name}
                        ></TextInput>

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

                        <TextInput
                            style={Pagestyles.inputField}
                            placeholder='Ente your Age..'
                            keyboardType="number-pad"
                            textAlign="center"
                            onChangeText={text => this.setState({ age: text })}
                            value={this.state.age}
                        ></TextInput>

                        <Button onPress={() => { this.navigateToLogin() }} rounded style={ Pagestyles} title='Create Account' >
                        </Button>
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

