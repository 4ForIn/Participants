import React from 'react';
import { Provider } from 'react-redux';
import Header from 'components/header/';
import Footer from 'components/footer';
import MainView from 'views/mainView';
import appStore from 'store/appStore';
import styles from 'App.module.scss';

function App() {
  return (
    <Provider store={appStore}>
      <div className={styles.app} data-testid="app-wrapping-div">
        <Header />
        <MainView />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
