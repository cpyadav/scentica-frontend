export const hasNullOrUndefinedOrEmpty = (array) => array.some(value => {
    return value === undefined || value === null || value === '';
  });