
import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getParams } from '../utils';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'VP Công Ty',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Chi nhánh Phú Nhuận',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chi nhánh Cần Thơ',
    },
];


class MultipleSelect extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.navigation.state.params)
        this.state = {
            options: getParams(this.props).options,
            selectedOptions: []
        }
    }
    selectOption = (selectedOption) => {

        let selectedOptions = this.state.selectedOptions;
        const index = selectedOptions.indexOf(selectedOption);

        if (index === -1) {
            selectedOptions.push(selectedOption);
        } else {
            selectedOptions.splice(index, 1);
        }
        this.setState({ selectedOptions: [...selectedOptions] })
    }

    isSelected = (option) => {
        return this.state.selectedOptions.indexOf(option) !== -1;
    }

    renderIndicator = (option) => {
        if (this.isSelected(option)) {

            return (
                <Icon
                    name='check'
                    size={24}
                    color='#00e600'
                />
            );
        }
        else return null
    }

    renderText = (option) => {
        return (<Text style={styles.option}>{option}</Text>);
    }

    renderRow = ({ item: option }) => {
        return (
            <View>
                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', }}
                    onPress={() => this.selectOption(option.title)}
                >
                    <View >{this.renderText(option.title)}</View>
                    <View >{this.renderIndicator(option.title)}</View>
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    marginTop: 4,
                    marginBottom: 4,
                    backgroundColor: 'black',
                }}></View>
            </View>
        );
    }


    render() {
        console.log(this.state.selectedOptions)
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.options}
                    renderItem={(item) => this.renderRow(item)}
                    keyExtractor={item => item.id}

                />
                <TouchableOpacity style={{ flex: 1 }} onPress={() => getParams(this.props).onSelection(this.state.selectedOptions)}>
                    <Text style={styles.option}>Chọn</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    option: {
        fontSize: 22,
        flex: 1,
    },
});


export default MultipleSelect