import { connect } from 'react-redux';
import Permissions from 'src/components/Permissions';
import { fetchUserId, getPermission, fetchUserEmail } from 'src/actions/permissions';

const mapStateToProps = (state) => ({
  userId: state.permissions.userId,
  email: state.permissions.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserId: (token) => {
    dispatch(fetchUserId(token));
  },
  fetchUserEmail: (token) => {
    dispatch(fetchUserEmail(token));
  },
  getPermission: (token) => {
    dispatch(getPermission(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);
