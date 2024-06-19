import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const GithubButton = ({ src }: { src: string }) => {
  return (
    <ThemedImage
      className="w-[36px] h-[36px] duration-300 hover:scale-110 flex justify-end mr-4"
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
