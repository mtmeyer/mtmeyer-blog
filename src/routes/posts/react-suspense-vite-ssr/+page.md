---
title: Vite + React 18 + Suspense + SSR + Stitches - A setup guide
description: How to setup a React SSR project, ready for suspense including Stitches css-in-js
publishDate: 26 Aug, 2022
published: false
---

<script>
  import Header from '../../../components/Header.svelte';
  
</script>

<Header title={title}/>

# {title}

For a recent project I was keen to use Vite with React in an server side rendered context.  As of writing this post, none of the major React SSR frameworks use Vite under the hood.  Fortunately there are a few plugins for using Vite to create an SSR site, and as it turns out, they're great!

## Project requirements

- Server side rendering
- Vite (explanation why below)
- React 18 with the ability to leverage SSR suspense
- Lightweight CSS-in-JS solution with no additional compilation requirements like Babel

## Why Vite?

I wish I had a better reason for wanting to use Vite but if I'm being perfectly honest, I just really like it.  I've been really happy at the ease of use and speed, also given I plan to use Vitest, it seems like an obvious match.  

One aspect of Vite I have retrospectively enjoyed in this project vs a framework such as NextJS, is that it feels as if I have more low level access to the inner workings of the server.  Given I'm working with the build tool directly, I have more control over how it works whereas Next or Remix abstracts this away (for good reason 😊)

## Introducing `vite-plugin-ssr`