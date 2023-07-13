export const sanitizeArticleTitle = (title: string) => {
  return title
    .replaceAll(/(?<=\w):(?=\w)/g, ': ')
    .replaceAll('_', ' ')
    .trim();
};
