import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
        </View>
    );
}

export default DetailScreen;
