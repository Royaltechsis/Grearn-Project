import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({

    // utility styles 

    whiteBackground:{
        backgroundColor: 'white',
    },
    primaryBackground:{
        backgroundColor: '#6CBC37',
    },
    white:{
        color: 'white',
    },
    black:{
        color: 'black',
    },
    grey:{
        color: 'grey',
    },
    row:{
        flexDirection: 'row',
    },
    
    container: {
        backgroundColor: 'white',
        padding: 5,
        paddingTop: 10,
      },
      innerContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
     
      },
      columnContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
      imageContainer: {
        marginRight: 15,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ddd',
      },
      textContainer: {
        justifyContent: 'center',
      },
      primaryText : {
        color: 'black',
      },
      greetingText: {
        color: '#ffd33d',
        fontSize: 18,
        fontWeight: 'bold',
      },
      nameText: {
        color: 'white',
        fontSize: 16,
      },

      frameImage: {
        width: 30, // Set width for the image
        height: 30, // Set height for the image
      },
    
      elevated: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3, // Increased slightly for a more pronounced shadow
        elevation: 5, // Higher elevation for Android to create a box shadow
      },
    
      // Adjust the container for spacing around items
      fimageContainer: {
        marginRight: 15,
        alignItems: 'center', // Center the text and image
      },
      stockImage:{
        height : 150,
        width : 150,
        margin : 10,
        borderRadius : 10,
      },
      scrollContainer :{
        flexDirection : 'row',        
        gap : 10,
        flex : 1,
      },
      button:{
        backgroundColor : '#6CBC37',
        color: 'white',
        width : '90%',
        padding : 10,
        borderRadius : 10,
        alignSelf : 'center',
        margin: 20,

      }
})