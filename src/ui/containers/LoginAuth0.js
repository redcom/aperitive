// @flow
import React from 'react';
import Auth0Lock from 'auth0-lock';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router';

type Props = {
  clientId: string,
  domain: string,
}

type Context = {
  router: Object,
}

class LoginAuth0 extends React.Component {
  props: Props;
  context: Context;

  lock = new Auth0Lock(
    this.props.clientId,
    this.props.domain,
    {
      allowedConnections: ["Username-Password-Authentication","google-oauth2", "facebook"],
      rememberLastLogin: false,
      theme: {},
      languageDictionary: {"title":"Auth0"},
      language: "en",
    }
  );

  componentDidMount() {
    this.lock.on('authenticated', (authResult) => {
      window.localStorage.setItem('auth0IdAuthorization', authResult.idToken);
      this.context.router.replace(`/account`);
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
