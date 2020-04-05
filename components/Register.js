import React from 'react';
 
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
});

const Register = () => (
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
        Email
      </Text>
    </View>
  </View>

 
    
  
</ScrollView>
);

export default Register;
