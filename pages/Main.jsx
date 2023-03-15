import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import SvgComponent from '../svg/Svg';
import Buttons from '../components/Buttons';
import { useEffect } from 'react';

const Main = ({water,setWater,keyboardStatus}) => {
  return (
    <View style= {styles.mainContainer}>
      <View>
        <Text style = {styles.header}>Today</Text>
        <Text style = {styles.target}>Water target : 2000 ml</Text>
      </View>
      <SvgComponent water={water}/>
      <Buttons setWater = {setWater} water={water} keyboardStatus = {keyboardStatus}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  mainContainer:{
    // position:'relative',
    flex:1,
    backgroundColor:'rgb(9,30,66)'
  },
  header:{
    color:"white",
    textAlign:"center",
    paddingTop:"10%",
    fontSize:30,
    fontWeight:'bold',
  },
  target:{
    color:'#1D7AFC',
    textAlign:"center",
    paddingTop:20,
  },
  hero:{
    position:"relative",
    alignItems:'center',
    justifyContent:'center'
  },

})