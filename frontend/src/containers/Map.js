import { connect } from 'react-redux';
import Map from 'src/components/Map';
import { fetchPlaceInfos } from 'src/actions/infos';

const mapStateToProps = (state) => ({
  placeDetails: state.infos.placeDetails,
  permissions: state.permissions.type,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceInfos: (token) => {
    // console.log('hello fetchplace infos controller');
    dispatch(fetchPlaceInfos(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);