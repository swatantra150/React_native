import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import type {PropsWithChildren} from 'react'

type CurrentButtonProps=PropsWithChildren<{
    name:string;
    flag:string;
}>
const CurrencyButton=(props:CurrentButtonProps):JSX.Element=>{
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    buttonContainer:{
        alignItems:'center'
    },
   flag:{
    fontSize:28,
    color:'#ffcccc',
    marginBottom:4
   },
   country:{
    fontSize:28,
    color:'#18dcff',
    marginBottom:4
   }
})
export default CurrencyButton
