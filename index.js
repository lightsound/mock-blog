const main = document.querySelector("main");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

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
  return article;
}

window.addEventListener("load", async () => {
  const posts = await getPosts();
  posts.forEach((post) => {
    const article = createArticle(post);
    main.appendChild(article);
  });
});

button.addEventListener("click", async () => {
  const title = input.value;
  const body = textarea.value;

  if (!title.trim() || !body.trim()) {
    alert("入力必須です！");
    return;
  }

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    const article = createArticle(data);
    main.prepend(article);
    input.value = "";
    textarea.value = "";
  } catch (error) {
    alert("失敗！");
  }
});
