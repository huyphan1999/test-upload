/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { getParams, getParamsHeader } from '../../../utils/index';

class TextInputCom extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          borderBottomWidth: 0.5,
          alignItems: 'center',
        }}>
        <Text>{this.props.name}</Text>
        <TextInput
          style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
          onChangeText={nameText => this.setState({ nameText })}
          value={this.props.nameText}
          onTouchStart={() => Alert.alert('Danh sách !!!')}
        />
      </View>
    );
  }
}

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Note: '',
      Allow: 'Nhân viên',
      Phone: '',
      Region: 'HCM',
      Branch: 'ht',
      Department: 'Ban Giám Đốc',
      Position: 'CHP',
      Address: '',
      date: new Date(),
      mode: 'date',
      show: false,


    };
  }

  componentDidMount = () => {
    this.props.navigation.setParams({ onPressHeader: this.onPressHeader });
  };

  onPressHeader = () => {
    getParams(this.props).onPress(this.state)
  };

  on
  static navigationOptions = ({ navigation }) => ({

    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 15 }}
        onPress={() =>
          getParamsHeader(navigation).onPressHeader()
        }
      >
        <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>{getParamsHeader(navigation).onDel?'Lưu':'Thêm'}</Text>
      </TouchableOpacity >
    ),
    headerTitle: () => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18, paddingLeft: 40 }}>{getParamsHeader(navigation).onDel?'Thông tin':'Thêm nhân viên'}</Text>
      </View>

    ),
  });

  setDate = (event, date) => {
    date = date || this.state.date;
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };
  render() {
    var params = getParams(this.props)
    const { show, date, mode } = this.state;
    const dates = moment(this.state.date).format('DD-MM-YYYY');
    return (
      <View style={{ flex: 1, backgroundColor: '#e3e7eb' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 16,
            borderBottomWidth: 0.5,
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ paddingRight: 10 }}>
              <Icon name="rectangle" size={5} color="red" />
            </View>
            <Text>Họ và tên:</Text>
          </View>

          <TextInput
            style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
            placeholder="Họ và tên"
            onChangeText={Name => this.setState({ Name })}
            value={this.state.Name}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 16,
            borderBottomWidth: 0.5,
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ paddingRight: 10 }}>
              <Icon name="rectangle" size={5} color="#11CE43" />
            </View>

            <Text>Quyền truy cập:</Text>
          </View>

          <TextInput
            style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
            onChangeText={Allow => this.setState({ Allow })}
            value={this.state.Allow}
            onTouchStart={() => Alert.alert('Danh sách quyền truy cập!!!')}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 16,
            borderBottomWidth: 0.5,
            alignItems: 'center',
          }}>
          <Text>Số điện thoại:</Text>

          <TextInput
            style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
            placeholder="Số điện thoại"
            onChangeText={Phone => this.setState({ Phone })}
            value={this.state.Phone}
          />
        </View>

        <TextInputCom name="Vùng" nameText={this.state.Region} />
        <TextInputCom name="Chi nhánh" nameText={this.state.Branch} />
        <TextInputCom name="Phòng ban" nameText={this.state.Department} />
        <TextInputCom name="Chức vụ" nameText={this.state.Position} />

        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 16,
            borderBottomWidth: 0.5,
            alignItems: 'center',
          }}>
          <Text>Ngày sinh:</Text>
          <View>
            <TouchableOpacity onPress={this.datepicker}>
              <Text>{dates}</Text>
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={this.setDate}
            />
          )}
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 16,
            borderBottomWidth: 0.5,
            alignItems: 'center',
          }}>
          <Text>Địa chỉ:</Text>
          <TextInput
            style={{ height: 40, fontSize: 14, paddingLeft: 30 }}
            placeholder="Địa chỉ"
            onChangeText={Address => this.setState({ Address })}
            value={this.state.Address}
          />
        </View>

        {params.onDel &&
          <View style={{ flex: 1, backgroundColor: '#e6e6e6', paddingTop: 40 }}>
            <TouchableOpacity
              onPress={() => Alert.alert(
                'Thông báo',
                'Bạn chắc chắn muốn xóa ?',
                [
                  { text: 'Hủy', onPress: () => console.log('Cancel Pressed!') },
                  { text: 'Đồng ý', onPress: () => params.onDel(params.data.id) },
                ],
                { cancelable: false }
              )}>

              <Text
                style={{ color: '#db3b3b', borderBottomWidth: 0.4, borderTopWidth: 0.4, backgroundColor: '#fcfcfc', padding: 20 }}
              >
                Xóa
         </Text>
            </TouchableOpacity>
          </View>
        }

      </View>
    );
  }
}
