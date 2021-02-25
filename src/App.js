import React from 'react';
import { Provider } from 'react-redux';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import MainView from 'views/mainView/mainView';
import appStore from 'store/appStore';
import styles from 'App.module.scss';

function App() {
  return (
    <Provider store={appStore}>
      <div className={styles.app}>
        <Header />
        <MainView />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
