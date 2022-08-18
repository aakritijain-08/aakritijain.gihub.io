const app = document.querySelector("#app");
const delay = ms => new Promise(res=>setTimeout(res, ms));

app.addEventListener("keypress", async function (event){
    if(event.key==="Enter"){
        await delay(150);
        getInputValue();
        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener("click", function(event){
    const input = document.querySelector("input");
    input.focus();
})

async function open_terminal(){
    createText("Welcome To Terminal");
    await delay(500);
    createText("Starting Server ...");
    await delay(800);
    createText("You can give different commands");
    createCode("help","For help");
    createCode("about","To get details about me");
    createCode("all","To see all commands");
    createCode("clear","To clear the terminal");
    await delay(500);
    new_line();
}

function new_line(){
    const p=document.createElement("p");
    const span1= document.createElement("span");
    const span2= document.createElement("span");
    p.setAttribute("class","path");
    p.textContent="# aakriti";
    span1.textContent=" sudo";
    span2.textContent="~/guest";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class","type");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone");
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function removeInput(){
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue(){
    const value = document.querySelector("input").value;
    console.log('value>>>>>>>>',value);
    if(value === "all"){
        trueValue(value);
        createCode("help","For help");
        createCode("about","To get details about me");
        createCode("contact","To contact me");
        createCode("linkedin","To redirect to my webpage");
        createCode("clear","To clear the terminal");
    }
    else if(value === "about"){
        trueValue(value);
        createText("I am Aakriti Jain");
        createText("For more information, visit this link <a href='https://in.linkedin.com/in/aakriti-jain08' target='_blank'>https://in.linkedin.com/in/aakriti-jain08</a>")
    }
    else if(value === "help"){
        trueValue(value);
        createText("Click all to see all commands");
    }
    else if(value === "contact"){
        trueValue(value);
        createText("You can reach me on aakriti.0819@gmail.com");
    }
    else if(value === "linkedin"){
        trueValue(value);
        {window.location.href="https://in.linkedin.com/in/aakriti-jain08";};
    }
    else if(value === "clear"){
        document.querySelector("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelector("section").forEach(e => e.parentNode.removeChild(e));
    }
    else{
        falseValue(value);
        createText(`command not found: ${value}`);
    }
}


function trueValue(value){
    const div=document.createElement("section");
    div.setAttribute("class","type2");
    const i=document.createElement("i");
    i.setAttribute("class","fas fa-angle-right icone");
    const mensagem=document.createElement("h2");
    mensagem.setAttribute("class","success");
    mensagem.textContent=`${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function falseValue(value){
    const div=document.createElement("section");
    div.setAttribute("class","type2");
    const i=document.createElement("i");
    i.setAttribute("class","fas fa-angle-righticone error");
    const mensagem=document.createElement("h2");
    mensagem.setAttribute("class","error");
    mensagem.textContent=`${value}`;
    div.appendChild(i);
    div.appendChild(mensagem);
    app.appendChild(div);
}

function createText(text, classname){
    const p = document.createElement("p");
    p.innerHTML=text;
    app.appendChild(p);
}

function createCode(code,text){
    const p = document.createElement("p");
    p.setAttribute("class","code");
    p.innerHTML=`${code}</br><span class='text'>${text}</span>`;
    app.appendChild(p);
}

open_terminal();