import React, {
    Component
} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableHighlight,
    DatePickerAndroid,
    Button,
} from 'react-native';

class RegistrationScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title', 'Default title');
        return {
            title,
        };
    };

    state = {
        name: "",
        email: "",
        mobileNumber: "",
        dateOfBirth: new Date(1990, 1, 1),
    };
    _nameRef = React.createRef();
    _emailRef = React.createRef();
    _mobileRef = React.createRef();

    openDatePicker = async () => {
        try {
            const dateOfBirth = new Date(this.state.dateOfBirth);
            const androidDate = dateOfBirth.setMonth(
                dateOfBirth.getMonth() - 1
            );
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: androidDate,
                maxDate: new Date()
            });
            if(action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    dateOfBirth: new Date(year, month + 1, day),
                });
            }
        } catch (e) {
            alert('Unable to open date picker');
        }
    };

    render() {
        return (
            <View style={styles.registrationContainer}>
                <TextInput
                    ref={this._nameRef}
                    placeholder={'Your Name...'}
                    onChangeText={name => this.setState({ name })}
                    underlineColorAndroid={'black'}
                    value={this.state.name}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                        this._emailRef.current.focus();
                    }}
                />

                <TextInput
                    ref={this._emailRef}
                    placeholder={'Your Email...'}
                    onChangeText={email => this.setState({ email })}
                    underlineColorAndroid={'black'}
                    value={this.state.email}
                    returnKeyType={'next'}
                    keyboardType={'email-address'}
                    onSubmitEditing={() => {
                        this._mobileRef.current.focus();
                    }}
                />

                <TextInput
                    ref={this._mobileRef}
                    placeholder={'Your Mobile Number...'}
                    onChangeText={mobileNumber => this.setState({ mobileNumber })}
                    underlineColorAndroid={'black'}
                    value={this.state.mobileNumber}
                    returnKeyType={'next'}
                    keyboardType={'phone-pad'}
                    onSubmitEditing={() => {
                        this.openDatePicker();
                    }}
                />

                <TouchableHighlight
                    underlayColor={'transparent'}
                    style={{ height: 50 }}
                    onPress={() => this.openDatePicker()}
                >
                    <View style={styles.dateContainer}>
                        <Text>Date of Birth:</Text>
                        <Text>{`${this.state.dateOfBirth.getDate()}/${
                            this.state.dateOfBirth.getMonth()
                            }/${this.state.dateOfBirth.getFullYear()}`}</Text>
                    </View>
                </TouchableHighlight>

                <View style={styles.buttonContainer}>
                    <Button
                        onPress={()=> this.submit()}
                        title="Register"
                        color="#841584"
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    registrationContainer: {
        flex: 1,
        margin: 10,
    },
    dateContainer: { 
        height: 35, 
        backgroundColor: 'silver', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginVertical: 10 
    },
    buttonContainer: {
        height: 25, 
        width: 200, 
        alignSelf: 'center', 
        marginVertical: 20
    }
})

export default RegistrationScreen;