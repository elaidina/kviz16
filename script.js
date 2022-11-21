const quizData = [
    {
        question: "1. Sídlem mišlení je mozek.",
        a: "mozeg",
        b: "myšlení",
        
        correct: "b",
    },
    {
      question: "2. Zubař požívá zubní vrtačku.",
      a: "vrtašku",
      b: "používá",
      
      correct: "b",
  },
  {
    question: "3. Na jaře vyrostou nové pampelyšky.",
    a: "virostou",
    b: "pampelišky",
    
    correct: "b",
},
{
  question: "4. Pes je nejstarší domácý zvíře.",
  a: "domácí",
  b: "pez",
  
  correct: "a",
},{
  question: "5. Každý ví, že pero slouží k saní.",
  a: "sloužý",
  b: "psaní",
  
  correct: "b",
},
{
question: "6. Perla je zrnko pýsku obalené perletí.",
a: "zrngo",
b: "písku",

correct: "b",
},{
  question: "7. Pračky šetrí lidem hodně času a energie.",
  a: "časů",
  b: "šetří",
  
  correct: "b",
},
{
question: "8. Přehrada je hráz, která přehradí deku.",
a: "řeku",
b: "hrád",

correct: "a",
},{
  question: "9. Smích se rodí z ratosti.",
  a: "smých",
  b: "radosti",
  
  correct: "b",
},
{
question: "10. Sír se vyrábí z mléka.",
a: "sýr",
b: "virábí",

correct: "a",
},{
  question: "11. Voda se vypařuje a pění se na páru.",
  a: "mění",
  b: "vypaluje",
  
  correct: "a",
},
{
question: "12. Zem se otáčý kolem slunce.",
a: "otáčí",
b: "slunse",

correct: "a",
},{
  question: "13. Magnet přitahuje železné předmety.",
  a: "předměty",
  b: "pritahuje",
  
  correct: "a",
},
{
question: "14. Lidé potřebují kislík na dýchání.",
a: "kyslík",
b: "díchání",

correct: "a",
},{
  question: "15. Pták se lýhne z vajíčka.",
  a: "líhne",
  b: "vajýčka",
  
  correct: "a",
},
{
question: "16. Všechny děty se učí počítat.",
a: "děti",
b: "učý",

correct: "a",
},{
  question: "17. Klavýr je hudební nástroj.",
  a: "klavír",
  b: "hutební",
  
  correct: "a",
},
{
question: "18. Spisovatel píše knýžky.",
a: "pýše",
b: "knížky",

correct: "b",
},{
  question: "19. Leden je prvný měsíc v roku.",
  a: "první",
  b: "mesíc",
  
  correct: "a",
},
{
question: "20. Lysty padají ze stromů.",
a: "listy",
b: "padajú",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })