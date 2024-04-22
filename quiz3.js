const questions=[
    {
      question: "The sum of three consecutive odd integers is 195. What is the largest of these three integers? ____", 
      answers:[
      {text:"63",correct:false},
      {text:"65",correct:false},
      {text:"67",correct:true},
      {text:"69",correct:false},
    ]
    },
    {
        question: "What is the smallest positive integer that is evenly divisible by all integers from 1 to 10?", 
        answers:[
        {text:"340",correct:false},
        {text:"460",correct:false},
        {text:"420",correct:true},
        {text:"580",correct:false},
      ]
      },
      {
        question: "An investment of $5000 grows at an annual interest rate of 8%, compounded annually. After how many years will the investment double in value?", 
        answers:[
        {text:"7 years",correct:false},
        {text:"8 years",correct:true},
        {text:"9 years",correct:false},
        {text:"10 years",correct:false},
      ]
      },
      {
        question: "A triangular plot of land has sides measuring 30 meters, 40 meters, and 50 meters. If a fence is to be built around the perimeter of the plot, how many meters of fencing are needed?", 
        answers:[
        {text:"110",correct:false},
        {text:"150",correct:false},
        {text:"120",correct:true},
        {text:"130",correct:false},
      ]
      },
      {
        question: "Alice invests $8000 in a stock that grows at an annual rate of 6%. At the same time, Bob invests $10,000 in a different stock that grows at an annual rate of 8%. After how many years will their investments be equal in value?", 
        answers:[
          {text:"7 year",correct:false},
        {text:"4 year",correct:false},
        {text:"9 year",correct:false},
        {text:"5 year",correct:true},
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