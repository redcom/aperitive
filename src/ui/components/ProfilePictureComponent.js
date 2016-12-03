// @flow
import React from 'react';

type Prop = {
  picture: string,
  alt?: string,
};

const ProfilePicture = ({picture, alt='default alt'}:Prop) => (
  <img
    className='ProfilePicture'
    src={picture}
    alt={alt}
  />
);

export default ProfilePicture;
