/* eslint-disable react/self-closing-comp */
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
Header.propTypes = {
  headerDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string,
};
const mapStateToProps = (state) => ({
  headerDate: state.appState.date,
});
Header.defaultProps = {
  userName: 'You are not signed in',
};

export default connect(mapStateToProps)(Header);
