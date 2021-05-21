import { connect } from 'react-redux';
import Rsvp from 'src/components/Rsvp';
import { showAnswerModal } from 'src/actions/confirmationModal';
import {
  changeInputValuePresence,
  changeInputValueName,
  changeInputValueAccompanied,
  onSubmitRsvp,
  fetchLastAnswer,
  getUserInfos,
} from 'src/actions/rsvp';

const mapStateToProps = (state) => ({
  presence: state.rsvp.presence,
  accompanied: state.rsvp.accompanied,
  firstnamePartner: state.rsvp.firstnamePartner,
  childrenNumber: state.rsvp.childrenNumber,
  message: state.rsvp.message,
  allergy: state.rsvp.allergy,
  metadata: state.permissions.metadata,
});

const mapDispatchToProps = (dispatch) => ({
  onChangePresence: (value) => {
    dispatch(changeInputValuePresence(value));
  },
  onChangeName: (value, name) => {
    dispatch(changeInputValueName(value, name));
  },
  onChangeAccompanied: (value) => {
    dispatch(changeInputValueAccompanied(value));
  },
  onSubmitRsvp: () => {
    dispatch(onSubmitRsvp());
  },
  fetchLastAnswer: () => {
    // console.log('fetchLastAnswer')
    dispatch(fetchLastAnswer());
  },
  getUserInfos: () => {
    dispatch(getUserInfos());
  },
  showAnswerModal: () => {
    dispatch(showAnswerModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
