import React from 'react';

import { StyleSheet, Text, View,TextInput,TouchableOpecity } from 'react-native';


export default class Login extends React.Component{
  render(){
    return(


      <View style={styles.logincontainer}>
      <Text>
      Enter Your Name
      </Text>

<TextInput underlineColor='transparent' placeholder='Name' style={styles.textinput}/>
<TouchableOpecity style={styles.loginbtn}>
<Text>Login
</Text>
</TouchableOpecity>
</View>

);

  }

}
