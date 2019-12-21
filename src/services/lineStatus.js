import axios from 'axios';

const lineStatusApi = 'https://tnews.mtr.com.hk/alert/ryg_line_status.xml';

const getLineStatus = () => axios.get(
  `${process.env.REACT_APP_PROXY_URL}${lineStatusApi}?t=${Date.now()}`, {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  }
);

export default { getLineStatus };
