export const getLocalizePath = (url: string, language: string) => {
  const isProd = process.env.NODE_ENV === "production";

  const protocol = isProd ? "https://" : "http://";
  const hostName = isProd ? "froggy1014.github.io" : "localhost:4321";
  const lang = language === "ko" ? "" : "en";

  let pathName = url.split(hostName)[1];

  if (pathName.startsWith("/en/")) {
    pathName = pathName.split("/en/")[1];
  }

  return `${protocol}${hostName}/${lang}${pathName}`;
};
