import convert from 'xml-js';

const nativeType = (value) => {
  const nValue = Number(value);

  if (!Number.isNaN(nValue)) {
    return nValue;
  }

  const bValue = value.toLowerCase();

  if (bValue === 'true') {
    return true;
  }

  if (bValue === 'false') {
    return false;
  }

  return value;
};

const removeJsonTextAttribute = (value, parentElement) => {
  try {
    const keyNo = Object.keys(parentElement._parent).length;
    const keyName = Object.keys(parentElement._parent)[keyNo - 1];
    parentElement._parent[keyName] = nativeType(value); // eslint-disable-line no-param-reassign
  } catch (e) {
    console.log('Failed to remove __text attribute when converting from XML');
  }
};

const xmlConvertOptions = {
  compact: true,
  trim: true,
  ignoreDeclaration: true,
  ignoreInstruction: true,
  ignoreAttributes: true,
  ignoreComment: true,
  ignoreCdata: true,
  ignoreDoctype: true,
  textFn: removeJsonTextAttribute
};

const xml2js = (data) => convert.xml2js(data, xmlConvertOptions);

export default { xml2js };
