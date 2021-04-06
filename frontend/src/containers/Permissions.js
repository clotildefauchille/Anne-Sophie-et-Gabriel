import { connect } from 'react-redux';
import Permissions from 'src/components/Permissions';
import { fetchPermission } from 'src/actions/permissions';

const mapStateToProps = (state) => ({
  permissions: state.permissions.type,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPermission: (token) => {
    dispatch(fetchPermission(token));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);
