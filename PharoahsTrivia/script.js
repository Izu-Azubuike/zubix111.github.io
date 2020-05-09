var ul=document.getElementById('ul');
var triviaBox=document.getElementById('questionBox');
var scoreCard=document.getElementById('scoreCard');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var btn=document.getElementById('button');


var app = {

            questions:[
                        {q:'Who is the CEO of start.ng?',options:['Eniola Agboola',
                        'Jeff Oga','Seyi Onifade', 'Mark Essien' ],answer:3},

                        {q:'Who among these mentors taught design?',options:['Eniola Agboola',
                        'Jeff Oga','Seyi Onifade', 'Kingsley Iheonye' ],answer:4},

                        {q:'Which of these programming languages was not taught at start.ng 2.0??',options:['Go',
                        'JavaScript','Fortran', 'C#' ],answer:3},

                        {q:'Which state did the mentor Kinsley Iheonye say he reside?',options:['Lagos State',
                        'Oyo State','Enugu State', 'Akwa Ibom State' ],answer:3},

                        {q:'What name did Donald Trump call Coronavirus during his viral interview?',options:['Chinese Virus',
                        'Indaboski Virus','Wuhan Virus', 'Black Virus' ],answer:1},

                     ],

            index:0,
            load:function(){
                if(this.index<=this.questions.length-1){
                    triviaBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
                    opt1.innerHTML=this.questions[this.index].options[0];
                    opt2.innerHTML=this.questions[this.index].options[1];
                    opt3.innerHTML=this.questions[this.index].options[2];
                    opt4.innerHTML=this.questions[this.index].options[3];
                }
 
                else {
                    triviaBox.innerHTML="Trivia Over......!!!"      
                        opt1.style.display="none";
                        opt2.style.display="none";
                        opt3.style.display="none";
                        opt4.style.display="none";
                        btn.style.display="none";
                }
                    
                                },
            next:function(){
                this.index++;
                this.load();
                             },
            check:function(ele){

                    var id=ele.id.split('');

                    if (id[id.length-1]==this.questions[this.index].answer){
                        this.score++;
                        ele.className="correct";
                        ele.innerHTML="correct";
                        this.scoreCard();
                        console.log('click');
                       
                    }
                    else{
                        ele.className="wrong";
                        ele.innerHTML="wrong";
                        
                    }
               
                                     },
            notClickAble:function(){
                for(let i=0;i<ul.children.length;i++){
                        ul.children[i].style.pointerEvents="none";
                }
                     },

         clickAble:function(){
                for(let i=0;i<ul.children.length;i++){
                        ul.children[i].style.pointerEvents="auto";
                        ul.children[i].className=''

                    }
         },
            score:0,
            scoreCard:function(){
                scoreCard.innerHTML=this.score + "/" + this.questions.length;
            }


}

        window.onload=app.load();

        function button(ele){
            app.check(ele);
            app.notClickAble();
        }
        function next(){
            app.next();
            app.clickAble();
        }