import { connect } from 'react-redux';
import Agenda from 'src/components/Agenda';
import { fetchEventsInfos } from 'src/actions/events';

const mapStateToProps = (state) => {
  // console.log('state.events.infos, in container', state.events);
  return {
  events: state.events,
  permission: state.permissions.type,
}};

const mapDispatchToProps = (dispatch) => ({
  fetchEventsInfos: () => {
    dispatch(fetchEventsInfos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Agenda);
