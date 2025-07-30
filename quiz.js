'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//クイズの問題を変数に入れる
const quiz = [
    {   
        question:"変数を定義する正しい方法は？",
        answer:[
            "let = x 5;",
            "let x = 5;",
            "var: x = 5"
        ],
        correct:"let x = 5;"
    },
    {
        question:"「===」の意味は？",
        answer:[
            "値と型が等しいかを比較する",
            "数値かどうかを調べる;",
            "代入演算子"
        ],
        correct:"値と型が等しいかを比較する"        
    },{
        question:"配列の長さを取得するには？",
        answer:[
            "array.length()",
            "array.len",
            "array.length"
        ],
        correct:"array.length"        
    },{
        question:"配列に要素を追加するメソッドは？",
        answer:[
            "add()",
            "push()",
            "insert()"
        ],
        correct:"push()"        
    },{
        question:"ループ処理を行う構文は？",
        answer:[
            "repeat()",
            "loop {}",
            "for() {}"
        ],
        correct:"for() {}"  
    }
]

const quizlength = quiz.length;
let quizindex = 0;
let score = 0;

//何度も出てくるボタンを取得する文を変数に入れる
const button =  document.getElementsByTagName("button")

//HTMLに問題を表示させる
const setupQuiz = function(){

    document.getElementById("js-question").textContent = quiz[quizindex].question;
    
    button[0].textContent= quiz[quizindex].answer[0];
    button[1].textContent= quiz[quizindex].answer[1];
    button[2].textContent= quiz[quizindex].answer[2];
}
setupQuiz();


//ボタンをクリックしたら正誤判定
button[0].addEventListener("click",function(){
    if (quiz[quizindex].correct === button[0].textContent){
        window.alert("正解")
        score++;
    } else {
        window.alert("不正解")
    }
    quizindex++;
    if (quizindex < quizlength){
        setupQuiz();
    } else {
        window.alert("終了!あなたの正解数は" + score + "/" + quizlength + "問です")
    }
})

button[1].addEventListener("click",function(){
    if (quiz[quizindex].correct === button[1].textContent){
        window.alert("正解")
        score++;
    } else {
        window.alert("不正解")
    }
    quizindex++;
    if (quizindex < quizlength){
        setupQuiz();
    } else {
        window.alert("終了あなたの正解数は" + score + "/" + quizlength + "問です")
    }
})

button[2].addEventListener("click",function(){
    if (quiz[quizindex].correct === button[2].textContent){
        window.alert("正解")
        score++;
    } else {
        window.alert("不正解")
    }
    quizindex++;
    if (quizindex < quizlength){
        setupQuiz();
    } else {
        window.alert("終了あなたの正解数は" + score + "/" + quizlength + "問です")
    }
})


   

