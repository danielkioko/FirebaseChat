import React from 'react';
import { Platform, KeyboardAvoidingView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from './Fire';

export default class ChatScreen extends React.Component {

    state = {
        message: []
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message => 
            this.setState(previous => ({
                messages: GiftedChat.append(previous.message, message)
            }))
        );
    }

    componentWillMount() {
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
        if (Platform.OS === 'android') {
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                {chat}
            </KeyboardAvoidingView>
        }

        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
    }
}