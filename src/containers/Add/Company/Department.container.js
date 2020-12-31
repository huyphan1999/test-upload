import Object from './ObjectList';
import { connect } from 'react-redux';
import { getData } from '../../../selectors';
import { getRequest, postRequest } from '../../../actions/app.actions';
import { navigate } from '../../../utils/navigate';
import * as  COMPANY from '../../../actionTypes/company.actiontypes';

class DepartmentContainer extends Object {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.dispatch(getRequest(COMPANY.DEPT_REQUESTING))
        this.props.navigation.setParams({ onPressHeader: this.onPressHeader })
    };

    onPressHeader = () => {
        navigate('ObjectAdd', { onPress: data => this.onAddDepartment(data) })
    };

    onPressItem = data => {
        console.log('Pressed Item')
        console.log(data)
        navigate('ObjectDetails', { data, onPress: data => this.onSaveDepartment(data), onDel: id => this.onDelDepartment(id) })
    }


    onAddDepartment = data => {
        this.props.dispatch(postRequest(COMPANY.DEPT_ADD, data))
        console.log('Add SAVE CALLBACK');
        console.log(data);
        console.log(data)
    }

    
    onDelDepartment = id => {
        this.props.dispatch(getRequest(COMPANY.DEPT_DEL, id))
        console.log('DEL CALLBACK');
        console.log(id)
    }

    onSaveDepartment = newdata => {
        this.props.dispatch(postRequest(COMPANY.DEPT_EDIT, newdata))
        console.log('EDIT CALLBACK');
        console.log(newdata)
    }

}


const mapStateToProps = state => ({
    data: getData(state, 'dept', 'data'),
    isLoading: getData(state, 'dept', 'requesting')
});

export default connect(
    mapStateToProps,
    null,
)(DepartmentContainer);
