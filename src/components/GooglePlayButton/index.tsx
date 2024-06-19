import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

const GooglePlayButton = ({ src }: { src: string }) => {
  return (
    <ThemedImage
      className="w-[36px] h-[36px] duration-300 hover:scale-110 flex justify-end mr-4 "
      alt={"github"}
      onClick={() => window.open(src, "_blank")}
      sources={{
        light: useBaseUrl("/svg/google_play.svg"),
        dark: useBaseUrl("/svg/google_play.svg"),
      }}
    />
  );
};

export default GooglePlayButton;
