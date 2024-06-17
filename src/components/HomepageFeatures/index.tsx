// import ProjectCard, { TProject } from "../ProjectCard";
import ProjectCard from "../ProjectCard";

export type TProject = {
  title: string;
  src: string;
  description: string;
  redirectUrl: string;
};

const ProjectList: TProject[] = [
  {
    title: "스와이프 제주",
    src: "/img/swipejeju_thumnail.png",
    description:
      "카카오가 주관한 해커톤에서 관광과 AI를 주제로 자연어를 통해 키워드를 추출하여 맛집, 명소를 스와이프로 쉽게 고르고, 최단 여행 경로를 제공하는 웹앱입니다.",
    redirectUrl: "",
  },
  {
    title: "내일의 네일",
    src: "/img/nailofnail_thumnail.png",
    description:
      "좋아하는 네일 디자인을 저장하고, 링크를 통해 친구와 쉽게 공유하고 사용자는 네일 아트 스타일을 탐색하고, 자신의 컬렉션에 추가하여 언제든지 확인할 수 있는 플랫폼입니다.",
    redirectUrl: "",
  },
  {
    title: "일정관리 앱",
    src: "/img/calendar_thumnail.png",
    description:
      "연차 관리 앱으로, 구글 API를 연동하여 엑셀을 대신해 연차 신청과 잔여 연차 관리를 간편하게 할 수 있도록 만들었습니다.",
    redirectUrl: "",
  },
  {
    title: "The Place I've been",
    description:
      "리액트 전체적인 기능 복습과 백엔드 기초적인 부분을 학습을 목표로 MERN 스택을 사용하여 프렌트엔드 개발자를 지원하는 저로써 좀 더 백엔드를 이해하고자 시작하게 되었습니다.",
    src: "/img/place_thumbnail.png",
    redirectUrl: "",
  },
  {
    title: "인코스 E-commerce",
    description:
      "프론트엔드 기능을 시작부터 끝까지 직접 구현해보면서 이해함과 동시에 학습을 목표로 진행하는 E-commerce 서비스 프로젝트입니다.",
    src: "/img/incourse_thumnail.png",
    redirectUrl: "/docs/project/2023-01-06-e-commerce",
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={`flex items-center py-8 w-full`}>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ProjectList.map((props, idx) => (
            <ProjectCard
              key={idx}
              title={props.title}
              src={props.src}
              description={props.description}
              redirectUrl={props.redirectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
