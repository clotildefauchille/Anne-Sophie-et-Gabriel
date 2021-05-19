import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { showLoginModal } from 'src/actions/logoutModal';
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  showLoginModal: () => {
    dispatch(showLoginModal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
