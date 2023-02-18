import Svg, { Circle, Rect } from 'react-native-svg';


import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Header = () => {
  let color = Platform.OS === "android" ? "rgb(16,18,20)" : "rgb(255,255,255)"
  return (
    <View style = {styles.headerContainer}>
      <Text style = {styles.headerTile}>Water tracker</Text>
      <Svg height="50%" width="10%" viewBox="0 0 100 100" > 
        <Circle
            cx="10"
            cy="50"
            r="5"
            stroke={color}
            strokeWidth="2.5"
            fill={color}>
        </Circle>
        <Circle cx="10"
            cy="70"
            r="5"
            stroke={color}
            strokeWidth="2.5"
            fill={color}>
        </Circle>
        <Circle cx="10"
            cy="90"
            r="5"
            stroke={color}
            strokeWidth="2.5"
            fill={color}>
        </Circle>
      </Svg>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    width:"100%",
    height:"12%",
    flexDirection:"row",
    backgroundColor: Platform.OS === "android" ? "rgb(55,180,195)" : "rgb(179,185,196)",
    alignItems:"center",

    justifyContent:"center"
  },
  headerTile:{
    flex:1,
    color:Platform.OS === "android" ? "rgb(16,18,20)" : "rgb(255,255,255)",
    fontSize:30,
    paddingLeft:Platform.OS === "android" ? "27%" : "25%",
    fontWeight:"bold",
    padding:10,
    marginTop:10,
  },

})