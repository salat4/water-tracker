import { Keyboard, StyleSheet, Text, View,TextInput ,KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed/dist/Button'
import { useState } from 'react'
import { useEffect } from 'react'

const Buttons = ({setWater ,water,keyboardStatus}) => {
    const [value, setValue] = useState(0);
    const [heightKey, setHeightKey] = useState()
    const handleValue = () =>{
        Press(Number(value));
        setValue()
        Keyboard.dismiss();
    }
    const Press = (data) =>{
        setWater(water + data)
    }
    useEffect(()=>{
        if(Keyboard.metrics() !== undefined){
            setHeightKey(Keyboard.metrics().height)
        }
    })
    useEffect(()=>{
        console.log(heightKey)
    })
    
  return (
   
    <View style={styles.container}>
        
        <View style={styles.buttonContainer}>
            {!keyboardStatus &&<TouchableOpacity style={styles.cup} onPress={() => { Press(230) }}><Text>CUP (230ml)</Text></TouchableOpacity>}
            {!keyboardStatus && <TouchableOpacity style={styles.bottle} onPress={() => { Press(500) }}><Text>BOTTLE (500ml)</Text></TouchableOpacity>}
        </View>
        <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingContainer}>
           
        <View style = {!keyboardStatus ?styles.inputContainer : styles.inputContainerKey}>
         <TextInput value = {value} keyboardType="numeric" style={styles.else} onChangeText={(data) => setValue(data)} placeholder="SOMETHING ELSE"></TextInput>
            {keyboardStatus && <Button style ={styles.button} onPress={() => { handleValue() }}>Add</Button>}
           
       </View>
       </KeyboardAvoidingView>

    </View>
   

  )
}

export default Buttons

const styles = StyleSheet.create({
    
    bottle:{
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
    },
    else:{
        height:50,
        width:200,
        backgroundColor:'white',
        textAlign:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
        color:"black"
    },
    cup:{
        backgroundColor:'white',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:50,
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    inputContainer:{
        // width:'50%',
        paddingTop:"10%",
        paddingBottom: 30,
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    inputContainerKey:{
        width:300,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "center",
        height: 356,
        // paddingBottom:
    },
    button:{
        marginLeft:"30%",
    }
  });
  
  
  