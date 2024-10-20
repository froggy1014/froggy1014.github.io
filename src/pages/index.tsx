import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

function HomepageHeader() {
  return (
    <header
      className={`p-4 lg:p-8 text-center relative overflow-hidden h-screen flex justify-center items-center`}
    >
      <div className="container flex flex-col md:flex-row items-center gap-4">
        <img
          src="/img/evan.png"
          alt="my-profile"
          className="rounded-lg"
          width={300}
          height={400}
        />

        <div className="flex flex-col items-start justify-center">
          <Heading as="h1" className="break-words">
            프론트엔드 개발자{" "}
            <span className="text-[--ifm-color-primary]">이정민</span>입니다.
          </Heading>
          <p className="text-lg text-start">
            안녕하세요. 어디에서나 잘 녹아드는 2년차 프론트엔드 이정민이라고
            합니다. 사내 프로젝트 전반에 걸쳐 사용하면서 숙련도를 늘려가고
            있습니다. 새로운 인사이트 얻으면서 한 도메인에 묶여있지 않기 위해
            대외 활동과 컨퍼런스에 관심이 많으며 기술을 배우고 적용해 가는것에
            대해 재미를 느끼고 해보는 것을 좋아합니다.
          </p>

          <div className="flex flex-row md:flex-col gap-3 md:gap-1 justify-start items-start">
            <Link
              href="https://github.com/froggy1014"
              className="font-semibold"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeongmin-lee-617a4a145"
              className="font-semibold"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.rallit.com/hub/resumes/40139"
              className="font-semibold"
            >
              Resume
            </Link>
            <Link
              href="https://froggy1014.github.io/docs/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
              className="font-semibold"
            >
              Project
            </Link>
          </div>
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
      description="블리딩엣지에 서서 꾸준한 페이스로 완주까지 하고 싶은 개발자입니다."
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
