// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { Row, Button } from 'react-bootstrap';
import { isNil } from 'ramda';
import LoginAuth0 from './LoginAuth0';
import { auth0Config } from '../../config';

type Props = {
  loading: boolean,
};

class Account extends React.Component {

  props: Props;

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  isLoggedIn() {
    return (__CLIENT__ && !isNil(global.localStorage.getItem('account.auth0IdAuthorization')));
  }

  logout = () => {
    if (__CLIENT__) {
      global.localStorage.removeItem('account.auth0IdAuthorization');
      global.location.reload();
    }
  }

  renderLoggedIn() {
    return (
       <div>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    );
  }

  renderLoggedOut() {
    if (!__CLIENT__) return null;
    return (
       <Row>
       <LoginAuth0
         clientId={auth0Config.clientId}
         domain={auth0Config.domain}
       />
      </Row>
    );
  }

  render() {
    if (this.props.loading) {
      return (
        <Row className="text-center">
          Loading...
        </Row>
      );
    }
    if (this.isLoggedIn()) {
      return this.renderLoggedIn();
    } else {
      return this.renderLoggedOut();
    }
  }
}

export default withRouter(Account);
