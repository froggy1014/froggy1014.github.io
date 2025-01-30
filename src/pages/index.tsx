import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ProfileSection from "../components/ProfileSection";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="블리딩엣지에 서서 꾸준한 페이스로 완주까지 하고 싶은 개발자입니다."
    >
      <main className="bg-[var(--ifm-background-color)] flex flex-col items-center justify-center min-h-[calc(100vh-var(--ifm-navbar-height))]">
        <ProfileSection />
      </main>
    </Layout>
  );
}
