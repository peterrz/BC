import React from 'react';
 
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
 
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
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
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

const popToRoot = () => {
  Actions.popTo('launch');
};

const popToLogin1 = () => {
  Actions.popTo('loginModal');
};

const popToLogin2 = () => {
  Actions.popTo('loginModal2');
};

const popAndRefresh = () => {
  Actions.pop({
    refresh: {data: 'Data after pop', title: 'title after pop'},
    key: null,
  });
};

export default class extends React.Component {
  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    return (
      <ScrollView style={styles.scroll}>
      <View style={styles.userRow}>
        <View style={styles.userImage}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: './images/avatar.jpg',
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
            Email2
          </Text>
        </View>
      </View>
    
     
        
      
    </ScrollView>
    );
  }
}
