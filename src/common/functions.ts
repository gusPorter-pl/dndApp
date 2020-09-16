export const kebabCaseConverter = (text: string): string => {
  const words = text.split('-');
  let normalCase: string = '';
  words.forEach((word) => {
    normalCase += capitalise(word) + ' ';
  });
  return normalCase.slice(0, normalCase.length - 1);
};

export const capitalise = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};
