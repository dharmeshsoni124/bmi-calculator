let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
     const result=document.getElementById("output");
     let height_st=false,weight_st=false;
     if(height==="" || isNaN(height) || height<=0){
        document.getElementById('height-error').innerHTML="please provide a valid height";
     }
     else{
        document.getElementById('height-error').innerHTML="";
        height_st=true;
     }
     if(weight==="" || isNaN(weight) || weight<=0){
        document.getElementById('weight-error').innerHTML="please provide a valid weight";
     }
     else{
        document.getElementById('weight-error').innerHTML="";
        weight_st=true;
     }

     if(height_st && weight_st){
        const bmi=(weight/(height*height)).toFixed(2)

        if(bmi<16){
            result.innerHTML="Sever Thikness" + bmi;
        }
        else if( bmi=16 && bmi<=17){
            result.innerHTML="Moderate Thiness" + bmi;
        }
        else if( bmi=17 && bmi<=18.5){
            result.innerHTML="Mild Thiness" + bmi;
        }
        else if( bmi=18.5 && bmi<=25){
            result.innerHTML="Normal" + bmi;
        }
        else if( bmi=25 && bmi<=30){
            result.innerHTML="overweight" + bmi;
        }
        else if( bmi=30 && bmi<=35){
            result.innerHTML="obese class 1" + bmi;
        }
        else if( bmi=35 && bmi<=40){
            result.innerHTML="obese class 2" + bmi;
        }
        else if( bmi>40){
            result.innerHTML="obese class 3" + bmi;
        }
     }


})

let clear=document.getElementById("clear");
clear.addEventListener("click",()=>{
    document.getElementById('height').innerHTML="";
    document.getElementById('weight').innerHTML="";
    document.getElementById('age').innerHTML="";
    result.innerHTML="";
})
