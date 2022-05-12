---
title: How to publish a Svelte component library with SvelteKit
description: SvelteKit makes it super easy to create a library and prepare it for publishing to NPM.
publishDate: 12 May, 2022
---

<script>
  import Header from '../../components/Header.svelte';

  import CodeBlock from '../../components/CodeBlock.svelte';

  let testCode = `

<div className="card-wrapper">
  <div className="header">
    <h1>Card Heading</h1>
    <img src="chevron.svg" />
  </div>
  <p>Description</p>
  <div className="metadata">
    <div className="author">
      <img src="avatar-image.svg"/>
      <p>Joanna Smith</p>
    </div>
    <time>3:10pm</time>
  </div>
</div>
  `
</script>

<Header title={title}/>

# {title}

SvelteKit is a fantastic tool for creating full stack Svelte apps. In addition to this, it can also streamline the process of creating a Svelte component library.

By the end of this post, you'll have a Svelte component published to NPM. As an example I'll be using my library [`codemirror-svelte-modules`](https://www.npmjs.com/package/codemirror-svelte-modules) however the actual components that you ship with the library are not important so feel free to use whatever Svelte component you'd like.

## Getting started

As with any SvelteKit app you'll first need to generate the project. Choose `Skeleton project` for the first question in the CLI and continue through the rest selecting your preferred options.

<img src="/img/svelte-lib/init_svelte_project.svg" alt="npm init svelte@latest <project name here>" />

Once the project is setup we can `cd` into the directory and install dependencies.
