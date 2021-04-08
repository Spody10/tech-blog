async function signInFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-sign-in").value.trim();
  const password = document.querySelector("#password-sign-in").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/sign-in", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

var el = document.querySelector("#sign-in-form");
  if(el){
  el.addEventListener("submit", swapper, false);
  }