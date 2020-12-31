import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { getParams, getParamsHeader } from '../../../utils/index';
import Spinner from 'react-native-loading-spinner-overlay';

export default class ObjectAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Note: '',
            spinner: false
        }
    }

    onPressHeader = () => {
        getParams(this.props).onPress(this.state)
    };

    componentDidMount = () => {
        console.log('Did mount')
        this.props.navigation.setParams({ onPressHeader: this.onPressHeader });
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log('Did update')
    };


    static navigationOptions = ({ navigation }) => ({

        headerRight: (
            <TouchableOpacity
                style={{ paddingRight: 15 }}
                onPress={() =>
                    getParamsHeader(navigation).onPressHeader()
                }
            >
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>TẠO</Text>
            </TouchableOpacity >
        ),
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>TẠO MỚI</Text>
            </View>

        ),
    });

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#e3e7eb' }}>
                
                <View style={{
                    backgroundColor: 'white',
                    flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 15, paddingRight: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'
                }}>
                    <View style={{ paddingRight: 10 }}>
                        <Icon
                            name='rectangle'
                            size={5}
                            color='red'

                        />
                    </View>
                    <Text >Tên:</Text>

                    <TextInput
                        style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
                        placeholder="Nhập chữ"
                        onChangeText={(Name) => this.setState({ Name })}
                        value={this.state.Name}
                    />
                </View>
                <View style={{
                    backgroundColor: 'white',
                    flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, paddingBottom: 80, paddingRight: 10, fontSize: 16, borderBottomWidth: 0.5, alignItems: 'center'
                }}>
                    <Text >Ghi chú:</Text>

                    <TextInput
                        style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
                        placeholder="Nhập chữ"
                        onChangeText={(Note) => this.setState({ Note })}
                        value={this.state.Note}
                    />
                </View>
            </View>
        )
    }
}
