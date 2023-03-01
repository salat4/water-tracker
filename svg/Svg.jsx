import { StyleSheet, View } from 'react-native';
import Svg, { Defs, Path, LinearGradient, Stop ,Text} from 'react-native-svg';
import React from 'react';
import drop from '../assets/drop.png';

const SvgComponent = ({ water }) => {
  const diference = water/2000;

  return (
    <View style={styles.container}>
      <Svg width={142.191}
      height={180.619} style = {styles.svg}>
        <Defs>
            <LinearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
              <Stop offset="0%" stopColor="#388BFF" />
              <Stop offset={diference} stopColor="#388BFF" />
              <Stop offset={diference} stopColor="blue" />
            </LinearGradient>
          </Defs>
        <Path fill = "url(#gradient)" d="M71.101 180.62c39.2 0 71.091-28.684 71.091-63.945C142.191 67.583 76.255 3.649 73.443.946a3.4 3.4 0 0 0-4.7 0C65.931 3.646.004 67.583.004 116.675c0 35.26 31.877 63.945 71.1 63.945" />
        <Text
          fill="white"
          fontSize="20"
          fontWeight="bold"
          textAnchor="middle"
          dy={"50%"}
          dx = {"50%"}
        >
          {water}
        </Text>
        <Text
          fill="white"
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle"
          dy={"60%"}
          dx = {"50%"}
        >
          {Math.round(diference * 100)}%
        </Text>
      </Svg>

  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:"5%"
    // justifyContent:'center',
    // paddingBottom:"50%"
  }
});
export default SvgComponent;
