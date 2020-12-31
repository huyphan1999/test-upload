/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {RadioGroup} from 'react-native-btr';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {getParams, getParamsHeader} from '../../../utils';
/*class ButtonSave extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ paddingRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Save</Text>
            </TouchableOpacity >
        );
    }
}
*/
class EmployeeInfo extends Component {
  constructor(props) {
    super(props);
    console.log('EmpInfor View');
    console.log(this.props);
    this.state = {
      radioButtons: [
        {
          label: 'Nam',
          value: 'Nam',
          checked: true,
          color: 'black',
          disabled: false,
          flexDirection: 'row',
          size: 6,
        },

        {
          label: 'Nữ',
          value: 'Nữ',
          checked: false,
          color: 'black',
          disabled: false,
          flexDirection: 'row',
          size: 6,
        },
      ],
      Address: 'Hoàng Diệu 2, Thủ Đức',
      Phone: '+84112233444',
      Department: 'Văn phòng',
      Position: 'Nhân sự',
      Branch: 'VP Công ty',
      Region: 'HCM',
      Salary: '1000',
      date: new Date(),

      mode: 'date',
      show: false,
      data: getParams(this.props).data,
    };
  }

  handleTextInput = (text, field) => {
    var newdata = {...this.state.data};
    newdata[field] = text;
    this.setState({data: newdata});
  };

  componentDidMount = () => {
    this.props.navigation.setParams({onPressHeader:this.onPressHeader});
  };

  onPressHeader = () => {
    console.log('onPressed Header')
    getParams(this.props).onPress(this.state.data)
  };

  
  static navigationOptions = ({navigation}) => {
    const params = getParamsHeader(navigation);

    console.log(`Params: ${params}`);
    return {
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 15}}
          onPress={() => params.onPressHeader()}>
          <Text style={{color: 'white', fontSize: 18}}>Save</Text>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18, paddingLeft: 40}}>
            Quản lý tài khoản
          </Text>
        </View>
      ),
    };
  };

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
    const {show, date, mode} = this.state;
    const dates = moment(this.state.date).format('DD-MM-YYYY');
    let selectedItem = this.state.radioButtons.find(e => e.checked == true);
    selectedItem = selectedItem
      ? selectedItem.value
      : this.state.radioButtons[0].value;

    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e3e7eb',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            <Avatar
              size={150}
              rounded
              activeOpacity={0.7}
              containerStyle={{flex: 2, marginLeft: 20}}
              source={require('../../image/admin.png')}
            />
          </View>
          <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text
              style={{
                fontSize: 18,
                backgroundColor: '#e3e7eb',
                padding: 20,
                borderBottomWidth: 0.5,
              }}>
              THÔNG TIN CÁ NHÂN
            </Text>
            <View style={styles.txtContent}>
              <Text>Mã NV :</Text>
              <TextInput
                style={{
                  height: 40,
                  fontSize: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                placeholder="Mã NV"
                onChangeText={id => this.handleTextInput(id, 'id')}
                value={this.state.data.id}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 10,
                fontSize: 16,
                borderBottomWidth: 0.5,
                alignItems: 'center',
              }}>
              <Text>Họ và tên:</Text>

              <TextInput
                style={{
                  height: 40,
                  fontSize: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                placeholder="Họ và Tên!"
                onChangeText={FullName =>
                  this.handleTextInput(FullName, 'full_name')
                }
                value={this.state.data.full_name}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
                fontSize: 16,
                borderBottomWidth: 0.5,
                alignItems: 'center',
              }}>
              <Text style={{paddingRight: 200}}>Giới tính:</Text>
              <RadioGroup
                color="#0277BD"
                labelStyle={{fontSize: 14}}
                radioButtons={this.state.radioButtons}
                onPress={radioButtons => this.setState({radioButtons})}
                style={{flexDirection: 'row', height: 25}}
              />
            </View>
            <Text
              style={{
                justifyContent: 'center',
                padding: 10,
                fontSize: 16,
                borderBottomWidth: 0.5,
                alignItems: 'center',
              }}>
              Selected Item: {selectedItem}
            </Text>

            <View style={styles.txtContent}>
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
            <View style={styles.txtContent}>
              <Text>Địa chỉ:</Text>
              <Text style={styles.txtInfo}>{this.state.Address}</Text>
            </View>

            <View style={styles.txtContent}>
              <Text>Số điện thoại :</Text>
              <Text style={styles.txtInfo}>{this.state.Phone}</Text>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text
              style={{
                fontSize: 18,
                backgroundColor: '#e3e7eb',
                padding: 20,
                paddingTop: 40,
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
              }}>
              CÔNG TY
            </Text>
            <View style={styles.txtContent}>
              <Text>Phòng ban :</Text>
              <Text style={styles.txtInfo}>{this.state.Department}</Text>
            </View>
            <View style={styles.txtContent}>
              <Text>Chức vụ :</Text>
              <Text style={styles.txtInfo}>{this.state.Position}</Text>
            </View>
            <View style={styles.txtContent}>
              <Text>Chi nhánh :</Text>
              <Text style={styles.txtInfo}>{this.state.Branch}</Text>
            </View>
            <View style={styles.txtContent}>
              <Text>Vùng :</Text>
              <Text style={styles.txtInfo}>{this.state.Region}</Text>
            </View>
            <View style={styles.txtContent}>
              <Text>Lương/Giờ công :</Text>
              <Text style={styles.txtInfo}>{this.state.Salary}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  txtContent: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  txtInfo: {
    color: '#9c9c9c',
    fontSize: 16,
    textAlign: 'auto',
    borderStyle: 'solid',
  },
});

export default EmployeeInfo;
