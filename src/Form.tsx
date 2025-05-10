export default function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
      <h2>Component Form</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <input name="text" type="text" placeholder="Enter text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
