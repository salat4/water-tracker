import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
const CalendarComponents = ({markedDates}) => {
  return (
    <View style = {styles.calendar}>
      <Calendar markedDates={markedDates} 
  theme={{
    calendarBackground: 'rgb(9,30,66)',
    dayTextColor: '#fff',
    textDisabledColor: '#444',
    monthTextColor: '#888'
  }}

/>
    </View>
  )
}

export default CalendarComponents

const styles = StyleSheet.create({
  calendar:{
    backgroundColor:'rgb(9,30,66)'

  }
})