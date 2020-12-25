const main = document.querySelector("main");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const createArticles = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const items = await res.json();
    items.forEach(function (item) {
      const article = createArticle(item);
      main.appendChild(article);
    });
  } catch (error) {
    main.textContent = "読み込みに失敗しました🙇";
  }
};

function createArticle(item) {
  // articleを作ります
  // <article></article>
  const article = document.createElement("article");

  // タイトルを作ります
  // <h2>ダミータイトル</h2>
  const title = document.createElement("h2");
  title.textContent = item.title;

  // 本文を作ります
  // <p>ダミー本文</p>
  const body = document.createElement("p");
  body.textContent = item.body;

  // articleの中にタイトルと本文を入れます。
  // <article>
  //    <h2>ダミータイトル</h2>
  //    <p>ダミー本文</p>
  // </article>
  article.appendChild(title);
  article.appendChild(body);

  return article;
  // 最後にarticleをmainの中に追加する
  // main.appendChild(article);
}

window.addEventListener("load", createArticles);

button.addEventListener("click", async function () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: input.value,
        body: textarea.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    const article = createArticle(data);
    main.prepend(article);
  } catch (error) {
    alert("投稿に失敗しました🙇");
  }
});
