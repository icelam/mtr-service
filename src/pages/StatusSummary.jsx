import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import lineData from '@data/line.json';
import {
  Page, Remarks, ServiceStatus, LineStatus, Icon
} from '@components';
import routes from '@routes';

const ErrorLines = styled.div`
  margin: 0.25rem 0;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  color: ${(props) => props.theme.remarksColor};

  a {
    color: ${(props) => props.theme.remarksColor};

    &:hover {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Home = ({
  fetchStatus,
  lineCount,
  abnormalLines,
  serviceNormal,
  serviceEnded,
  actions
}) => {
  useEffect(() => {
    actions.fetchLineStatus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Refresh every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      actions.fetchLineStatus();
    }, 180000);

    return () => {
      clearInterval(interval);
      actions.clearLineStatusData();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const serviceAbnormal = (
    <Fragment>
      <ServiceStatus>以下線路的列車服務受阻／延誤：</ServiceStatus>
      <ErrorLines>
        {
          abnormalLines.map((line) => {
            const { line_code: lineCode, url_tc: urlTC, status } = line;
            return (
              <LineStatus
                url={urlTC}
                statusColor={status}
                lineName={
                  lineData[lineCode]
                    ? lineData[lineCode].nameTC
                    : `未知線路 - ${lineCode}`
                }
                key={lineCode}
              />
            );
          })
        }
      </ErrorLines>
      <Remarks>（點擊線路名稱查看詳情）</Remarks>
    </Fragment>
  );

  return (
    <Fragment>
      <Page>
        <h1>港鐵列車服務正常嗎？</h1>
        <Fragment>
          {
            fetchStatus === 'success' && lineCount > 0
              ? serviceNormal
                ? serviceEnded
                  ? <ServiceStatus>港鐵全線（包括輕鐵）服務時間已過。</ServiceStatus>
                  : <ServiceStatus><Icon type="tick" mainColor="#ffffff" /> 港鐵全線（包括輕鐵）列車服務正常。</ServiceStatus>
                : serviceAbnormal
              : fetchStatus === undefined
                ? <ServiceStatus>載入中⋯⋯</ServiceStatus>
                : <ServiceStatus>無法獲取服務收狀態，請刷新頁面或稍後再試。</ServiceStatus>
          }
        </Fragment>
      </Page>
      <Footer>
        本頁每 3 分鐘自動刷新・<Link to={routes.disclaimer}>免責聲明</Link>
      </Footer>
    </Fragment>
  );
};

Home.propTypes = {
  fetchStatus: PropTypes.oneOf(['success', 'failed']),
  lineCount: PropTypes.number.isRequired,
  abnormalLines: PropTypes.arrayOf(PropTypes.shape({
    line_code: PropTypes.string.isRequired,
    url_tc: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    url_en: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    status: PropTypes.string.isRequired
  })).isRequired,
  serviceNormal: PropTypes.bool.isRequired,
  serviceEnded: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

Home.defaultProps = {
  fetchStatus: undefined
};

export default Home;
