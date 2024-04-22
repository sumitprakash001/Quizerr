const questions=[
    {
      question: "Which scientist is often referred to as the father of modern physics?", 
      answers:[
      {text:"Isaac Newton",correct:false},
      {text:"Albert Einstein",correct:true},
      {text:" Galileo Galilei ",correct:false},
      {text:" Nikola Tesla",correct:false},
    ]
    },
    {
        question: "What is the chemical symbol for the element Tungsten?", 
        answers:[
        {text:" Tg",correct:false},
        {text:"tu",correct:false},
        {text:"w",correct:true},
        {text:"T",correct:false},
      ]
      },
      {
        question: "In which year did the Chernobyl nuclear disaster occur?", 
        answers:[
        {text:" 1984",correct:false},
        {text:"1986",correct:false},
        {text:"1991",correct:true},
        {text:" 1989",correct:false},
      ]
      },
     
      {
        question: "Among the given options, which search algorithm requires less memory?", 
        answers:[
        {text:"Optimal Search",correct:false},
        {text:"Depth First Search",correct:true},
        {text:"Breadth-First Search",correct:false},
        {text:"Linear Search",correct:false},
      ]
      },
      {
        question: "Which of the given language is not commonly used for AI?", 
        answers:[
          {text:"LISP",correct:false},
        {text:"PROLOG",correct:false},
        {text:"Python",correct:false},
        {text:"Perl",correct:true},
      ]
      }
    ];
    const questionElement=document.getElementById("questions");
    const answerbuttons=document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");


    let currentQuestionIndex=0;
    let score=0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML="Next";
        showQuestion();
    }
    function showQuestion(){
        resetState();
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo+"."+currentQuestion.question;

        currentQuestion. answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerbuttons.appendChild(button);
            if(answer.correct){
              button.dataset.correct=answer.correct;
            }

            button.addEventListener("click",selectAnswer);
        });
    }

    function resetState(){
      nextButton.style.display = "none";
      while (answerbuttons.firstChild){
          answerbuttons.removeChild(answerbuttons.firstChild);
      }
  }
  
    function selectAnswer(e){
      const selectBtn=e.target;
      const isCorrect=selectBtn.dataset.correct==="true";
      if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
      }
      else{
        selectBtn.classList.add("incorrect");
      }
      Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
          button.classList.add("correct");
        }
        button.disabled=true;
      });
      nextButton.style.display="block";
    }
  function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
   }

   function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      }else{
        showScore();
      }
    }

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
});

    startQuiz();