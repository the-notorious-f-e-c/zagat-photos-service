import React from 'react';
import PropTypes from 'prop-types';

const ShowGridModalBox = ({ images, openModal }) => (
  <div className="show-grid-modal-box" onClick={() => openModal('grid')} role="presentation">
    {`${images.length} photos`}
    <svg className="btn-show-grid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  </div>
);

ShowGridModalBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  openModal: PropTypes.func,
};

ShowGridModalBox.defaultProps = {
  images: [''],
  openModal: () => { },
};

export default ShowGridModalBox;
