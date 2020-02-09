import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class LoginScreen extends React.Component {

    state = {
        name: "None"
    }

    continue = () => {
        this.props.navigation.navigate("Chat", { name: this.state.name });
    };

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <View style={{ marginTop: 64 }}>
                <Image
                    source={require("./assets/chat.png")}
                    style={{ width: 100, height: 100, alignSelf: "center" }} />
            </View>
            <View style={{marginHorizontal: 32}}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Your Username'
                    onChangeText = { name => {
                        this.setState({ name })
                    }}
                    value={this.state.name}
                />
                <View style={{ alignItems: 'flex-end', marginTop: 64}}>
                    <TouchableOpacity style={styles.continue} onPress={this.continue}>
                        <Ionicons name="md-arrow-round-forward" size={24} color='#fff'></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
      width: 500,
      height: 500,
      borderRadius: 500 / 2,
      backgroundColor: '#fff',
      position: 'absolute',
      left: -120,
      top: -20
  },
  header: {
      fontWeight: "800",
      fontSize: 30,
      color: '#514e5a',
      marginTop: 32
  },
  input: {
      marginTop: 32,
      height: 50,
      borderColor: '#bab7c3',
      borderWidth: 1,
      borderRadius: 30,
      paddingHorizontal: 16,
      color: '#514e5a',
      fontWeight: "600"
  },
  continue: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2,
      backgroundColor: '#9075E3',
      alignItems: 'center',
      justifyContent: 'center'
  }
});
