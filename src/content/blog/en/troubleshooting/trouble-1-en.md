---
author: Froggy
pubDatetime: 2024-03-12T15:22:00Z
title: Nextjs - not being able to import local vector DB from API route..
slug: local-vector-en
troubleshooting: true
language: "en"
tags:
  - Troubleshooting
  - Vector Database
  - Edge function
  - hnswlib-node
description: The trouble of `hnswlib-node` not being imported when moving from page/api to app/api
---

<br>

## Overview

1. During the hackathon, we boldly discarded the `app router` that still had technical debt and proceeded with the `page router`.
2. Implemented a logic to extract the desired keywords through `RAG` using generative AI.
3. At that time, it was a `pages/api` router, and vectorization was carried out with a Node-specific vector store package called [`HNSWLib`](https://js.langchain.com/docs/integrations/vectorstores/hnswlib).

## Problem

1. Boldly migrated to `app router` to bring the hackathon project into actual use.
2. Realized that the `api route` [usage](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) in `app router` is a bit different.
3. The logic was brought as it is, but a 500 error occurred, and the error message was as follows.

```bash

⨯ Error: Could not import hnswlib-node. Please install hnswlib-node as a dependency with, e.g. `npm install -S hnswlib-node`.

Error: Cannot read properties of undefined (reading 'indexOf')
    at HNSWLib.imports (webpack-internal:///(rsc)/./node_modules/@langchain/community/dist/vectorstores/hnswlib.js:275:19)
    at async HNSWLib.getHierarchicalNSW (webpack-internal:///(rsc)/./node_modules/@langchain/community/dist/vectorstores/hnswlib.js:58:37)
    at async HNSWLib.load (webpack-internal:///(rsc)/./node_modules/@langchain/community/dist/vectorstores/hnswlib.js:217:23)
    ...
```

4. Confirmed that the package was properly installed in node_modules.
5. Checked for `version issues` but confirmed it was not the case.
6. Confirmed that it works normally in `pages/api`.

## Conclusion

1. Confirmed that there is a problem in the `api router` of `app router`.
2. Searched for the package in GitHub issues and checked the related issue below.
3. https://github.com/langchain-ai/langchainjs/issues/943
4. Confirmed that problems occur when switching to Nextjs 13 version's `route handler`.
5. Officially, the reason has not been revealed yet, but it was resolved with the following `next.config setting`.

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.externals = [...config.externals, "hnswlib-node"];

    return config;
  },
};

export default nextConfig;
```
