import { StyleSheet } from 'react-native';
import HomeScreen from '../components/navigation/HomeScreen';
import DetailsScreen from '../components/navigation/DetailsScreen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BodyText: {
    fontSize: 18,
    color: '#888',
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  HeadlineText: {
    fontSize: 40,
    color: '#080',
    margin: 10,
  },
  HeadlineImage: {
    width: 200,
    height: 200,
  },
  Viewcontainer: {
    flexDirection: 'row',
    flex: 1
  },
  TopView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'lightblue',
  },
  BottomView: {
  //  flex: 0.1,
    position:'relative',
    zIndex:1,
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,           // or whatever height you want for the tab/list area
    backgroundColor: 'lightgray',
  },
   item: { 
   color: "yellow", 
   backgroundColor: "pink", 
   margin: 50, 
   padding: 10, 
   borderColor: "blue", 
   borderWidth: StyleSheet.hairlineWidth, 
   borderRadius: 30, 
   fontSize: 30, 
   width: 250, 
   height: 150, 
   fontWeight: "bold", 
   fontStyle: "italic", 
   textAlign: "right", 
   textAlignVertical: "bottom", 
   textDecorationLine: "underline" 
 } , 
 input: { 
   borderWidth: 1, 
   borderRadius: 5, 
   width: 250, 
   padding: 5, 
   backgroundColor: "red", 
   color: "white", 
   fontSize: 20, 
   fontWeight: "bold", 
   fontStyle: "italic" 
 } 
});

export default styles;