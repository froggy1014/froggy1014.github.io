import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const GithubButton = ({ src }: { src: string }) => {
  return (
    <ThemedImage
      className="w-[48px] h-[48px] duration-300 hover:scale-110 flex justify-end"
      alt={"github"}
      onClick={() => window.open(src, "_blank")}
      sources={{
        light: useBaseUrl("/svg/github_light.svg"),
        dark: useBaseUrl("/svg/github_dark.svg"),
      }}
    />
  );
};

export default GithubButton;
