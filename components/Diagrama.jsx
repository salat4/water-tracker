import { StyleSheet, Text, View ,Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
} from "react-native-chart-kit";
import { useState } from 'react';
import { useEffect } from 'react';
const Diagrama = ({value}) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [valueOfWeek, setValueOfWeek] = useState({})
  useEffect(()=>{
    let date
    let dayOfWeek
    let updatedValueOfWeek = {}
    let dayName

  value && value.slice(-7).map((item) =>{
    date = new Date(item.date),
    dayOfWeek = date.getDay(),
    dayName = daysOfWeek[dayOfWeek]
    updatedValueOfWeek[dayName] = item.value
})
setValueOfWeek(prevState => ({...prevState, ...updatedValueOfWeek}))
  
  },[value]) 
  return (
    <View>
    { Object.keys(valueOfWeek).length === 0 ?
    <Text>Loading</Text>
    :
    <LineChart
  data={{
    labels: Object.keys(valueOfWeek),
    datasets: [
      {
        data: Object.values(valueOfWeek)
      }
    ]
  }}
  width={Dimensions.get("window").width}
  height={220}
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    // yAxisLabel: "$",
    yLabels: [0, 1000, 2000, 3000, 4000, 5000]
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>

  }
  </View>
  )
}

export default Diagrama

const styles = StyleSheet.create({})
