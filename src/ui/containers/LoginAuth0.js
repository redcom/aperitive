// @flow
import React from 'react';
import Auth0Lock from 'auth0-lock';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

type Props = {
  clientId: string,
  domain: string,
};
type AuthResult = {
  idToken: string,
};

class LoginAuth0 extends React.Component {
  props: Props;

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  lock = new Auth0Lock(
    this.props.clientId,
    this.props.domain,
    {
      allowedConnections: [
        "Username-Password-Authentication",
        "google-oauth2",
        "facebook",
      ],
      rememberLastLogin: false,
      theme: {},
      languageDictionary: {"title":"Aperitive"},
      language: "en",
    }
  );

  fetchAndStoreProfile({idToken}: AuthResult) {
    this.lock.getProfile(idToken, (error, profile) => {
      if (error) {
        return;
      }
      window.localStorage.setItem('account.auth0IdAuthorization', idToken);
      window.localStorage.setItem('account.profile', JSON.stringify(profile));
      this.context.router.replace(`/profile`);
    });
  }

  componentDidMount() {
    this.lock.on('authenticated', (authResult) => {
      this.fetchAndStoreProfile(authResult);
    });
  }

  showLogin = () => {
    this.lock.show();
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.showLogin}
          className=''
        >
          Log in with Auth0
        </Button>
      </div>
    );
  }
}

export default withRouter(LoginAuth0);
