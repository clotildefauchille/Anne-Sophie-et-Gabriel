import { connect } from 'react-redux';
import Agenda from 'src/components/Agenda';

const mapStateToProps = (state) => ({
  permission: state.permissions.type,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
