import React, { Component } from 'react';
import { AsyncStorage } from "react-native";

export default class StoreMan extends Component {
get_item=  async(token)=>{
const value = await AsyncStorage.getItem(token);
    if (value !== null) {
        // We have data!!
        return value;
    }
}
set_item=  async(token,value)=>{
    await AsyncStorage.setItem(token, value);
      console.log("saved successfully");
}
remove_item=async(value)=>{
        await AsyncStorage.removeItem(value);
         console.log( value +"removed successfully");
}
remove_all =async()=>{
    await AsyncStorage.clear();
}
}