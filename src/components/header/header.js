import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from 'components/menu';
import HeaderInfo from './headerInfo';
import HeaderTitle from './headerTitle';

function Header({ headerDate, userName }) {
  return (
    <section className="hero is-small is-primary">
      <HeaderTitle />
      <div className="is-flex is-align-content-left ">
        <Menu />
        <HeaderInfo userName={userName} date={headerDate[1]} />
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  headerDate: state.appState.date,
  userName: state.user.name,
});
Header.propTypes = {
  headerDate: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
};
Header.defaultProps = {
  headerDate: ['we dont no 🙄'],
  userName: '😍',
};

export default connect(mapStateToProps)(Header);
