import React, {
    Component
} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import events from '../data/events';

// https://pastebin.com/raw/vcxBNZYE
class EventsList extends Component {

    _renderRow = ({item, index}) => {
        return (
            <TouchableHighlight 
                style={styles.rowTouchable}
                underlayColor={'silver'}
                onPress={() => null}
                >
                <View style={[styles.rowContainer, {
                    backgroundColor: index %2 ? '#F0FFF0': 'white'
                }]}>
                    <Text style={styles.eventNameText}>{item.event}</Text>
                    <View style={styles.eventDetailsContainer}>
                        <Text style={styles.locationText}>{item.location}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    _keyExtractor = (item, index) => item.id;

    _renderSeperator = () => {
        return(
            <View style={{backgroundColor: 'black', height: StyleSheet.hairlineWidth}}/>
        );
    }

    render() {
        return (
            <FlatList
                data={events}
                renderItem={this._renderRow}
                keyExtractor={this._keyExtractor}
                ItemSeparatorComponent={this._renderSeperator}
            />
        );
    }
}

const styles = StyleSheet.create({
    rowTouchable: {

    },
    rowContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    eventNameText: {
        marginBottom: 10,
    },
    eventDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    locationText: {

    },
    location: {

    },
});

export default EventsList;