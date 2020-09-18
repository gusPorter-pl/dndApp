export const kebabCaseConverter = (text: string): string => {
  const words = text.split('-');
  let normalCase: string = '';
  words.forEach((word) => {
    normalCase += capitalise(word) + ' ';
  });
  return normalCase.slice(0, normalCase.length - 1);
};

export const hyphenToSpace = (text: string): string => {
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === ' ') {
      text = text.slice(0, i) + '-' + text.slice(i + 1, text.length);
    }
  }
  return text;
};

export const capitalise = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};
