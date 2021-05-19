import { connect } from 'react-redux';
import LogoutModal from 'src/components/LogoutModal';
import { closeModal } from 'src/actions/logoutModal';

const mapStateToProps = (state) => ({
  displayed: state.logoutModal.displayed,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);
