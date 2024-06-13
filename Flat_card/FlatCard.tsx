import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.headingText}>Flat Card</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.cardText}>Blue</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 16, // Added some margin for better spacing
    color:'#5758BB'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around', // To space the cards evenly
    
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardText: {
    color: 'white', // Assuming text should be white for visibility
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:8,
    marginTop:8
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
})
