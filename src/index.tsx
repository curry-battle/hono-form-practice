import { Hono } from "hono";
import { renderer } from "./renderer";
import Form from "./Form";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Form />);
});

export default app;
