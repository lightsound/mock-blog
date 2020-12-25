# HTML・CSS・JS 講座@クリスマス 🎅

## はじめに

- 本講座は IT KINGDOM サロン生用です。
- 私が取りこぼした質問があれば教えてください！
  - コメントしにくいとの意見をいただきました。
  - 現状ここはどうしたら改善できるか分かっていないです...
  - 積極的にコメントしてほしいです mm
- 全部覚える必要はない。都度検索する。
  - これが学校のテストと違うところ！
  - 私も正直わからないことだらけ！

## VS Code

- Prettier を入れよう
- `setting.json` について
  - ユーザーとワークスペースの概念を説明

## HTML

- HTML の準備
- [HTML 要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element)
  - DOCTYPE, html, head, body
  - div だけでもできるが、SEO 上必要
    - article の使い方とか、section の使い方とか最初は気にする必要はない
    - SEO が必要になったら覚えていけばいい。
- [HTML 属性](https://developer.mozilla.org/ja/docs/Web/HTML/Attributes)
  - グローバル属性
    - id, class など
  - 要素固有の属性
    - href など
- ブラウザによる差異がある
  - 見た目が違ったり、機能自体がサポートされていなかったり
  - MDN や[caniuse](https://caniuse.com/)で確認
- なんか書いてみる

## CSS

- CSS の読み込み方
  - インラインスタイル
  - style 要素
  - 外部スタイルシート（これが基本）
- [CSS プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/Reference)
  - 詳しくはドットインストールとか Progate とかで覚えていってね！
- セレクタ
  - タイプセレクタ, ユニバーサル
  - id, class
  - 疑似クラス, 疑似要素
  - 結合子
- ブロックとインライン
  - インラインは...
    - width, hegiht が効かない
    - 改行されません
    - pading, border, margin が他の要素にまたがる
  - display プロパティで変更できる。
  - box-sizing: border-box
- なんか書いてみる

## JavaScript

React や Vue などの今どきのフレームワークを使った開発では素の JS はあまり使いません。私もここ数年は素の JS をゴリゴリ書いていないので正直メソッドとかあんまり分かりません。でも何とかなります。

- ブラウザで動く
  - ブラウザの API にアクセスできる
  - DOM にアクセスできる
- さっそく実践で見ていこう
  - `querySelector` で DOM 要素を変数に格納
  - `addEventListener` でイベントを設定してみよう
  - `createElement` で JavaScript で DOM 要素を作り出そう
  - `appendChild` や `prepend` で作った DOM を、既存の DOM に差し込もう
  - `fetch` で WebAPI を叩いてみよう
    - 同期・非同期
      - 同期処理は、あるタスクが実行している間、他のタスクの処理は中断される方式
      - 非同期処理は、あるタスクが実行をしている際に、他のタスクが別の処理を実行できる方式
        - 待つ場合: ほとんど。API を叩いて、その取得を待ってから、次のプログラムに行く
        - 待たない場合: ログを送るとき。ログが送信できたか否かの結果は関係なくプログラムは進む。
    - `async await`
      - fetch は 2 段階のプロセスがある
        - 1 段階目は fetch を開始してからレスポンスを得るまで
        - 2 段階目はレスポンスの中から本文を取り出す処理
  - `forEach` で取得した要素をループさせてみよう
  - `try catch` で非同期処理が失敗した場合を考えよう
  - ユーザービリティを考えて使いやすくしてみよう
