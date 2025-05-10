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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});
