import { connect } from 'react-redux';
import Rsvp from 'src/components/Rsvp';
import { changeInputValuePresence, changeInputValueName, changeInputValueAccompanied, onSubmitRsvp, fetchLastAnswer } from 'src/actions/rsvp';

const mapStateToProps = (state) => ({
  firstname: state.rsvp.firstname,
  lastname: state.rsvp.lastname,
  firstnamePartner: state.rsvp.firstnamePartner,
  childrenNumber: state.rsvp.childrenNumber,
  message: state.rsvp.message,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
