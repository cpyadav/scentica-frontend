const hasNullOrUndefinedOrEmpty = (array) => array.some(value => {
    return value === undefined || value === null || value === '';
  });

const email = value => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
} 

const url = (value) => value && /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(value)

const isNotNullOrUndefined = (value) => value !== null && value !== undefined;

const isNotEmptyArray = (array) => Array.isArray(array) && array.length > 0;


export {hasNullOrUndefinedOrEmpty, email, url, isNotNullOrUndefined, isNotEmptyArray}