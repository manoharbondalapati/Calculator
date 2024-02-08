let result=document.getElementById('result')
let inputs =document.getElementsByTagName('button');
let buttonClickAudio = document.getElementById('buttonclick');
let equalClickAudio = document.getElementById('equalclick');

for(i=0;i<inputs.length;i++)
{
    inputs[i].onclick =function()
    {
        let input =this.innerText;
        if (input !== "=") {
            buttonClickAudio.play();
        } else {
            equalClickAudio.play();
        }
        updateDisplay(input);
    }
}

function updateDisplay(input)
{
    let currentinput= result.innerText
    if(currentinput =="0")
    {
        if(input!="C" && input!="DEL" && input !="=")
        {
            result.innerText="";
            result.innerText=input;
          
           
        }
    }
    else 
    {
        if(input=="DEL")
        {
            result.innerText=currentinput.substring(0,currentinput.length-1);
            if(result.innerText=="0")
            {
                result.innerText="0";
            }
        }
        if(input=="C")
        {
            result.innerText="0";
        }
        if(input !="C" && input!="DEL" && input!= "=")
        {
            result.innerText+=input;
        }
        if(input=="=")
        {
            let display=result.innerText
            result.innerText=eval(display)
        }
    }
   
}
