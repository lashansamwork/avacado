import React from 'react';
import { View, Text, TextInput } from 'react-native';

const welcomeScreen = () => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
        <View>
            <Text>Avacado</Text>
            <Text>Hi there! I'm Jade</Text>
            <Text>What do you want me to </Text>
            <Text>call you?</Text>
            <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => onChangeText(text)}
                  value={value}/>
        </View>
    );
}

export default welcomeScreen;