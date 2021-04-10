import { connect } from 'react-redux';
import Rsvp from 'src/components/Rsvp';
import { changeInputValuePresence, changeInputValueName, changeInputValueAccompanied, onSubmitRsvp } from 'src/actions/rsvp';

const mapStateToProps = (state) => ({
  firstname: state.rsvp.firstname,
  lastname: state.rsvp.lastname,
  firstnamePartner: state.rsvp.firstnamePartner,
  childrenNumber: state.rsvp.childrenNumber,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
