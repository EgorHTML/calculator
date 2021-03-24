const out = document.querySelector('output'),
panel = document.querySelector('.panel')
const elemInCulc = [7,8,9,4,5,6,1,2,3,'*',0,'=','+','-','/','C']

elemInCulc.map(symbol=>{
    let btn = document.createElement('button')
    btn.value = symbol
    btn.textContent = symbol
btn.classList.add('btn')
    
    panel.appendChild(btn)
})

const btn = document.querySelectorAll('.btn')
btn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        mathCucl(btn.value)
    })
})

function mathCucl(value){
  
    if(value === '=') out.textContent = eval(out.textContent)
    
    if(value!='=') out.textContent+=value
    if((value == '/' || value == '+' || value == '-' || value == '*')&&(out.textContent.slice(0,1)=='/' || out.textContent.slice(0,1)=='+' || out.textContent.slice(0,1)=='-'|| out.textContent.slice(0,1)=='*')){
        out.textContent = 'выражение неверно'
        setTimeout(()=>{
            out.textContent = ''
        },1000)
    } 
    if((value =='/' ||value == '+' || value =='-'|| value =='*') && (out.textContent.slice(-2,-1)=='/'||out.textContent.slice(-2,-1)=='+'|| out.textContent.slice(-2,-1)=='-'||out.textContent.slice(-2,-1)=='*')){
        let str= out.textContent
       str = str.split('')
        let b = str.pop()
       str =  str.join('')
        console.log(str)
        out.textContent = 'выражение неверно'
         
        setTimeout(()=>{
            out.textContent =str
        },1000)
    }
   
    if(value === 'C') out.textContent = ''
    if(out.textContent.length>29){
        let oldValue = out.textContent
        out.textContent = 'переполнено'
        btn.removeEventListener('click',mathCuclEv)
        
        setTimeout(()=>{
           out.textContent = oldValue  
           oldValue = ''
        },1500)   
       }
    }
 