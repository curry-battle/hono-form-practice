import { html } from "hono/html";

export default function IndexPage() {
  return html`
    <h1>HTML Form</h1>
    <form action="/submit" method="POST">
      <input name="text" type="text" placeholder="Enter text" />
      <button type="submit">Submit</button>
    </form>

    <script>
      async function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const target = event.currentTarget;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        await fetch("/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            console.log("Success:", response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        form.addEventListener("submit", handleSubmit);
      });
    </script>
  `;
}
