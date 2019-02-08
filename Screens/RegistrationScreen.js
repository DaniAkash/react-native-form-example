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
    Modal,
    Image,
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
        loading: false,
        done: false,
        error: false,
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

    submit = () => {
        let each, loopBroken = false;
        let formValues = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
        };
        for(each in formValues) {
            if(!formValues[each]) {
                this.setState({error: true});
                loopBroken = true;
                break;
            }
        }
        if(!loopBroken) {
            this.setState({
                loading: true,
            }, () => {
              setTimeout(() => {
                this.setState({
                    loading: false,
                    done: true,
                });
              }, 3000);  
            })
        }
    };

    success = () => {
        this.setState({
            done: false,
        });
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.registrationContainer}>
                <Modal
                    visible={this.state.loading}
                    animationType="slide"
                    transparent={true}
                >
                <View style={styles.loadingContainer}>
                    <Image
                        source={require('../resources/images/loading.gif')}
                        style={{height: 50, width: 50}}
                        resizeMode={'contain'}
                    />
                </View>
                </Modal>

                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.done}
                    onRequestClose={() => this.success()}
                    >
                    <View style={styles.doneContainer}>
                    <Text style={styles.doneText}>Event Successfully Registered!</Text>
                    <Button
                        onPress={() => this.success()}
                        title="Done"
                        color="green"
                    />
                    </View>
                </Modal>
                <TextInput
                    ref={this._nameRef}
                    placeholder={'Your Name...'}
                    onChangeText={name => this.setState({ name })}
                    underlineColorAndroid={this.state.error && !this.state.name?'red':'green'}
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
                    underlineColorAndroid={this.state.error && !this.state.email?'red':'green'}
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
                    underlineColorAndroid={this.state.error && !this.state.mobileNumber?'red':'green'}
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
    },
    loadingContainer: {
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.7)', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    doneContainer: {
        flex: 1, 
        backgroundColor: 'rgb(255,255,255)', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    doneText: {
        marginBottom: 20, 
        fontSize: 20, 
        fontWeight: 'bold'
    }
})

export default RegistrationScreen;