const funFacts = [
    "Life is what happens when you're busy making other plans.",
    "Every year on your birthday, you get a chance to start new.",
    "Celebrate what you want to see more of.",
    "Take time to celebrate the milestones in your life.",
    "The best way to pay for a lovely moment is to enjoy it."
];


function today(){
    birthday.max =  new Date().toISOString().split("T")[0];
}

function Age(){
    const date = new Date();
    const birthInput = document.getElementById("birthday").value;

    if (!birthInput) {
        alert("Please enter your Birthdate");
        return;
    }
    const birth= new Date(birthInput);
    const found = date.getFullYear()-birth.getFullYear();

    const mon = date.getMonth()- birth.getMonth();
    const dates = date.getMonth()-birth.getMonth();

    

    if(mon < 0 || (mon === 0 && dates < 0) ){
        found--;
        document.getElementById("result").innerHTML = `you are ${found} year old`;
    }
    else{
    document.getElementById('result').innerHTML = `you are ${found} year and ${mon} month old `;
    }
    // they are not good code
        // if(birth.getFullYear()==date.getFullYear() && birth.getMonth() < date.getMonth() && birth.getDate()>=date.getDate()){
        //     document.getElementById("result").innerHTML = `you are 0th year and ${mon} months old`;
        // }else if(birth.getFullYear()<date.getFullYear() && birth.getMonth()<=date.getMonth() && birth.getDate()>=date.getDate()){
        //     document.getElementById("result").innerHTML = `you are 0th year and ${mon} months old`;
        // }else if(birth.getFullYear() < date.getFullYear() && birth.getMonth() <= date.getMonth() && birth.getDate()==date.getDate()){
        //     document.getElementById("result").innerHTML = `you are ${found} year and ${mon} months old`;
        // }else if(birth.getFullYear() < date.getFullYear() && birth.getMonth() <=date.getMonth() && birth.getDate()> date.getDate()){
        //     document.getElementById("result").innerHTML = `you are ${found} year and ${mon==0?0:mon-1} months old`;
        // }else if(birth.getFullYear() < date.getFullYear() && birth.getMonth() <= date.getMonth() && birth.getDate()<date.getDate()){
        //     document.getElementById("result").innerHTML = `your are ${found-1} year and ${mon-1} months old`;
        // }else if(birth.getFullYear() < date.getFullYear() && birth.getMonth()>date.getMonth() ){
        //     document.getElementById("result").innerHTML = `you are ${found - 1} year and ${mon} months old`;
        // }
    
    document.getElementById("fun").innerHTML =  "Facts :" + funFacts[Math.floor((Math.random() * 4) + 1)];
}

function Reset(){
    document.getElementById("birthday").value ='';
    document.getElementById("result").innerHTML = "Please!!  Enter your birthDates";
    document.getElementById("fun").innerHTML  = '';
    
}