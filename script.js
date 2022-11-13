var akanMale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var akanFemale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var dayOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function results() {
    var century =parseInt (document.getElementById("century").value);
    var month =parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year").value);
    var day=parseInt(document.getElementById("monthday").value);
    var date=new Date(year + "/" + month + "/" + day);
    var gender= print();
    var day2=date.getDay();
    var akan; 

    if(day <1 || day >31){
        alert("invalid date");
            return false;
    }
    if (month <1 || month>12){
        alert("Invalid month");
        return false;
    }
    if(year <1900 || year >2030){
            alert("invalid year");
            return false;
    }

    if(gender === "male") {
       var akan =akanMale[day2];
    }else{
            var akan =akanFemale[day2];
    }
            alert("You were born on   " + dayOfTheWeek [day2] + "  and your akan name is " + akan);
}
function print(){
    var gender=document.getElementsByName("gender");
    for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            return(gender[i].value)
        }
    }

}