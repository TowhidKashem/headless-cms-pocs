export const objectToArray = (obj: {
  [key: string]: any;
}): Array<{
  [key: string]: any;
}> => Object.keys(obj).map((key) => obj[key]);
