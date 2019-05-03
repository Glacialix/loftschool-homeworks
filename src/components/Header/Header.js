import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    const { HeaderChild } = this.props;

    return (
      <AuthConsumer>
        {({ isAuthorized, logout, email }) => {
          return (
            <div className="header">
              {HeaderChild}
              <div className="header__content">
                {!isAuthorized ? (
                  ''
                ) : (
                  <div className="header-menu">
                    <p className="header-menu__email header-email t-header-email">
                      {email}
                    </p>
                    <Button
                      className="header-menu__button t-logout"
                      onClick={logout}
                    >
                      Выйти
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Header;
