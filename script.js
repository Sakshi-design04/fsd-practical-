document.getElementById("gradeform").addEventListener("submit" , function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let total = m1+m2+m3;
    let percentage = (total/300)*100;
    let grade;
    if(percentage>90)
    {
        grade = "A";
    }
    else if(percentage >80)
    {
        grade = "B";
    }
    else if(percentage>60)
    {
        grade = "C";
    }
    else if(percentage>40)
    {
        grade = "D";
    }
    
    else{
        grade = "Fail";
    }
    document.getElementById("result").innerHTML = "Name: " + name + "<br>" + 
                                                    "Total : " + total + "/300<br>" + 
                                                    "Percentage: " + percentage.toFixed(2) + "%<br>"+
                                                    "Grade" + grade

});