async function signOut() {
  const response = await fetch("/api/users/sign-out", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#sign-out").addEventListener("click", signOut);