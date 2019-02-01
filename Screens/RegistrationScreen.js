import React, {
    Component
} from 'react';
import {
    View,
} from 'react-native';

class RegistrationScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const title = navigation.getParam('title', 'Default title');
        return {
            title,
        };
    };

    render() {
        return (
            <View>
                
            </View>
        )
    }
}

export default RegistrationScreen;