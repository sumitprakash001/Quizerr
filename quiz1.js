const questions=[
    {
      question: "Artificial Intelligence is ____", 
      answers:[
      {text:"Playing a game on Computer",correct:false},
      {text:"Making a machine Intelligent",correct:true},
      {text:"Programming on Machine with your Own Intelligence",correct:false},
      {text:"Putting your intelligence in Machine",correct:false},
    ]
    },
    {
        question: "Who is known as the Father of AI?", 
        answers:[
        {text:"Fisher Ada",correct:false},
        {text:"Alan Turing",correct:false},
        {text:"John McCarthy",correct:true},
        {text:"Allen Newell",correct:false},
      ]
      },
      {
        question: "Select the most appropriate situation for that a blind search can be used.", 
        answers:[
        {text:"Real-life situation",correct:false},
        {text:"Small Search Space",correct:true},
        {text:"Complex game",correct:false},
        {text:"All of the above",correct:false},
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
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
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