import { config } from '@/styles/stitches.config';

const typeStyleNames = [
  'hero',
  'headline',
  'title1',
  'title2',
  'title3',
  'heading',
  'subhead',
  'body',
  'footnote',
  'caption',
  'micro',
];

const getType = config.utils.typeStyle;

export const getTypeStyles = () => {
  // Empty object
  let newStyle: any = {};

  typeStyleNames.map((name, i) => {
    newStyle[name] = getType(name);
  });

  return newStyle;
};
