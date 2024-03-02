
let inp_dob = document.getElementById("inp");
let btn = document.getElementById("submit");
// today date
let date = new Date();


//for not select future date
inp_dob.max= new Date().toISOString().split("T")[0];

btn.addEventListener("click",()=>{
    let dob= new Date(inp_dob.value);
    
    
    let year = date.getFullYear() - dob.getFullYear();
    
    let month = date.getMonth() - dob.getMonth();
    
    let age_date = date.getDate() - dob.getDate();
    
    if(month < 0 || (month === 0 && dob.getDate() > date.getDate())){
        year-- ;
        month = 12 + date.getMonth() - dob.getMonth();
        month--;
        
        // checking if the year is leap year than 1 day extra in our year so we will subtract 1 in our date 
        if(date.getFullYear()%4 == 0 ){
            
            age_date = 31 - dob.getDate() ;
        }
        else{
            age_date++;
        }
    }
   
  // check if usr enter wrong year 
    if(dob.getFullYear() > date.getFullYear()){
        document.getElementById("text").innerHTML = "invalid Date of Birth";
    }
   
    document.getElementById("month").innerHTML= month;
    document.getElementById("days").innerHTML = age_date;
    
    document.getElementById("year").innerHTML=year;
    
  
  
})
