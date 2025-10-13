document.addEventListener('DOMContentLoaded', () => {

    const mt = document.querySelector('.menu-toggle');
    const mb = document.querySelector('.mb');
    if (mt && mb) {
      mt.addEventListener('click', () => {
        mb.classList.toggle('down');
        mb.classList.toggle('up');
      });
    }
  
    const actionDivs = document.querySelectorAll('.actions div');
    if (actionDivs.length) {
      actionDivs.forEach(div => {
        div.addEventListener('click', () => {
          const href = div.getAttribute('data-href');
          if (href) {
            const host = window.origin;
            window.location.href = `${host}/${href}`;
          }
        });
      });
    }
  
    const prices = {
      'maize': 70,
      'grinded maize': 70,
      'corn maize': 130,
      'rice': 120,
      'ndengu': 225,
      'ground nuts': 250,
      'beans': 125,
      'cassava': 125,
      'sorghum': 125,
      'unga(maize flour)': 'Grade 1 : (80 Ksh) Grade 2 : (70 Ksh), '
    };
  
    const goods = document.querySelectorAll('.goods .div');
    const gSpan = document.getElementById('gSpan');
    const checkoutImg =  document.querySelector('.checkoutImg');
  
    if (goods.length && gSpan) {
        goods.forEach(good => {
          good.addEventListener('click', () => {
            let text = good.textContent?.trim();
         
            let computed = window.getComputedStyle(good);
            let bgImage = computed.backgroundImage;
            
            let img = '';
            if (bgImage && bgImage.includes('url')) {
              img = bgImage.slice(5, -2); 
              checkoutImg.src = img
            }
      
            if (text) {
              gSpan.textContent = text;
              toggleOverlay();
              setPriceAndUpdate(text);
              if(text == 'Unga(Maize Flour)'){
                showGrades()
              }
            }
          });
        });
      }
      function showGrades(){
        let grades = document.getElementById('grades')
        grades.classList.add('flex')
        grades.classList.remove('none')
      }
      function removeGrades(){
        let grades = document.getElementById('grades')
        grades.classList.remove('flex')
        grades.classList.add('none')
      }

  
    function toggleOverlay() {
      const ov = document.querySelector('.overlay');
      const inner = document.querySelector('.innerOverlay');
      if (ov) {
        ov.classList.toggle('flex');
        ov.classList.toggle('none');

      }
      ov.addEventListener('click', (e)=>{
        if(ov.classList.contains("flex") && e.target != inner && !inner.contains(e.target)){
            ov.classList.toggle('none')
            ov.classList.toggle('flex')
            removeGrades()
        }
      })
    }
  
    function setPriceAndUpdate(item) {
      const input = document.querySelector("input[type='number']");
      const price = prices[item.toLowerCase()];
      const priceSpan = document.getElementById('kgAmount');
      if (priceSpan) {
        priceSpan.textContent = price !== undefined ? price : 'N/A';
      }
      if (input) {
        updateText(item, input.value);
      }
    }
  
    function updateText(item, kgs) {
      const kgSpan = document.getElementById('kgs');
      const goodSpan = document.getElementById('good');
      if (kgSpan) kgSpan.textContent = kgs;
      if (goodSpan) goodSpan.textContent = item;
    }
  
    // Setup quantity input logic
    const quantityForms = document.querySelectorAll(".quantityForm");
    if (quantityForms.length) {
      quantityForms.forEach(form => {
        const minus = form.querySelector("input[value='-']");
        const plus = form.querySelector("input[value='+']");
        const input = form.querySelector("input[type='number']");
  
        if (input) {
          input.addEventListener('input', () => {
            const item = document.getElementById('gSpan')?.textContent;
            if (item) updateText(item, input.value);
          });
        }
  
        if (minus && input) {
          minus.addEventListener("click", () => {
            input.stepDown();
            input.dispatchEvent(new Event('input'));
          });
        }
  
        if (plus && input) {
          plus.addEventListener("click", () => {
            input.stepUp();
            input.dispatchEvent(new Event('input'));
          });
        }
      });
    }
  });
  
  function copyToClipboard() {
    const cartElement = document.getElementById('checkoutText');
    if (cartElement) {
      const range = document.createRange();
      range.selectNode(cartElement);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
      }
  
    }
  }
  
  function prepareSend() {
    copyToClipboard();
  
    const cartText = document.getElementById("checkoutText")?.textContent || "No message";
    const whatsappURL = `https://wa.me/254717233222?text=${encodeURIComponent(cartText)}`;
    const popup = window.open(whatsappURL, "_blank");
  
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      alert("Pop-up blocked! Please allow pop-ups for this site.");
    }
  }
  
  function proceed() {
    copyToClipboard();
    setTimeout(prepareSend, 1000);
  }
  
  function add(grade, btnId) {
    let ctext = document.getElementById('c-text');
    if (ctext) {
      ctext.textContent = grade;
    } else {
      console.warn('Element with ID "c-text" not found!');
    }
  
    let btn = document.querySelector(`#${btnId}`);
    if (btn) {
      btn.classList.toggle('active');
    } else {
      console.warn(`Button with ID "${btnId}" not found!`);
    }
  }
  
          document.addEventListener('DOMContentLoaded', ()=>{
        const lis = document.querySelectorAll(' ul li')
        lis.forEach(li=>{
            li.addEventListener('click', ()=>{
                let href = li.getAttribute('data-href');
                if(href){
                    window.location.href = href
                }
            })
        })
        })