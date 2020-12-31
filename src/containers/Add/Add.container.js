
import Add from './Add';
import {connect} from 'react-redux';
import {getUserData} from '../../selectors/index';

class AddContainer extends Add {
  constructor(props) {
    super(props);
    this.state = {
      iconName1: '',
      iconName2: '',
      txtName: '',
    };
  }
}

const mapStateToProps = state => ({
  user: getUserData(state),
});

export default connect(
  mapStateToProps,
  null,
)(AddContainer);
