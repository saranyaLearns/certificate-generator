const form=document.getElementById("form");
const userName=document.getElementById("userName");
const email=document.getElementById("email");


function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim()===""){
            errorInput(input,`${getName(input)} is required`);
        }else{
            successInput(input);
        }
    }); 
}

function getName(input){
    //return input.id;
    return input.getAttribute("data-name");
}

function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error";
    const p=formGroup.querySelector("p");
    p.innerHTML=message;
}
function successInput(input) {
   const formGroup=input.parentElement;
   formGroup.className="form-group success";
   const p=formGroup.querySelector("p");
  p.innerHTML="";
}

function checKLength(input,min,max){
    const data=input.value.trim().length;
    if(data<min){
        errorInput(input,`${getName(input)} must be atleast greater than ${min} characters`);
    }else if(data>max){
        errorInput(input,`${getName(input)} must be atleast lesser than ${max} characters`);
    }else{
        successInput(input);
    }
}



form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([userName,email,contact]);
    checKLength(userName,5,10);
    checkEmail(email);
    checkAlpha(userName);
});


String.prototype.isAlpha=function(){
    return !!this.match(/^[a-zA-Z]*$/);
};

function checkAlpha(input){
    if(!input.value.trim().isAlpha()){
        errorInput(input, `${getName(input)} must be an alphabet `);
    }
}

String.prototype.isEmail=function(){
    return !!this.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
};

function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorInput(input, `${getName(input)} is not a valid`);
    }
}




var data={
    courses: [
      {
          degree: "Under Graduate",
          course: ["B.sc","B.C.A","B.E","B.Tech"]
      },
      {
         degree: "Post Graduate",
         course: ["M.sc","M.C.A","M.E","M.Tech"]
      },
      {
        degree: "Research",
        course: ["M.Phil","P.hD"]
     }  
    ]
}; 


window.onload=function(){
    const selectDegree=document.getElementById("degree");
    const selectCourse=document.getElementById("course");


    selectCourse.disabled=true;
    data.courses.forEach((value)=>{
        selectDegree.appendChild(createOption(value.degree,value.degree));
    });

    selectDegree.addEventListener("change",function(e){
        selectCourse.disabled=false;
        data.courses.forEach((detail,index)=>{
           if(detail.degree==e.target.value){
            selectCourse.innerHTML="";
            selectCourse.append(createOption("Select Course",""));
                data.courses[index].course.forEach((course)=>{
                    selectCourse.append(createOption(course,course));
                });
           }
        });
    });

    function createOption(displayMember,valueMember){
        const newOption=document.createElement("option");
        newOption.value=valueMember;
        newOption.text=displayMember;
        return newOption;
    }

  };



  const uName=document.getElementById("userName");
  const btn=document.getElementById("btnClick");
  const res=document.getElementById("result");
  const deg_name=document.getElementById("degree_name");
  const c_name=document.getElementById("course_name");

  function disp(){
      
     

let txt = document.getElementById("university");
txt.style.textAlign = "center";

var university = document.getElementById('university');
university.innerHTML = '<div><h3>sister university</h3></div>';

var university = document.getElementById('university');
university.innerHTML = '<div><h3>sister university</h3></div>';

var content1 = document.getElementById('content1');
content1.innerHTML = 'This Certifies is held by';
content1.style.textAlign= "center";

res.innerHTML=uName.value;
res.style.textAlign= "center";


var content2 = document.getElementById('content2');
content2.innerHTML = 'has successfully completed';
content2.style.textAlign= "center";


deg_name.innerHTML=degree.value;
deg_name.style.textAlign= "center";

var content3 = document.getElementById('content3');
content3.innerHTML = 'on';
content3.style.textAlign= "center";

c_name.innerHTML=course.value;
c_name.style.textAlign= "center";

var content4 = document.getElementById('content4');
content4.innerHTML = 'Computer Science';
content4.style.textAlign= "center";

}
  btn.addEventListener('click',disp);
