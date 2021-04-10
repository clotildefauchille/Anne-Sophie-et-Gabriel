import { connect } from 'react-redux';
import Map from 'src/components/Map';
import { fetchPlaceInfos } from 'src/actions/infos';

const mapStateToProps = (state) => ({
  placeDetails: state.infos.placeDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaceInfos: () => {
    // console.log('hello fetchplace infos controller');
    dispatch(fetchPlaceInfos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);