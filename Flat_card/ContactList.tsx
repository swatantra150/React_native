import { SafeAreaView, StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
    { userId: '1',
     name: 'John Doe',
     status: 'Software Engineer', 
     imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { userId: '2',
     name: 'Jane Smith',
      status: 'Graphic Designer', 
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    { userId: '3',
     name: 'Sam Brown', 
     status: 'Project Manager', 
     imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
     },
    { userId: '4',
     name: 'Lisa White',
      status: 'UX Designer',
       imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    { userId: '5', 
    name: 'Tom Hanks',
     status:'Actor', 
     imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    { userId: '6',
     name: 'Emma Watson', 
     status: 'Actress',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' 
    },
    { userId: '7',
     name: 'Chris Evans',
      status: 'Captain America',
       imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    { userId: '8',
     name: 'Scarlett Johansson', 
     status: 'Black Widow', 
     imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    { userId: '9',
     name: 'Robert Downey Jr.'
     , status: 'Iron Man', 
     imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg'
    },
    { userId: '10',
     name: 'Gal Gadot', 
     status: 'Wonder Woman', 
     imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' 
    },
];
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.headingText}>ContactList</Text> 
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({userId,name,status,imageUrl})=>(
            <View key={userId} style={styles.userCard}>
              <Image
              source={{
                uri:imageUrl
              }}
              style={styles.userImage}
              />
              <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
        ))}
        </ScrollView>
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
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#32ff7e',
        padding:8,
        borderRadius:14
                   
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12
    }
})