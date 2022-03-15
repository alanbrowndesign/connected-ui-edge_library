import { theme } from '@/styles/stitches.config';

export const getSpaces = () => {
  const obj = theme.space;

  // get array
  const spaceNames = Object.keys(obj);

  // empty object
  let newSpaces: any = {};

  spaceNames.map((name: any, i) => {
    newSpaces[name] = {};
    newSpaces[name]['& > * ~ *'] = { marginTop: `$${name}` };
  });

  return newSpaces;
};
