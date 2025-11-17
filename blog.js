let postContainer = document.getElementById("postContainer");
let loadMoreBtn = document.getElementById("loadMore");
let limit = 5;
let page = 1;

async function fetchPosts() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const posts = await response.json();

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3>`;

    div.addEventListener("click", () => {
      if (div.querySelector("p")) {
        div.querySelector("p").remove();
      } else {
        const body = document.createElement("p");
        body.textContent = post.body;
        div.appendChild(body);
      }
    });
    postContainer.appendChild(div);
  });
}

fetchPosts();

loadMoreBtn.addEventListener("click", () => {
  page++;
  fetchPosts();
});
