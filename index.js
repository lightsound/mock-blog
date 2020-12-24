const main = document.querySelector("main");
// <main></main>
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const posts = await res.json();
    return posts;
  } catch (error) {
    main.textContent =
      "読み込みに失敗しました。時間が経ってから再度お試しください。";
    // alert("投稿に失敗しました。時間が経ってから再度お試しください。");
  }
}

function createArticle(post) {
  const article = document.createElement("article");
  // <article></article>
  const title = document.createElement("h1");
  const body = document.createElement("p");

  title.textContent = post.title;
  // <h1>postの中のtitleが入ります</h1>;
  body.textContent = post.body;
  // <p>postの中のbodyが入ります</p>;

  article.appendChild(title);
  // <article>
  //   <h1>postの中のtitleが入ります</h1>
  // </article>
  article.appendChild(body);
  // <article>
  //   <h1>postの中のtitleが入ります</h1>
  //   <p>postの中のbodyが入ります</p>
  // </article>
  return article;
}

async function createArticles() {
  const posts = await getPosts();
  posts.forEach(function (post) {
    const article = createArticle(post);
    // <article>
    //   <h1>postの中のtitleが入ります</h1>
    //   <p>postの中のbodyが入ります</p>
    // </article>
    main.appendChild(article);
    // <main>
    //   <article>
    //     <h1>postの中のtitleが入ります</h1>
    //     <p>postの中のbodyが入ります</p>
    //   </article>
    //   <article>
    //     <h1>postの中のtitleが入ります</h1>
    //     <p>postの中のbodyが入ります</p>
    //   </article>
    //   <article>
    //     <h1>postの中のtitleが入ります</h1>
    //     <p>postの中のbodyが入ります</p>
    //   </article>
    //   ... 100個分
    // </main>;
  });
}

window.addEventListener("load", createArticles);

async function addArticle() {
  const title = input.value;
  const body = textarea.value;

  if (!title.trim()) {
    alert("入力必須です！");
    return;
  }

  try {
    // 送りたいデータ
    const data = {
      title: title,
      body: body,
      userId: 1,
    };

    const res = await window.fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const post = await res.json();
    const article = createArticle(post);
    main.prepend(article);
    input.value = "";
    textarea.value = "";
  } catch (error) {
    // エラーのログを送る
    alert("投稿に失敗しました。時間が経ってから再度お試しください。");
  }
}

button.addEventListener("click", addArticle);
