import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import PlusInsideCircle from '../assets/images/PlusInsideCircle';
import layout from '../theme/layout';

const addGoalScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#1C4950", paddingTop: layout.padding.large }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                <PlusInsideCircle />
                <Text style={{ color: 'pink', fontSize: 20 }}>Add a goal</Text>
            </TouchableOpacity>
        </View>
    );
}

export default addGoalScreen;