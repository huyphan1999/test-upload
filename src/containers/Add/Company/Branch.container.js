import ObjectList from './ObjectList';
import { connect } from 'react-redux';
import { getData } from '../../../selectors';
import { getRequest, postRequest } from '../../../actions/app.actions';
import { navigate } from '../../../utils/navigate';
import * as  COMPANY from '../../../actionTypes/company.actiontypes';

class BranchContainer extends ObjectList {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.dispatch(getRequest(COMPANY.BRANCH_REQUESTING))
        this.props.navigation.setParams({ onPressHeader: this.onPressHeader })
    };

    onPressHeader = () => {
        navigate('ObjectAdd', { onPress: data => this.onAddBranch(data) })
    };

    onPressItem = data => {
        console.log('Pressed Item')
        console.log(data)
        navigate('ObjectDetails', { data, onPress: data => this.onSaveBranch(data), onDel: id => this.onDelBranch(id) })
    }

    onAddBranch = data => {
        this.props.dispatch(postRequest(COMPANY.BRANCH_ADD, data))
        console.log('Add SAVE CALLBACK');
        console.log(data);
        console.log(data)
    }

    
    onDelBranch = id => {
        this.props.dispatch(getRequest(COMPANY.BRANCH_DEL, id))
        console.log('DEL CALLBACK');
        console.log(id)
    }

    onSaveBranch = newdata => {
        this.props.dispatch(postRequest(COMPANY.BRANCH_EDIT, newdata))
        console.log('EDIT CALLBACK');
        console.log(newdata)
    }

}


const mapStateToProps = state => ({
    data: getData(state, 'branch', 'data'),
    isLoading: getData(state, 'branch', 'requesting')
});

export default connect(
    mapStateToProps,
    null,
)(BranchContainer);
