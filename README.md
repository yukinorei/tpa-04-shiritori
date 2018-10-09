# しりとり

このレポジトリからVueJSの紹介をします。

これまでのアプリの複雑さとはあまり変わらないのですがクライアントはVueJSですし、サーバーサイドからもサードパーティAPIを叩くことでレベルアップしています。

メンターへ質問を聞いたり、レビューもしながら進めましょう。

アプリはもうすでに動く状態まで実装されています。

To start:

```bash
npm install
npm start
# visit localhost:8080
```

# Day 1 / サーバーサイド

## キーワード・役に立つリンク：

- [HTTP Post Request](https://wa3.i-3-i.info/word11405.html)
- [POSTMAN](https://www.getpostman.com/)
- [Express req.body](https://expressjs.com/ja/4x/api.html#req.body)

## タスク：ゲームをリセットできるサーバサイドルートを実装しよう (POST /api/reset-game)

このルートが叩かれた場合、playerName のゲームインスタンスを新しい (new Game()) インスタンスにしてあげよう。

ポイント： `server/controller.js`, `game/gameInstances.js` と `game/Game.js` をよおく見ておこう。ここがどう動くかの理解は大事。

クライアントはこのルートを実際叩いていませんが(Day 2 でルートを使用します)、下記のAPIドキュメントに従ってルートを実装しよう：

```
Request
=======
method: POST
endpoint: /api/reset-game
body: {
  playerName: String
}

Response
========
body: {
  success: Boolean
}
```

**ポイント**: クライアントは実際`/api/reset-game` のルートを叩かないので、[POSTMAN](https://www.getpostman.com/) を利用してAPIを叩いて見よう。

# Day 2 / クライアント・VueJS

## キーワード・役に立つリンク：

- [VueJS](https://vuejs.org/)
- [VueJS イベントハンドリング](https://jp.vuejs.org/v2/guide/events.html)
- [VueJS リストレンダリング](https://jp.vuejs.org/v2/guide/list.html)
- [VueJS フォーム入力バインディング](https://jp.vuejs.org/v2/guide/forms.html)
- [テンプレート構文](https://jp.vuejs.org/v2/guide/syntax.html)

（などなど。。。VueJSに関して新しいことはたくさんあるので、メンターへ質問してくださいね！）

## タスク：負けてしまったらゲームをリセットできるボタンを表示して、Day1 の課題で実装したAPIルートを叩こう

まずは現在のアプリがどう動くかを理解するためクライアントのコードをいじって見よう。

**注意**: リセットAPIルートを叩いたら、言葉のリストをリロードするのを忘れないように。

# Misc

すでに実装されているAPIルートドキュメント：

### [POST] /api/play-word

```
Request
=======
method: POST
endpoint: /api/play-word
body: {
  inputWord : String,
  playerName: String,
}

Response
========
body: {
  message?: String
  valid   : Boolean,
  gameOver: Boolean,
  validations: {
    isActualWord              : Boolean,
    doesNotEndWithN           : Boolean,
    startsWithCorrectCharacter: Boolean,
  },
}
```

### [GET] /api/used-words

```
Request
=======
method: GET
endpoint: /api/used-words?playerName={playerName}
example: /api/used-words?playerName=kan

Response
========
body: {
  isOver  : Boolean
  words  ?: Array<String>
  message?: String
}
```

Commands:

```bash
npm run serve # Compiles and hot-reloads for development
npm run build # Compiles and minifies for production
npm run lint # Lints and fixes files
```
