import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

function HomepageHeader() {
  return (
    <header className={`p-4 lg:p-8 text-center relative overflow-hidden`}>
      <div className="container flex flex-col md:flex-row items-center gap-4">
        <div className="profile-image max-w-[200px] max-h-[200px]">
          <img
            src="/img/blog-profile.jpg"
            alt="my-profile"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-start pt-[20px] max-w-[100%] md:max-w-[80%]">
          <Heading as="h3" className="break-words">
            안녕하세요. 프론트엔드 개발자 이정민입니다.
          </Heading>
          <Heading as="h5" className="text-start leading-6 break-words">
            저는 <span className="highlighted break-words	">블리딩 엣지</span>에
            서서 새로운 기술을 배우고 이를 실제 프로젝트에 적용하는 것을
            좋아하는 개발자입니다.
            <span className="highlighted break-words">대외 활동</span>
            이나{" "}
            <span className="highlighted break-words">사이드 프로젝트</span>를
            통해 새로운 지식을 빠르게 습득하고 반복적인 작업을 자동화하는 데
            열정을 가지고 있습니다. 또한,{" "}
            <span className="highlighted break-words">문서화</span>를 통해
            지식을 체계적으로 정리하고 공유하는 것을 좋아하며, 이를 통해 팀의
            협업을 원활하게 하고 프로젝트의 품질을 향상하는 데 기여하고
            있습니다. 궁극적으로, 지속적으로 학습하고 배운 바를 적용함으로써
            개발자 경험을 쌓고
            <span className="highlighted break-words">
              사회에 기여하는 개발자
            </span>
            로 성장하고 싶습니다.
          </Heading>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Junior front-end developer"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
