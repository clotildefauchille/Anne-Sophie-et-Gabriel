import { connect } from 'react-redux';
import Permissions from 'src/components/Permissions';
import { fetchPermission, getPermission } from 'src/actions/permissions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchPermission: (token) => {
    dispatch(fetchPermission(token));
  },
  getPermission: () => {
    dispatch(getPermission());
  },

});

export default connect(null, mapDispatchToProps)(Permissions);
