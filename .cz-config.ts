module.exports = {
  types: [
    { value: "📝 translate", name: "📝 translate: 번역" },
    { value: "📄 post", name: "📄 post:      블로그 포스팅" },
    { value: "🐛 typo", name: "🐛 typo:      오타" },
    { value: "📚 docs", name: "📚 docs:      README.md 혹은 문서 업데이트" },
    { value: "👷 cicd", name: "👷 cicd:      CICD 관련 커밋" },
    { value: "🔨 settings", name: "🔨 Settings:  세팅 관련 커밋" },
    { value: "💅 styles", name: "💅 styles:    스타일 관련 커밋" },
    { value: "📦 assets", name: "📦 assets:    아셋 관련 커밋" },
    { value: "✔️ chore", name: "✔️ chore:      마이너한 커밋" },
    { value: "🔎 SEO", name: "🔎 SEO:      SEO 최적화 관련" },
  ],

  allowCustomScopes: false,
  usePreparedCommit: true,
  skipQuestions: ["scope", "body", "footer"],
  isTicketNumberRequired: false,
  ticketNumberPrefix: "ISSUE-",
  ticketNumberRegExp: "\\d{1,5}",

  messages: {
    type: "커밋 타입을 골라주세요.\n",
    subject: "제목 작성해주세요.\n",
    confirmCommit:
      "마지막으로 한번 확인해주세요. ( 괜찮으면 엔터, 취소는 n, 수정은 e, 도움말 h )",
  },

  // limit subject length
  subjectLimit: 100,
};
