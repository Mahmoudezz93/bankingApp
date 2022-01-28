import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import axios from "axios";
const Banking = [
    {
        id: 1,
        title: "bank 1",
        color:'red'
    }, {
        id: 2,
        title: "bank 2",
        color:'blue'

    }, {
        id: 3,
        title: "bank 3",
        color:'yellow'

    }, {
        id: 4,
        title: "bank 4",
        color:'pink'

    }, {
        id: 5,
        title: "bank 5",
        color:'green'

    },
]

const Hospitals = [
    {
        id: 1,
        title: "Hospital 1",
        color:'yellow'
    }, {
        id: 2,
        title: "Hospital 2",
        color:'orange'
    }, {
        id: 3,
        title: "Hospital 3",
        color:'grey'
    }, {
        id: 4,
        title: "Hospital 4",
        color:'lightblue'
    }, {
        id: 5,
        title: "Hospital 5",
        color:'green'

    },
]

const Govern = [
    {
        id: 1,
        title: "Govern 1",
        color:'darkred'
    }, {
        id: 2,
        title: "Govern 2",
        color:'green'
    }, {
        id: 3,
        title: "Govern 3",
        color:'skyblue'
    }, {
        id: 4,
        title: "Govern 4",
        color:'lightblue'
    }, {
        id: 5,
        title: "Govern 5",
        color:'grey'

    }
]

const Telecom = [
    {
        id: 1,
        title: "Telecom 1",
        color:'red'
    }, {
        id: 2,
        title: "Telecom 2",
        color:'blue'

    }, {
        id: 3,
        title: "Telecom 3",
        color:'yellow'

    }, {
        id: 4,
        title: "Telecom 4",
        color:'pink'

    }, {
        id: 5,
        title: "Telecom 5",
        color:'green'

    },
]
export default class tab1 extends Component {


    constructor(props) {
        super(props);
    }

    state = {
        data: [], isReady: false, page: 1, fetching_from_server: false, endThreshold: 2,
        refreshing: false, dateNow: ''
    }

    componentDidMount = async () => {
        await this.setState({ isReady: false });
        // Get data 
        await this.setState({
            isReady: true
        });
    }

    render() {
        return (
            this.state.isReady ?
                <ScrollView padder  style={{ flex: 1, alignContent: 'center' , backgroundColor: 'white' }}>

                    <View style={{justifyContent:"space-between",padding:10}}>
                        <Text style={Pagestyles.mainText,{width:100,height:30,backgroundColor:'orange',textAlign:'center',textAlignVertical:'center',color:'white',borderRadius:8}}>Giza, Egypt</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#ededed', marginBottom: 5 }} >
                        <Text style={[Pagestyles.mainText, { alignSelf: 'flex-start',padding:5 }]}>Banking</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{padding:10}} horizontal>
                            {Banking ?
                                Banking.map((value, index) => {
                                    return (

                                        <TouchableWithoutFeedback
                                        >
                                            <View style={[Pagestyles.container, { backgroundColor: value.color, }]}>
                                                <Text style={{textAlign:'center'}}>{value.title}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })

                                : null}
                        </ScrollView>
                    </View>


                    <View style={{ borderBottomWidth: 1, borderColor: '#ededed', marginBottom: 5 }} >
                        <Text style={[Pagestyles.mainText, { alignSelf: 'flex-start',padding:5 }]}>Hospitals</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{padding:10}} horizontal>
                            {Hospitals ?
                                Hospitals.map((value, index) => {
                                    return (

                                        <TouchableWithoutFeedback
                                        >
                                            <View style={[Pagestyles.container, { backgroundColor: value.color, }]}>
                                                <Text style={{textAlign:'center'}}>{value.title}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })

                                : null}
                        </ScrollView>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderColor: '#ededed', marginBottom: 5 }} >
                        <Text style={[Pagestyles.mainText, { alignSelf: 'flex-start',padding:5 }]}>Govern</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} style={{padding:10}} horizontal>
                            {Govern ?
                                Govern.map((value, index) => {
                                    return (

                                        <TouchableWithoutFeedback
                                        >
                                            <View style={[Pagestyles.container, { backgroundColor: value.color, }]}>
                                                <Text style={{textAlign:'center'}}>{value.title}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })

                                : null}
                        </ScrollView>
                    </View>



                </ScrollView>
                : null
        )
    }
}


const Pagestyles = StyleSheet.create({

    container: { alignSelf: 'center', justifyContent: 'center', width: 80, height: 80, marginHorizontal: 10, borderRadius: 10, justifyContent: 'center' },

    imageStyle: { width: deviceWidth / 1.1, height: deviceWidth / 1.9, borderTopRightRadius: 7, borderTopLeftRadius: 7, zIndex: 20, marginBottom: 7 }, cardText: {
        alignSelf: "auto", paddingHorizontal: 3, fontSize: 16, textAlignVertical: 'top', color: 'white'
    },
    mainText:{fontSize:18,fontWeight:'bold',textAlign:'auto'}
})
