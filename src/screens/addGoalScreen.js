import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const addGoalScreen = () => {
    return (
        <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor: "#1C4950"}}>
          
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                
                <Icon
                        
                          size={100}
                          color="pink"
                          name="plus-circle"
                />
                <Text style={{color:'pink', fontSize:20}}>Add a goal</Text>
            </TouchableOpacity>

        </View>
    );
}

export default addGoalScreen;