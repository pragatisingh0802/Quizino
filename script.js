const questions=[
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct':'a',
    },{
        'que': 'Who among the following wrote Sanskrit grammar?',
        'a': 'Aryabhatt',
        'b': 'Kalidasa',
        'c': 'Charak',
        'd': 'Panini',
        'correct': 'd',
    },{
        'que': 'The metal whose salts are sensitive to light is?',
        'a' : 'Zinc',
        'b' : 'Silver',
        'c' : 'Copper',
        'd' : 'Aluminum',
        'correct': 'b',
    },
    {
        'que': 'The country that has the highest in Barley Production?',
        'a' : 'China',
        'b' : 'India',
        'c' : 'Russia',
        'd' : 'France',
        'correct': 'c',
    },
    {
        'que': 'Chambal river is a part of –',
        'a' : 'Sabarmati basin',
        'b' : 'Ganga basin',
        'c' : 'Narmada basin',
        'd' : 'Godavari basin',
        'correct': 'c',
    }
]
let index=0;
let total =questions.length;
let right =0, wrong=0;
const quesbox =document.getElementById("quesbox");
const optioninput = document.querySelectorAll('.options');
const loadquestion =()=>{
    if(index==total){
         return endquiz();
    }
    reset();   
    const data = questions[index];
    quesbox.innerText=`${index+1}) ${data.que}`;         //to display any question 
    // ====to show the options of each questions=======
    optioninput[0].nextElementSibling.innerText= data.a;
    optioninput[1].nextElementSibling.innerText= data.b;
    optioninput[2].nextElementSibling.innerText= data.c;
    optioninput[3].nextElementSibling.innerText= data.d;
}
const submitquiz =()=>{
    const data = questions[index];
    const ans= getanswer();
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion(); 
    return;
}
//  =====this function takes the checked value out of 4 given options=======
const getanswer = ()=>{
    let answer;
    optioninput.forEach(
        (input) =>{
            if(input.checked){
                answer=input.value;
    
            }
        }
    )
    return answer;
}
const reset =()=>{
    optioninput.forEach( 
        (input) =>{
            input.checked=false;
        }
    )    
}
const endquiz =()=>{
    document.getElementById("box").innerHTML=`
    <center><h3>Thank you for playing the quiz </h3>
    <h2> ${right} / ${ total} are correct
    </h2></center>`
}
//initial call
loadquestion();