export const getLocalizePath = (pathname: string, language: string) => {
  const path = pathname.split("/");
  if (path[1] === "en") {
    path.splice(1, 1);
  } else if (path[1] !== "ko") {
    path.splice(1, 0, language);
  }

  return path.join("/");
};
