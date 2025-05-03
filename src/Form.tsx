import type { Event } from "hono/jsx";

export default function Form() {
  // TODO: cannot hit this function
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    console.log("Form submitted");

    const target = event.currentTarget as HTMLFormElement;
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
  };

  return (
    <>
      <h1>Component Form</h1>
      {/* React.FormEvent<HTMLFormElement> ではない! */}
      <form onSubmit={(e: Event) => handleSubmit(e)}>
        <input name="text" type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
