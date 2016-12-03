// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { Row, Button } from 'react-bootstrap';
import LoginAuth0 from './LoginAuth0';
import { auth0Config } from '../../config';

type Props = {
  loading: boolean,
  count: Object,
  updateCountQuery: Function,
  addCount: Function,
  client: Object,
  data: {
    user: Object,
  }
};

class Account extends React.Component {

  props: Props;

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  isLoggedIn() {
    return this.props.data.user;
  }

  logout = () => {
    window.localStorage.removeItem('auth0IdAuthorization');
    window.location.reload();
  }

  renderLoggedIn() {
    return (
       <div>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    );
  }

  renderLoggedOut() {
    return (
       <div>
        <LoginAuth0
          clientId={auth0Config.clientId}
          domain={auth0Config.domain}
        />
      </div>
    );
  }

  render() {
    const { loading } = this.props;
    if (loading) {
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

const USER_QUERY = gql`
query {
  count {
    amount
  }
}
`;

export default graphql(USER_QUERY, { options: {forceFetch: true }})(withRouter(Account));
