import { connect } from 'react-redux';
import ConfirmationModal from 'src/components/ConfirmationModal';
import { closeModal } from 'src/actions/confirmationModal';

const mapStateToProps = (state) => ({
  displayed: state.confirmationModal.displayed,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);
