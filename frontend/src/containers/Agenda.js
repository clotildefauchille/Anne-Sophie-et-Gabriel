import { connect } from 'react-redux';
import Agenda from 'src/components/Agenda';

const mapStateToProps = (state) => ({
  permissions: state.permissions.type,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
