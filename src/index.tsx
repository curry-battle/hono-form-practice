import { Hono } from "hono";
import { renderToString } from "react-dom/server";

const app = new Hono();

// as html

app.get("/", (c) => {
  return c.html(
    renderToString(
      <html lang="en">
        <head>
          <script src="/assets/index.js" type="text/javascript" />
        </head>
        <body>
          <h1>HTML + Hono</h1>
          <h2>HTML Form</h2>
          <form action="/submit" method="POST">
            <input name="text" type="text" placeholder="Enter text" />
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>,
    ),
  );
});

// as component
app.get("/spa", (c) => {
  return c.html(
    renderToString(
      // biome-ignore lint/a11y/useHtmlLang: <explanation>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js" />
          ) : (
            <script type="module" src="/src/client.tsx" />
          )}
        </head>
        <body>
          <h1>HTML + Hono</h1>
          <div id="root" />
        </body>
      </html>,
    ),
  );
});

export default app;
