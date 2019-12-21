import React, { Fragment } from 'react';
import styled from 'styled-components';
import routes from '@routes';
import { Page, ButtonLink } from '@components';

const Paragraph = styled.p`
  font-size: 0.75rem;
  text-align: left;

  & + & {
    margin-top: 0;
  }
`;

const Disclaimer = () => (
  <Page>
    <Fragment>
      <h1>免責聲明</h1>
      <Paragraph>
        閣下明確同意使用本網站（港鐵車務狀況）的風險是由閣下個人承擔。資料僅供參考，本網站並未為所載資料的完整性、準確性及時間性作出保證。
      </Paragraph>
      <Paragraph>
        本網站對於閣下使用任何相關資料而作出的任何行程決定、延誤及其它損失均不承擔任何責任。請在使用所有資料前作出核實。
      </Paragraph>
      <div>
        <ButtonLink to={routes.home}>查詢港鐵車務狀況</ButtonLink>
      </div>
    </Fragment>
  </Page>
);

export default Disclaimer;
