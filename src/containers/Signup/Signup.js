import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, CheckBox } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import signupRequest from '../../actions/signup.action';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            name: null,
            phone_number: null
        };
    }
    render() {
        console.log(this.state)
        return (
            <View>
                <Spinner
                    visible={this.props.isLoading}
                    textContent={'Loading...'}
                />
                <View style={styles.textHeader}>
                    <Text style={styles.txtSign}>Đăng kí</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={{ fontSize: 20 }}>Nhập tên cơ quan</Text>
                    <Text style={{ fontSize: 20 }}>Và sô điện thoại của bạn</Text>
                </View>
                <View style={styles.textInput}>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            placeholder='Tên cơ quan'
                            onChangeText={(text) => this.setState({ name: text })}
                            value={this.state.name}
                        />
                    </View>
                    <View style={styles.textInputContainer} >
                        <TextInput
                            style={styles.textInput}
                            placeholder='Số điện thoại'
                            onChangeText={(text) => this.setState({ phone_number: text })}
                            value={this.state.phone_number}
                        />
                    </View>
                    <View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={() => this.props.dispatch(signupRequest(this.state.name, this.state.phone_number))}
                        >
                            <Text>SIGN UP</Text>

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        justifyContent: 'center', alignItems: 'center', paddingTop: 40
                    }}>
                        <Text style={{ color: '#39e394', fontSize: 16 }}> Dùng thử miễn phí ngay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                            value={this.state.checked}
                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={{ marginTop: 5 }}> Tôi đã đọc và đồng ý với các điều khoản </Text>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        textHeader: {
            height: 80,
            backgroundColor: '#39e394',
            justifyContent: 'center',
            alignItems: 'center'
        },
        txtSign: {
            color: '#ffffff',
            fontSize: 20,
            marginTop: 10,

        },
        textInput: {
            justifyContent: 'flex-start',
            backgroundColor: '#f2fcf8',
            alignItems: 'center'
        },
        textContent: {
            height: 80,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'

        },
        textInputContainer: {
            width: 390,
            marginTop: 20,
            backgroundColor: '#ffffff',
            height: 60,
            paddingHorizontal: 10,
            borderRadius: 6,
        },
        textInput: {
            fontSize: 20,
        },
        loginBtn: {

            width: 390,
            height: 45,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#39e394',
            fontSize: 16,
        },
        checkBox: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 80
        }
    });

