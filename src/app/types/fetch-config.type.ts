export type FetchConfig = {
  url: string;
  numResults: number;
  processData: (responseData: any, numResults: number) => any;
  getErrorMessage: () => string;
};
