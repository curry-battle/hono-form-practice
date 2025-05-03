import { Hono } from "hono";
import { renderToString } from "react-dom/server";
import IndexPage from "./pages/Index";

const app = new Hono();

// see: https://zenn.dev/yusukebe/articles/06d9cc1714bfb7
// as component
app.get("/react", (c) => {
  return c.html(
    renderToString(
      <html lang="en">
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
          <div id="root" />
        </body>
      </html>,
    ),
  );
});

// as html
app.get("/", (c) => {
  // TODO: dead html
  return c.html(renderToString(<IndexPage />));
});

export default app;
