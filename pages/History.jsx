import { StyleSheet, View } from 'react-native'
import React from 'react'
import  Calendar  from '../components/Calendar'
import { useEffect } from 'react'
import Diagrama from '../components/Diagrama'
const History = ({value,getValue}) => {
  useEffect(()=>{
    getValue()
  },[])
  const markedDates = value && value.reduce((obj, item) => {
    if(item.value >= 2000){
      const date = item.date;
      obj[date] = { selected: true, selectedColor: '#388BFF' };
    }
      return obj;
  }, {});
  return (
    <View style = {styles.container}>
      <Calendar markedDates={markedDates}/>
      <Diagrama value = {value}/>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container:{
    flex :1,
    // 
  }
})