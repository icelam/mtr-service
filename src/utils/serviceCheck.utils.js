const isServiceNormal = (data) => {
  const greenAndGreyLines = data.filter((line) => line.status === 'green' || line.status === 'grey');
  return greenAndGreyLines.length === data.length;
};

const isServiceEnded = (data) => {
  // TODO: Light Rail will return `status: "green"` when service ended
  // const excludeLightRailData = data.filter((line) => line.line_code !== 'LR');

  const greyLines = data.filter((line) => line.status === 'grey');
  return greyLines.length === data.length;
};

const getAbnormalLines = (data) => {
  const abnormalLines = data.filter((line) => !(line.status === 'green' || line.status === 'grey'));
  return abnormalLines;
};

export default { isServiceNormal, isServiceEnded, getAbnormalLines };
