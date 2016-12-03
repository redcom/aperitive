// @flow
import React from 'react';
import { withRouter } from 'react-router';
import {Row} from 'react-bootstrap';
import ProfilePicture from '../components/ProfilePictureComponent';

type Props = {
  loading: boolean,
};

class Profile extends React.Component {

  props: Props;

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    if (!__CLIENT__) return null;
    const profile = JSON.parse(window.localStorage.getItem('account.profile'));

    return (
      <div>
        <Row>Nickname: {profile.nickname} </Row>
        <Row>Name: {profile.name} </Row>
        <Row>Created At: {profile.created_at}</Row>
        <Row>Picture: <ProfilePicture picture={profile.picture} /> </Row>
      </div>
    );
  }
}

export default withRouter(Profile);
