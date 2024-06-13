import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  
} from 'react-native/Libraries/NewAppScreen';
import DiceOne from '../assets/one.png'
import DiceTwo from '../assets/two.png'
import DiceThree from '../assets/three.png'
import DiceFour from '../assets/four.png'
import DiceFive from '../assets/five.png'
import DiceSix from '../assets/six.png'
type SectionProps = PropsWithChildren<{
  title: string;
}>;

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
   <View>
     <Image style={styles.diceImage} source={imageUrl } />
   </View>
 );
};
function App(): React.JSX.Element {
 const[diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)
 const rollDiceOnTap=()=>{
   let randomNumber=Math.floor(Math.random()*6)+1;
   switch(randomNumber){
     case 1:
       setDiceImage(DiceOne)
       break;
     case 2:
       setDiceImage(DiceTwo)
       break;
     case 3:
       setDiceImage(DiceThree)
       break;
     case 4:
       setDiceImage(DiceFour)
       break;
      case 5:
       setDiceImage(DiceFive)
       break;
      case 6:
       setDiceImage(DiceSix)
       break;
   }
   
 }
 return (
  <View>
   <Dice imageUrl={diceImage}></Dice>
   <Pressable
   onPress={rollDiceOnTap}>
     <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
   </Pressable>
  </View>
 )
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#FFF2F2',
 },
 diceContainer: {
   margin: 12,
 },
 diceImage: {
   width: 200,
   height: 200,
 },
 rollDiceBtnText: {
   paddingVertical: 10,
   paddingHorizontal: 40,
   borderWidth: 2,
   borderRadius: 8,
   borderColor: '#E5E0FF',
   fontSize: 16,
   color: '#8EA7E9',
   fontWeight: '700',
   textTransform: 'uppercase',
 },
});
export default App;
