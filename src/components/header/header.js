/* eslint-disable react/self-closing-comp */
import React from 'react';
import Menu from 'components/menu/menu';
import HeaderInfo from './headerInfo';
import HeaderTitle from './headerTitle';

export default function Header() {
  return (
    <section className="hero is-small is-primary">
      <HeaderTitle />
      <div className="is-flex is-align-content-left ">
        <Menu />
        <HeaderInfo userName="Jarek" date="sunday 21 february" />
      </div>
    </section>
  );
}
