import React, {
    Component
} from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import events from '../data/events';

// https://pastebin.com/raw/vcxBNZYE
class EventsList extends Component {
    render() {
        return (
            <FlatList
                data={events}
                renderItem={({item}) => <Text>{item.event}</Text>}
            />
        );
    }
}

export default EventsList;