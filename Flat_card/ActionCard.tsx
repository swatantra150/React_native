import { SafeAreaView,StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <SafeAreaView style={styles.safeArea}>
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                'What's new in the java Script 21-ES12'
            </Text>
        </View>
        <Image
        source={{
           uri: 'https://i.pinimg.com/originals/39/aa/eb/39aaebc33872252aed06ee1af42fc79b.jpg'
          }}
         style={styles.cardImage}
        />
        <View  style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta soluta exercitationem alias ad voluptatum? Quam eos delectus accusantium dolorum, quo possimus aliquam sequi consequuntur sit fugit. Architecto a consequatur nemo.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://music.youtube.com/channel/UCDxKh1gFWeYsqePvgVzmPoQ')}>
                <Text style={styles.link}>Arijit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://music.youtube.com/channel/UCDoxhZGShhNvN4Bc3nWZptg')}>
                <Text style={styles.link}>Shubh</Text>
            </TouchableOpacity>
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
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:280,
        borderRadius:6,
        marginVertical:12,
        marginLeft:10,
        marginRight:1000,
    },
    
    elevatedCard:{
        backgroundColor:'#ff5e57',
        elevation:3,
        shadowOffset:{
            width:1,height:2
        }
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:100
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    link:{
        fontSize:15,
        backgroundColor:'#0fbcf9',
        paddingHorizontal:20,
        borderRadius:6
    }
})