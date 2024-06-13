import { View, Text,SafeAreaView,ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard  from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'



const App = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ScrollView>
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
      </ScrollView>
      </SafeAreaView>
  )
}
const Styles=StyleSheet.create({
  safeArea: {
    flex: 1,
  }
})
export default App