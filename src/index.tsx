import { Hono } from "hono";
import Form from "./Form";
import IndexPage from "./pages/Index";
import { renderer } from "./renderer";

const app = new Hono();

app.use(renderer);

// as component
app.get("/react", (c) => {
  return c.render(<Form />);
});

// as html
app.get("/", (c) => {
  return c.render(<IndexPage />);
});

export default app;
