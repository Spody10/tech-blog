async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('input[name="contents"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      contents,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("RESPNSE ", response);

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

async function fetchPosts(event){
  event.preventDefault();
 
  const title = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('input[name="contents"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      contents,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("RESPNSE ", response);

  if (response.ok) {
    // document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}



 window.onload = () => {
  document.querySelector("#new-post").addEventListener('submit',fetchPosts)

}
  

  
