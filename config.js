const environment = process.env.VERCEL_ENV;

export const server = () => {
  if (environment == "production") {
    return "https://wheretomug.ml";
  } else if (environment == "preview") {
    return "https://where-to-mug-git-refactor-extractfiltertoapi-okkar.vercel.app";
  }
  return "http://localhost:3000";
};
