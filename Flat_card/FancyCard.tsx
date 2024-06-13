import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

export default function FancyCard(){
  return (
    <SafeAreaView style={styles.safeArea}>
    <View>
      <Text style={styles.headinngText}>Trending</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://i.pinimg.com/originals/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg'
        }}
        style={styles.cardImage}
        />
    <View style={styles.cardBody}>
     <Text style={styles.cardTitle}>RAM MANDIR</Text>
     <Text style={styles.cardLabel}>Ayodha,UP</Text>
     <Text style={styles.cardDesciptin}>The Ram Mandir, also known as the Ram Temple, is a Hindu temple currently under construction in Ayodhya, Uttar Pradesh, India. It is dedicated to Lord Rama, a major deity in Hinduism, who is believed to have been born in Ayodhya.</Text>
     <Text style={styles.cardFooter}>4hrs away</Text>
    </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  safeArea: {
    flex: 1,
  },
    headinngText:{
    fontSize: 24,
    fontWeight: 'bold',
    color:'#e74c3c',
    paddingHorizontal: 8,
    marginVertical: 16,
    },
    card:{
        width:350,
        height: 800,
        borderRadius: 20,
        marginHorizontal:16,
        marginVertical:12
    },
    cardElevated:{
        backgroundColor:'#9b59b6',
        elevation:3,
        shadowOffset:{
          width:1,
          height:1
        }
    },
    cardImage:{
        height:600,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:16
    },
    cardTitle:{
        color:'#2ecc71',
        fontSize:25,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
      color:'#3498db',
      fontSize:16,
      marginBottom:5
    },
    cardDesciptin:{
      color:'#f39c12',
      fontSize:14,
      marginTop:8,
      marginBottom:8
    },
    cardFooter:{
      color:'#FDA7DF'
    }
})