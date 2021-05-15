import { connect } from 'react-redux';
import Rsvp from 'src/components/Rsvp';
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
  firstnamePartner: state.rsvp.firstnamePartner,
  childrenNumber: state.rsvp.childrenNumber,
  message: state.rsvp.message,
  allergy: state.rsvp.allergy,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
