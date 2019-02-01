import React, {
    Component
} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

class SplashScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Events');
        }, 1000);
    }

    render() {
      return (
         <View style={styles.container}>
             <Image
                style={styles.logo}
                source={require('../resources/images/welcome.png')}
             />
             <Text style={styles.message}>Welcome!</Text>
         </View> 
      )  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 10,
    },
    message: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'green'
    }
});

export default SplashScreen;