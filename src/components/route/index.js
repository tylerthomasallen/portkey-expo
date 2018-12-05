import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SearchResult from './search_result';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    searchContainer: {
        borderColor: '#BDBDBD',
        borderWidth: .5,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column'
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    start: {
        color: 'blue',
        marginRight: 5,
        marginLeft: 5
    },

    end: {
        color: 'red',
        marginRight: 5,
        marginLeft: 5
    },

    input: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: .5,
        padding: 10,
        width: '100%'
    }
})


class RouteSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Pickup',
            start: '',
            end: ''
        }
    }

    componentDidMount() {
        console.log('hello');
        debugger;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.title}</Text>

                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.start}>Start</Text>
                        <TextInput 
                            placeholder="Search pickup spot"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.end}>End</Text>
                        <TextInput
                            placeholder="Search destination"
                            style={styles.input}
                        />
                    </View>
                </View>

                <SearchResult />
            </View>
        )
    }
}

const mapStateToProps = ({ origin, destination }) => {
    return {
        origin,
        destination
    }
}

const mapDispatchToProps = dispatch => ({
    getGoogleLoc: () => dispatch(getGoogleLoc())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteSearch)