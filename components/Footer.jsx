import { StyleSheet, Text, TouchableOpacity, View,onPress } from 'react-native'
import React from 'react'
import Svg, { Ellipse, Use, Path, SvgUri,SvgXml } from 'react-native-svg';
const Footer = ({page, setActivePage}) => {
  const Press = (data) =>{
    setActivePage(data)
    // console.log(god)
  }
  return (
    <View style = {styles.footerContainer}>
      <TouchableOpacity style={styles.house} onPress = {()=>Press("main")}>
          <Svg height="100" width="110">
            <Path
              d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"
              fill="white"
              stroke="white"
            />
          </Svg>
      </TouchableOpacity>
      <TouchableOpacity style={styles.diagrama} onPress = {()=>Press("history")} >
          <Svg height="100" width="110">
            <Path
              d="M0 26h32v4h-32zM4 18h4v6h-4zM10 10h4v14h-4zM16 16h4v8h-4zM22 4h4v20h-4z"
              fill="white"
              stroke="white"
            />
          </Svg>
      </TouchableOpacity>
      
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footerContainer:{
    width:"100%",
    height:"10%",
    flexDirection:'row',
    backgroundColor: Platform.OS === "android" ? "rgb(55,180,195)" : "rgb(179,185,196)",
  },
  house:{
    paddingVertical:Platform.OS === "android" ? "10%" : "7%",
    marginLeft:"20%",
  },
  diagrama:{
    marginLeft:"20%",
    paddingVertical:Platform.OS === "android" ? "10%" : "7%",
  }
})