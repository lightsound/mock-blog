const main = document.querySelector("main");

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

function createArticle(post) {
  const article = document.createElement("article");
  const title = document.createElement("h1");
  const body = document.createElement("p");
  title.textContent = post.title;
  body.textContent = post.body;
  article.appendChild(title);
  article.appendChild(body);
  main.appendChild(article);
}

window.addEventListener("load", async () => {
  const posts = await getPosts();
  posts.forEach((post) => {
    createArticle(post);
  });
});
