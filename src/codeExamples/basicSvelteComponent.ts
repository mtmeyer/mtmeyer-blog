export const svelteComponentCodeExample = `
  <script>
      export let heading;
      export let content;
  </script>

  <div class="card>
    <h1>{heading}</h1>
    <p>{content}</p>
  </div>

  <style>
    .card {
      /* some awesome card css */
    }

    h1 {
      /* some awesome heading css */
    }

    p {
      /* some awesome body text css */
    }
  </style>
`;
