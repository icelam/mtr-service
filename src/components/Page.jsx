import styled from 'styled-components';

import { mediaQueries } from '@styles/media';

const Page = styled.div`
  height: 100%;
  padding: 2rem 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${mediaQueries.mobile} {
    padding: 2rem 5%;
  }

  > * {
    text-align: center;
    width: 100%;
  }
`;

export default Page;
