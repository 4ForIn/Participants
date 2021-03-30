import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong data-testid="in-footer-strong">Zoom participants</strong> by{' '}
          <a href="https://www.facebook.com/4ForIn">ForIn</a>. This is a learning project.
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content is
          not for public use.
        </p>
      </div>
    </footer>
  );
}
