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
  fetchUserEmail: () => {
    dispatch(fetchUserEmail());
  },
  getPermission: () => {
    dispatch(getPermission());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);
