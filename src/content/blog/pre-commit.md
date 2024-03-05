---
author: Jeongmin Lee
pubDatetime: 2024-03-5T15:22:00Z
title: pre-commit Linting 초기 설정과 커스텀
slug: pre-commit
study: true
draft: false
tags:
  - pre-commit
  - husky
  - linting
  - eslint
  - prettier
  - git-hooks
  - configuration
description: 이 가이드는 Husky를 이용한 pre-commit linting 설정과 커스텀한 커밋 컨벤션 적용해보았습니다.
language: ko
---

## 선행 설치 되어야할 패키지들

```bash
npm install save-dev cz-conventional-changelog eslint husky lint-staged prettier
```

- eslint
- prettier
- cz-conventional-changelog ( commitizen이 포함되어있음 )
  > 컨벤셔널에 따라서 먼저 만들어놓은 프롬프트 입니다.
- husky
  > 커밋 메시지, 코드를 자동으로 린트하고 커밋 또는 푸시 시 테스트를 실행해줍니다.
- lint-staged
  > 린터들이 스테이징된 깃 파일들을 실행할 수 있게 도와줍니다.

## husky 초기 세팅

```json
"scripts": {
    ...
    "prepare": "husky",
  },
```

```
npx husky init or npm run prepare
```

> 위 명령어를 실행하면 husky가 알아서 초기화 작업을 하게 됩니다.

```md
/.husky
⎣* /*
⎣\_ pre-commit
```

위와 같은 구조로 폴더가 하나 생성됩니다.

`9`버전으로 올라가면서 `/_` 라는 폴더안에 `Stage`별 파일들의 먼저 생성되어 있고, 본인이 필요한거만 빼서 `.husky` 폴더안에서 루트에 원하는 `stage 실행파일`과 `command` 만 넣어주면 됩니다. 기존에는 path도 넣어줘야했던거 같은데 이런식 개선된 것 같아 보입니다.

```bash
// pre-commit
npm test
```

처음으로 초기화를 하게되면 `pre-commit`이라는 실행파일 안에 `npm test` 라는 `command` 하나만 들어가게 되는데, 여기에 `pre-commit` 스테이지에 사용할 `command`를 넣어주면 됩니다.

```bash
// pre-commit
npx lint-staged
```

바로 다음에 작업할거지만 일단 위와 같은 `npx lint-staged`로 먼저 변경을 해주세요.
저희는 이미 `lint-sgaged`를 설치하였습니다. `script`를 추가해주도록 하겠습니다.

```json
{
  "scripts": {
    "prepare": "husky",
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    "lint-staged": "^15.2.2",
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write '**/*.{ts,tsx}' --ignore-unknown"
    ]
  }
}

```

위와 같이 lint-staged script를 추가해주세요. 현재 `staged` 된 커밋안에 포함된 파일에 한하여 차례대로 `eslint`한번 검사해주고, `prettier`를 통해서 포맷팅을 해줍니다.

일단 여기까지만 하면 pre-commit 스테이지에서 linting을 자동화가 된것을 확인 할 수 있습니다. 그 외에 본인이 더 추가하고 싶은신게 있으시다면 더 추가하셔도 될 것 같습니다.

## 커밋 컨벤션 강제하기

```json
"scripts": {
    "cz": "cz",
  },
```

script에 위와 같이 추가해줍니다. cz는 commitzen의 약어입니다. 위 실행어를 통해서 저희는 `commit`을 저희가 원하는 규칙에 맞게 사용자에게 유도를 할 것 입니다.

- commitzen 이란 ?
  > git commit 관리 및 프로젝트 versioning 자동화에 유용한 도구라고 생각하시면 될 것 같습니다.

앞에서 진행한 것은 `pre-commit` 훅은 커밋할 때 가장 먼저 호출되는 훅으로 커밋 메시지를 작성하기 전에 호출된다. 여기서 진행할 것은 `prepare-commit-msg` 훅입니다..

- `prepare-commit-msg` 훅이란 ?
  > prepare-commit-msg 는 기본 커밋 메시지가 생성된 이후, 커밋 메시지 편집기가 실행되기 이전 시점에 실행됩니다.

```json
// package.json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
```

`cz-conventional-changelog` 를 사용하기 위한 config를 추가합니다. 이는 `conventional` rule을 적용시킨 `commitizen`의 위에서 만들어진 파생 패키지입니다. 그렇기 때문에 `peer-dependency`로 `commitizen`설치되기 때문에 따로 추가해주지 않아도 됩니다.

```md
/.husky
⎣* /*
⎣* pre-commit
⎣* prepare-commit-msg <- here
```

`.husky` 아래 `prepare-commit-msg`를 파일을 생성해줍니다. 그리고 커맨드를 아래와 같이 넣어줍니다.

```bash
exec < /dev/tty && npx cz --hook || true
```

그리고 이제 다시 commit을 하게 되면 `conventional convention`이 적용되어 나오는 것을 확인 하실 수 있습니다.

`cz-conventional-changelog`가 너무 투머치 하다고 생각하시나요?

본인이 원하는 방식으로도 커스텀이 가능합니다.
저는 아래와 같이 emoji를 추가해서 만들어보았습니다.

```json
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog",
      "types": {
        "✨ Feat": {
          "description": "A new feature or enhancement",
          "title": "Feature"
        },
        "🐛 Fix": {
          "description": " A bug fix",
          "title": "Bug Fix"
        },
        "📝 docs": {
          "description": " Documentation changes",
          "title": "Documentation"
        },
        "🎨 Style": {
          "description": " Code style changes",
          "title": "Code Style"
        },
        "♻️ Refactor": {
          "description": "  Code refactoring",
          "title": "Code Refactoring"
        },
        "✅ test": {
          "description": "Adding or modifying tests",
          "title": "Tests"
        },
        "🚀 Deploy": {
          "description": " Deploying stuff",
          "title": "Deploy"
        },
        "🔧 Chore": {
          "description": " Other changes that don't modify src or test files",
          "title": "Chore"
        },
        "⚙️ Settings": {
          "description": "  Changing configuration files",
          "title": "Settings"
        }
      }
    }
}
```

## 더 추가해야하는 작업

> pre-commit이랑 prepare-commit-msg도 자동 생성 및 커맨드 삽입 자동화
