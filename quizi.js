("use strict");

const quizData = [
  {
    question:
      '코딩이는 첫 코딩 연습으로 파이썬으로 Hello World를 출력할려고 한다.\n이때 사용한 함수는 괄호안 데이터를 출력하는 print문으로, 이 함수가 들어가는 장소는?\n 1._____("Hello 2._____ world") 3._____',
    a: "1.",
    b: "2.",
    c: "3.",
    d: "안 들어간다",
    correct: "a",
  },

  {
    question:
      "파이썬은 3가지의 데이터 타입이 있다.\n그중에 str, _____, float은 순서대로 문자형, 정수형, 실수형으로 나누어진다.\n이때 빈칸에 들어갈 정수형의 객체 타입명에 해당하는 타입은?",
    a: "integrate",
    b: "integer",
    c: "int",
    d: "internet",
    correct: "c",
  },
  {
    question: "HTML은 무엇의 약자 일까요?",
    a: "Hyper Texture Makeup Lacing",
    b: "Hypertext Markup Language",
    c: "Hydrogen Titanium Manganese Lanthanum",
    d: "Hyper True Mega Lion",
    correct: "b",
  },
  {
    question: "이 퀴즈에 쓰인 3개의 코딩언어를 바르게 써놓은 것은?",
    a: "HTML, Python, CSS",
    b: "C++, CSS, Lua",
    c: "HTML, Javascript, CSS",
    d: "XHTML, Java, C--",
    correct: "c",
  },
  //초보 퀴즈
  {
    question: "자바스크립트가 만들어진 년도로 알맞은 것은?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1989",
    correct: "b",
  },
  {
    question:
      "코딩이는 두 수 a와b를 입력해 a와 b를 서로 곱하는 프로그램을 짤려고 한다.\na,b = map(int, input().split())\nc = a_b\nprint(c)\n 위에 코드의 빈칸에 들어갈 연산자로 알맞은 것은?",
    a: "X",
    b: "x",
    c: "*",
    d: "#",
    correct: "c",
  },
  {
    question:
      "이 스크립트는 A와 B의 대소 관계를 알려주는 역할을 한다.\nA, B = map(int, input().split())\nif (A > B):\n    print('>')\nelif (A < B):\n    print('<')\nelse:\n    print('==')\n 이떄 if문 에서 결과가 출력되게 하는 A와B의 값은?",
    a: "A=8 B=9",
    b: "A=93 B=108",
    c: "A=6.3 B=72.1",
    d: "A=59 B=48",
    correct: "d",
  },
  {
    question:
      "a,b = map(int,input().split())\nprint(a+b)\nprint(a-b)\nprint(a*b)\nprint(a//b)\nprint(a%b)\n이라는 코드 가 주어줬을때, a=7 이고 b=3 일때 출력되는 값으로 알맞은 것은?",
    a: "10, 4, 21, 2, 1",
    b: "10, -4, 23, 3, -2",
    c: "13, 7-3, 21, 4, -1",
    d: "10, 5, 21, 2, 1",
    correct: "a",
  },
  //중급 퀴즈
  {
    question:
      '아래에 코드는 년도를 입력하면 윤년인지 알려주는 C++의 스크립트 이다. 이 코드에 오류가 난 곳을 고치는 문항을 선택하시오.\n#include<stdio.h>\nmain(){\nint a;\nscanf("%s", &a);\n        if(a%400 == 0 || (a%4 == 0) && a%100 != 0){\n           printf("%d", 1);}\n       else{\n           printf("%d", 0);\n    }\n}',
    a: "6째 줄하고 8째 줄에 있는 %d를 %s로 고친다",
    b: "6째 줄하고 8째 줄에 있는 printf를 print로 고친다",
    c: "1째 줄에 <>안에 있는 stdio.h를 iostream으로 고친다",
    d: "4째 줄에 %s를 %d로 고친다",
    correct: "d",
  },
  {
    question:
      "x = int(input())\ny = int(input())\nif x > 0 and y > 0:\n    print('1')\nelif x < 0 and y > 0:\n    print('2')\nelif x < 0 and y < 0:\n    print('3')\nelse:\n    print('4')\n위에 함수가 구하자고 하는 것은?",
    a: "x값과 y값을 대입해 f(x) 함수를 미분한 f'(x)를 알려주기",
    b: "x값과 y값을 대입해 나온 점이 접한는 함수의 개수 구하기",
    c: "x값과 y값을 대입해 점을 구한 후 그 점이 있는 사분면을 알려주기",
    d: "x값과 y값을 대입해 멋진 산 그림 그려주기",
    correct: "c",
  },
  //상급 퀴즈
];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector("#quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}

btnSubmit.addEventListener("click", function () {
  const answers = getSelected();

  if (answers) {
    if (answers === quizData[currentQuiz].correct) {
      score++;
    }
    nextQuestion();
  }
});

function nextQuestion() {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>${quizData.length}문제 중에 ${score}문제가 맞았습니다</h2>
    <button type="button" align-items: center id="reload" onclick="location.reload()">다시 시작</button>
    `;
    footerEl.style.display = "none";
  }
}
