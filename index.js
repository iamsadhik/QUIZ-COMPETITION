var score=0;
var chalk= require('chalk');
console.log(chalk.italic.bold.red("WELCOME TO QUIZ COMPETITION "));
console.log(chalk.italic.bold.red("HINT: PLZ DO TURN ON CAPS "));
console.log(chalk.yellow("--------------------------"));
var readlineSync =require('readline-sync');
var userAnswer = readlineSync.question(chalk.green("HEY MATE! WHAT IS YOUR NAME ? "));
console.log(chalk.red.bold("WELCOME " +userAnswer));
var temp = readlineSync.question(chalk.magentaBright("ARE YOU A MSD FAN ? "));
console.log(chalk.yellowBright("IF Yes then answer the following questions. "));
function quiz(question, answer)
{
  var urAnswer= readlineSync.question(question);
  if(urAnswer===answer)
  {
  console.log(chalk.cyanBright("WOW THAT SOUNDS GREAT.. YOU ARE RIGHT."));
    score++;
  }
    else{
      console.log(chalk.red(" YOU ARE WRONG"));
      score--;
    }
console.log(chalk.greenBright("your score is: ",score));
}
var questions =[
  {
    question: "1)IN WHICH YEAR DID DHONI MAKE HIS DEBUT? \n"+
              "A.23 DEC 2004 \n" +
              "B.24 JAN 2006 \n" +
              "C.24 DEC 2004 \n" +
              "D.29 JUN 2003 \n" + 
              "TYPE YOUR OPTION: "+ " ",
    answer:"A"
        
  },
  
  {
    question: "2)NUMBER OF ICC TOURNAMENTS INDIA HAS WON UNDER DHONI? \n"+
               "A.1\n"+
               "B.6\n"+
               "C.5\n"+
               "D.3\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"D"
  },
  {
    question: "3)NUMBER RUNS SCORED BY MSD IN ODI'S?\n"+
              "A.12000\n"+
              "B.11187\n"+
              "C.10877\n"+
              "D.9087\n"+
              "TYPE YOUR OPTION: "+ " ",
    answer:"C"
  },
  {
  question: "4)NUMBER OF STUMPINGS BY DHONI IN ODI'S?\n"+
               "A.98\n"+
               "B.126\n"+
               "C.123\n"+
               "D.99\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"C"
    },
    {
    question: "5)IN WHICH YEAR DHONI WAS CONFERRED WITH LIEUTENANT COLONEL? \n"+
               "A.2011\n"+
               "B.2013\n"+
               "C.2010\n"+
               "D.2015\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"A"
    },
    
{
question: "6)DHONI WAS A TRAVELLING TICKET EXAMINER(TTE) AT ______ RAILWAY STATION FROM 2001 TO 2003, UNDER SOUTH EASTER RAILWAY MIDNAPORE (W),A DISTRICT in WEST BENGAL\n"+
               "A.KHARAGPUR\n"+
               "B.HALDIA\n"+
               "C.KOCHI\n"+
               "D.SHANTIPUR\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"A"
},

{
question: "7)DHONI HOLDS THE POST OF VICE PRESIDENT OF WHICH COMPANY?\n"+
               "A.ACC CEMENTS\n"+
               "B.ULTRATECH CEMENTS\n"+
               "C.AMBUJA CEMENTS\n"+
               "D.INDIA CEMENTS\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"D"
},

{
question: "8)MSD TOOK OVER THE ODI CAPTAINCY FROM _______ IN 2007? \n"+
               "A.SAURAV GANGULY\n"+
               "B.RAHUL DRAVID\n"+
               "C.SACHIN TENDULKAR\n"+
               "D.ANIL KUMBLE\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"B"
},

{
question: "9)MSD HIGHEST SCORE IN ODI? WHICH IS ALSO THE HIGHEST BY ANY WICKET-KEEPER BATSMAN? \n"+
               "A.126\n"+
               "B.148\n"+
               "C.190\n"+
               "D.183\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"D"
},

{
question: "10)DHONI BEGAN HIS CARRER IN 1998 BY PLAYING FOR_______?\n"+
               "A.PUNE\n"+
               "B.KARNATAKA\n"+
               "C.BIHAR\n"+
               "D.RANCHI\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"C"
},
{
question: "11)MSD'S ODI SHIRT NUMBER?\n"+
               "A.10\n"+
               "B.7\n"+
               "C.18\n"+
               "D.17\n"+
               "TYPE YOUR OPTION: "+ " ",
    answer:"B"
},


            
]
for(var i=0;i<questions.length;i++)
{
  msd= questions[i];
  quiz(msd.question,msd.answer)
}

console.log(chalk.blue("LIST OF HIGH SCORES:"));
var highscores=[
  {
    name: "IJAS",
    score: "11",
  },
  {
    name: "SADHIK",
    score: "11",
  },
]
  for(var i=0;i<highscores.length;i++)
  {
    var p = highscores[i];
    console.log(chalk.yellow("NAME:",p.name));
    console.log(chalk.green("SCORE:",p.score));
  }
