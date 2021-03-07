import React from 'react';
import AuthenticationView from 'views/authView/';
import AdminPanel from 'views/adminPanel';
import UserPanel from 'views/userPanel';

export const mainViewSwitchFn = (isSignedIn) => ({
  authView: <AuthenticationView />,
  main: (
    <>
      <UserPanel />
      {isSignedIn && <AdminPanel />}
    </>
  ),
});
/**
 * function instead of conditional rendering. The function takes a boolean argument and
 * returns object with two properties, witch corresponds to the state in witch the user
 * is logged in or out.
 */
