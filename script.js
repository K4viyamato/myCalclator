let display = document.querySelector('input[name="display"]');

action = (element)=>{

    let button = document.getElementById(element);
    
    button.addEventListener("click",()=>{

        if(button.value != "AC" && button.value != "BS" && button.value != "="){

            display.value += button.value;
            // alert(button.value)

        }
        else if(button.value=="AC"){

            display.value = "";
        }
        else if(button.value=="BS"){

            display.value = display.value.toString().slice(0,-1);
        }
        else if(button.value=="="){

            display.value = eval(display.value);
        }

    })
    
}

const themeCheckbox = document.getElementById("theme");

const darkcal = document.getElementById("darkcal");
const darksformdiv = document.getElementById("darkformdiv");
const darkdisplay = document.getElementById("darkdisplay");

themeCheckbox.addEventListener("change",()=>{

    if(themeCheckbox.checked){

        // alert("dark")
        document.body.style.backgroundColor="#404040";
        darkcal.classList.add("darkcalculator");
        darksformdiv.classList.add("darkformdiv");
        darkdisplay.classList.add("darkdisplay");
        
    }
    else{
        // alert("light")
        
        document.body.style.backgroundColor="#e0e0e0";
        darkcal.classList.remove("darkcalculator");
        darksformdiv.classList.remove("darkformdiv");
        darkdisplay.classList.remove("darkdisplay");
    }

})

action("allClear");
action("backSpace");
action("point");
action("divide");
action("seven");
action("eight");
action("nine");
action("multi");
action("four");
action("five");
action("six");
action("minus");
action("one");
action("two");
action("three");
action("plus");
action("doubleZero");
action("zero");
action("equal");