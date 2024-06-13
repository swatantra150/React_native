import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😀</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,color:'rgba(255, 87, 51, 1)',
        marginBottom:8
      },
      container:{
        flexDirection:'row',
        padding:8
      },
      card:{
        flex:1,
        margin:8,
        padding:8,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4
      },
      cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4
      }
})

export default ElevatedCard