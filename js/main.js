document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");
    const form = document.querySelector(".form");
    const submit = document.querySelector(".submit");
  
   
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  
    submit.addEventListener("click", (e) => {
      e.preventDefault(); 
      inputClear();
    });
  
    function inputClear() {
      let val = input.value;
      if (val.trim() !== "") {
        TEL_NUMBERS.unshift(val); 
        input.value = ""; 
      }
    }
  
    const TEL_NUMBERS = [
      "+998 99 346 05 29",
      "+998 99 088 21 59",
      "+998 99 029 21 50",
      "+998 91 088 21 22",
      "+998 91 606 21 22",
      "+998 91 606 66 08",
      "+998 94 122 66 18",
    ];
  
    btn.addEventListener("click", () => {
      let inputvalue = input.value;
  
      if (inputvalue.trim() !== "") {
        TEL_NUMBERS.unshift(inputvalue);
      }
  
      console.log(TEL_NUMBERS);
  
      btn.setAttribute("disabled", true);
  
      let interval = setInterval(() => {
        let index = Math.floor(Math.random() * TEL_NUMBERS.length);
        title.textContent = TEL_NUMBERS[index];
      }, 50);
  
      setTimeout(() => {
        clearInterval(interval);
        btn.removeAttribute("disabled");
        let finalIndex = Math.floor(Math.random() * TEL_NUMBERS.length);
        title.textContent = TEL_NUMBERS[finalIndex];
      }, 2500);
    });
  });  