import React, { Component } from 'react'
import { ScrollView, StatusBar , StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import CardView from 'react-native-cardview'
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    marginTop: 15,
  },    
  //new
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})













export default class extends React.Component {
  
//   state = {
//     pushNotifications: true,
//   }

//   onPressOptions = () => {
//     this.props.navigation.navigate('options')
//   }

//   onChangePushNotifications = () => {
//     this.setState(state => ({
//       pushNotifications: !state.pushNotifications,
//     }))
//   }

  render() {
    
    return (
      <View>
<CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>Ali</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              Email
            </Text>
          </View>
        </View>

</CardView>




        <ScrollView style={styles.scroll}>
      
       
     
        
      </ScrollView>

      </View>
    
       
          
   
    
    )
  }
}
 