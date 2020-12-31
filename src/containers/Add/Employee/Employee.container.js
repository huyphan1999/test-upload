import Employee from './Employee';
import { connect } from 'react-redux';
import { getData } from '../../../selectors';
import { getRequest, postRequest } from '../../../actions/app.actions';
import { navigate } from '../../../utils/navigate';
import * as  EMP from '../../../actionTypes/emp.actiontypes';

class EmpContainer extends Employee {
  
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(getRequest(EMP.EMP_REQUESTING))
    this.props.navigation.setParams({ onPressHeader: this.onPressHeader })
  };

  componentDidUpdate = () => {
    console.log(this.props.infor)
    if (this.props.infor)
    {
      navigate('AddEmployee', { data: this.props.infor, onPress: data => this.onSaveEmp(data), onDel: id => this.onDelEmp(id) })
    }
     
  };

  onPressHeader = () => {
    navigate('AddEmployee', { onPress: data => this.onAddEmp(data) })
  };

  onPressItem = data => {
    console.log('Pressed Item')
    console.log(data)
    this.props.dispatch(getRequest(EMP.EMP_INFOR))
  }


  onAddEmp = data => {
    this.props.dispatch(postRequest(EMP.EMP_ADD, data))
    console.log('Add SAVE CALLBACK');
    console.log(data);
    console.log(data)
  }


  onDelEmp = id => {
    this.props.dispatch(getRequest(EMP.EMP_DEL, id))
    console.log('DEL CALLBACK');
    console.log(id)
  }

  onSaveEmp = newdata => {
    this.props.dispatch(postRequest(EMP.EMP_EDIT, newdata))
    console.log('EDIT CALLBACK');
    console.log(newdata)
  }

  updateSearch = search => {
    this.setState({ search: search });
  };

  keyExtractor = (item, index) => index.toString();

}


const mapStateToProps = state => ({
  data: getData(state, 'emp', 'data'),
  isLoading: getData(state, 'emp', 'requesting'),
  infor: getData(state, 'emp', 'infor')
});

export default connect(
  mapStateToProps,
  null,
)(EmpContainer);
