import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const SmurfProfile = (props) => {
  const { smurfs } = props;

  let { smurfId } = useParams();
  if (!smurfs || smurfs.length === 0) {
    return <div></div>;
  }

  const profileSmurf = smurfs.find((smurf) => {
    return smurfId === smurf.id;
  });

  return (
    <div data-testid='smurf' className='card'>
      <div className='card-body'>
        <h3 className='card-title'>{profileSmurf.name}</h3>
        <hr />
        <p className='card-text'>
          <b>Position:</b> {profileSmurf.position}
        </p>
        <p className='card-text'>
          <b>Nickname:</b> {profileSmurf.nickname}
        </p>
        <p className='card-text'>
          <b>Description:</b> {profileSmurf.description}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, null)(SmurfProfile);
