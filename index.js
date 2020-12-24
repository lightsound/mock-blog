const main = document.querySelector("main");

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
}

window.addEventListener("load", () => {
  getPosts();
  const article = document.createElement("article");
  const title = document.createElement("h1");
  const body = document.createElement("p");
  title.textContent = "タイトルですよ！";
  body.textContent = "本文ですよ！";
  article.appendChild(title);
  article.appendChild(body);
  main.appendChild(article);
});
