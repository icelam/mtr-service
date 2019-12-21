import React from 'react';
import styled, { keyframes } from 'styled-components';

const dots = (props) => keyframes`
  0%, 20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: ${props.theme.textColor};
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    color: ${props.theme.textColor};
    text-shadow: 0.25em 0 0 ${props.theme.textColor}, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%, 100% {
    color: ${props.theme.textColor};
    text-shadow: 0.25em 0 0 ${props.theme.textColor}, 0.5em 0 0 ${props.theme.textColor};
  }
`;

const LoadingWrapper = styled.div`
  height: 100%;
  padding: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:after {
    content: ' ・';
    animation: ${dots} 1.5s steps(5, end) infinite;
  }
`;

const LoadingText = styled.div`
  font-size: 1em;
  color: ${(props) => props.theme.textColor};
`;

const Loading = () => (
  <LoadingWrapper>
    <LoadingText>
      載入中，請稍候
    </LoadingText>
  </LoadingWrapper>
);

export default Loading;
