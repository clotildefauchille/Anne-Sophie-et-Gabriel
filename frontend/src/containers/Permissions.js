import { connect } from 'react-redux';
import Permissions from 'src/components/Permissions';
import { fetchUserId, getPermission } from 'src/actions/permissions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserId: (token) => {
    dispatch(fetchUserId(token));
  },
  getPermission: () => {
    dispatch(getPermission());
  },

});

export default connect(null, mapDispatchToProps)(Permissions);
