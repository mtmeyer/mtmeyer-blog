---
title: How to publish a Svelte component library with SvelteKit
description: SvelteKit makes it super easy to create a library and prepare it for publishing to NPM.
publishDate: 12 May, 2022
published: false
---

<script>
  import Header from '../../components/Header.svelte';
  
</script>

<Header title={title}/>

# {title}

SvelteKit is a fantastic tool for creating full stack Svelte apps. In addition to this, it can also streamline the process of creating a Svelte component library.

By the end of this post, you'll have a Svelte component published to NPM. As an example I'll be using my library [`codemirror-svelte-modules`](https://www.npmjs.com/package/codemirror-svelte-modules) however the actual components that you ship with the library are not important so feel free to use whatever Svelte component you'd like.

## Setting it all up

As with any SvelteKit app you'll first need to generate the project. Choose `Skeleton project` for the first question in the CLI and continue through the rest selecting your preferred options.

<div style='width: 100%; display: flex; justify-content: center'>
<img src="/img/svelte-lib/init_svelte_project.svg" alt="npm init svelte@latest <project name here>" width="80%" style='box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;'/>
</div>

Once the project is setup we can `cd` into the directory and install dependencies.

Then we'll create a `lib` folder in `src`. When it comes time to publish the package, SvelteKit will pull the library code from this folder. Given that we're keeping our library code in this directory, it means we can use the rest of the project to test the componemnt and even use it as a documentation site.

<div style='width: 100%; display: flex; justify-content: center'>
<img src="/img/svelte-lib/svelte_kit_proj_structure.svg" alt="Simple Svelte example component" width="100%" style='box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;'/>
</div>

## Creating our compomnent

With the project setup we can now get to creating a component. The neat thing about this method of creating a library, you can just author a typical Svelte component, no special requirements.

### Example

`src/lib/CardComponent.svelte`

<div style='width: 100%; display: flex; justify-content: center'>
<img src="/img/svelte-lib/basic_svelte_component.svg" alt="Simple Svelte example component" width="100%" style='box-shadow: rgba(0, 0, 0, 0.15) 0px 7px 29px 0px;'/>
</div>

Thanks to SvelteKit, we can now import our new component into `src/routes/index.svelte` and add it to the template as we would with any other Svelte component.

Run `npm run dev` and now you should see your awesome new component. From here you can refine and fix any bugs until you're happy the component is ready to ship to NPM.
