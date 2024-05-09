const data = [
    'python',
    'java',
    'javascript',
    'php',
    'c++',
    'c#',
    'c',
    'kotlin',
    'ruby',
    'swift',
    'go',
    'rust',
    'scala',
    'perl',
    'haskell',
    'matlab'
]

const search = document.getElementById('search');
const output = document.getElementById('output');

search.onkeyup = function(){
    let word = search.value;
    let resault = [];
    if(word.length){
       resault = data.filter((value)=>{
            return value.toLowerCase().includes(word.toLowerCase())
        })
    }
    if(resault.length>0){
      const content =  resault.map((value)=>{
            return `<li onclick="selectChoice(this)">${value}</li>`
        })
        output.innerHTML = `<ul>${content.join("")}</ul>`;
    }else {
        output.innerHTML = '';
    }
}

function selectChoice(word){
    search.value = word.innerHTML;
    output.innerHTML = '';
}