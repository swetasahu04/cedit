//Retrieve elements
const executeCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");


//setup ace
let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!");';
let consoleMessages=[];
let editorLib = {
    init(){
        //theme
        codeEditor.setTheme("ace/theme/chrome");
        //set language
        codeEditor.session.setMode("ace/mode/javascript");
        codeEditor.session.setMode("ace/mode/c_cpp");
        //set options
        codeEditor.setOptions({
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });
        //set default code
        codeEditor.setValue(defaultCode);

    }
}
//events
executeCodeBtn.addEventListener('click',()=>{
    //get input from code editor
    const userCode = codeEditor.getValue();
    //run the user code
    try{
        new Function(userCode)();
    }catch(err){
        console.error(err);
    }
});
resetCodeBtn.addEventListener('click',()=>{
    //clear ace editor
    codeEditor.setValue(defaultCode);
});
editorLib.init();
//fetching data from api
let callAPi = async () => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '33582e27ccmsh4be0c4315303629p1bc8e4jsn823e53a39a92',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        body:{

        }
    };

    let data = await fetch(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*',
      options
    );
    console.log(data);
  };

  callAPi();