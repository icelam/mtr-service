import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components';

const Wrapper = styled.span`
  margin: 0 0.3125rem;
  white-space: nowrap;
`;

const LineStatus = ({ url, statusColor, lineName }) => {
  let statusIcon;

  switch (statusColor) {
    case 'yellow':
      statusIcon = 'warning';
      break;
    case 'red':
      statusIcon = 'stop';
      break;
    case 'typhoon':
      statusIcon = 'hurricane';
      break;
    default:
      statusIcon = '';
  }

  const content = (
    <Fragment>
      {statusIcon && <Icon type={statusIcon} />} {lineName}
    </Fragment>
  );

  return (typeof url === 'string'
    ? <Wrapper as="a" href={url} target="_blank" rel="noopener noreferrer">{content}</Wrapper>
    : <Wrapper>{content}</Wrapper>
  );
};

LineStatus.propTypes = {
  url: PropTypes.string.isRequired,
  statusColor: PropTypes.oneOf(['green', 'yellow', 'red', 'typhoon', 'grey', 'pink']),
  lineName: PropTypes.string.isRequired
};

LineStatus.defaultProps = {
  statusColor: 'green'
};

export default LineStatus;
