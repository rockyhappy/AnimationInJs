const y = document.getElementsByClassName("anim");

const str1 = "GET READY TO PLAY";
const str2 = "READY";

const str3="SET";
const str4="GO";


animateText(str1, 100, str2, 1000);
setTimeout(()=>{
  animateText(str3, 100, str4, 1000);

},8000);

function animateText(text, interval1, nextText, interval2) {
  y[0].innerHTML = "";
  let i = 0;

  const aayega = setInterval(() => {
    if (i <= text.length) {
      y[0].innerHTML = text.substring(0, i);
      i++;
    } else {
      clearInterval(aayega);

      setTimeout(() => {
        let j = text.length;
        const jayega = setInterval(() => {
          if (j >= 0) {
            y[0].innerHTML = text.substring(0, j);
            j--;
          } else {
            clearInterval(jayega);

           
            let k = 0;
            const nextAayega = setInterval(() => {
              if (k <= nextText.length) {
                y[0].innerHTML = nextText.substring(0, k);
                k++;
              } else {
                clearInterval(nextAayega);
                
                  setTimeout(()=>{
                    let l=nextText.length;
                    const nextjayega=setInterval(()=>{
                      if(l>=0)
                      {
                        y[0].innerHTML=nextText.substring(0,l);
                        l--;
                      }else{
                        clearInterval(nextjayega);
                      }
                    },interval1);
                  },1000);


              }
            }, interval1);
          }
        }, interval1);
      }, 1000); 
    }
  }, interval1);
}
