export const getTokens = (
  tokenObject: object,
  cssProperty: string = 'color'
) => {
  // Get the colour names array
  const tokenNames = Object.keys(tokenObject);

  // Empty object
  let newTokens: any = {};

  // Loop over the array to build new CSS
  tokenNames.map((name, i) => {
    newTokens[name] = {};
    newTokens[name][cssProperty] = `$${name}`;
  });

  return newTokens;
};
