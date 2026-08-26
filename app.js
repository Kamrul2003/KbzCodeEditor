  const tabs = document.querySelectorAll('.tab'),
        preview = document.querySelector('.previewSrc'),
        cReset = document.querySelector('.commndReset'),
        Doc1 = document.querySelector('.htmlCoder'),
        Doc2 = document.querySelector('.cssCoder'),
        Doc3 = document.querySelector('.jsCoder');
  
  // Click event add koro
  tabs.forEach(n => {
      n.addEventListener('click', function() {
        const BodyData = this.getAttribute("data");
         
        //const  deviceH = window.innerHeight; alert(deviceH);

        tabs.forEach(b => {
          b.style = "background-image: url('light blure.png');";
          b.querySelector('.links').classList.remove('textAnim');
        });
        
          this.querySelector('.links').classList.add('textAnim');
          this.style = "background-image: url('bg.png');";
        
        if(BodyData==='HTML'){
          Doc1.style.display = 'block';
          Doc2.style.display = 'none';
          Doc3.style.display = 'none';
        }else if(BodyData==='CSS'){
          Doc2.style.display = 'block';
          Doc3.style.display = 'none';
          Doc1.style.display = 'none';
        }else if(BodyData==='JS'){
          Doc3.style.display = 'block';
          Doc1.style.display = 'none';
          Doc2.style.display = 'none';
        }
      });
  });
  
  
  
/* ========================================
   CREATE LIVE DOCUMENT
======================================== */
createPreview();
function createPreview() {

    // Get user's HTML
    const html = Doc1.value;

    // Get user's CSS
    const css = Doc2.value;

    // Get user's JavaScript
    const js = Doc3.value;

    /*
        Combine HTML + CSS + JS
        into one complete document.
    */
    const documentCode = `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
          
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `;
  
    /*
        Put the generated document
        inside the iframe.
    */
    preview.srcdoc = documentCode;
}


/* ========================================
   LIVE UPDATE
======================================== */

/*
    Whenever the user types something,
    createPreview() will run.
*/

Doc1.addEventListener("input", createPreview);

Doc2.addEventListener("input", createPreview);

Doc3.addEventListener("input", createPreview);


/*
    Whenever the user Click to Reset,
    createPreview() will run.
*/
cReset.onclick = () =>{
  //HTML Preview
   Doc1.value = `<i>Ex,</i>

<h1>Hellow World</h1>
<p>Welcome to Live Code Editor.</p>`; 

  //CSS Preview
   Doc2.value = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  height: 100vh;
  padding: 100px;
  background: #FFFFFF;
}

i{
  color: #707070;
  font-weight: 1000;
}

h1{
  color: #333;
}

p{
  color: blue;
  font-size: 20px;
  font-weight: 800;
}`; 

//JS Preview
   Doc3.value = `window.onclick = () => {
  alert(' ʜᴇʟʟᴏ(•̀’◡’•̀)ﾉ Brother.');
}`;
   
   createPreview();
}