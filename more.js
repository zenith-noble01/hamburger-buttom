// //const images=document.querySelector(".images")

// const changeImage =(event)=>{
//     document.querySelector(".freeSpace").scr= event.children[0].src;
   
// }

//     let theImages=document.querySelectorAll("#logo");
//     theImages.forEach(function(image){
//         let text =image.getAttribute("alt");
//         let displayedImage = image.getAttribute("src");
//         image.addEventListener("mouseover", function(e){
//             let space= document.querySelector("#space img");
//             space.setAttribute("alt", text);
//             space.setAttribute("src",displayedImage);
//             let p =document.querySelector("#par");
            
//             p.innerHTML=text
//         })
//     })




//for the paint app change the code bellow


    const canvas = document.getElementById('canvas')
 const context= canvas.getContext("2d");

let color =document.querySelector('.color_picker')
 let size = document.querySelector('#size');
 let size_range = size.value;
 let drawing_now;
 let x = 0;
 let y = 0;
 console.log(x, y);

 canvas.addEventListener("mousedown", (event)  => {
   drawing_now = true;
   x = event.offsetX;
   y = event.offsety;

 });
 canvas.addEventListener("mouseup", ()  => {
  drawing_now = false;
  x = undefined;
  y = undefined;
 });

 canvas.addEventListener("mousemove", (event)=> {
   draw(event.offsetX, event.offsetY);
 });
 let paintColor= color.value;
 context.fillStyle = paintColor;
 context.strokeStyle = context.fillStyle;

 const draw = (x2, y2) => {
   if (drawing_now){
     context.beginPath();
     context.arc(x2, y2, size_range, 0,Math.PI*2 );
     context.closePath();
     context.fill();

  drawLine(x,y,x2,y2);
     x = x2;
     y = y2;
      
   }
 }

 const drawLine = (x1, y1, x2, y2) => {
   context.beginPath();
   context.moveTo(x1, y1);
   context.lineTo(x2, y2);
   context.strokeStyle = context.fillStyle;
   context.lineWidth = size_range;
   context.closePath();
   context.stroke();
 }

document.querySelector('.clear').addEventListener('click', function(){
  context.clearRect(0,0, canvas.width, canvas.height)
})


//  function start_drawing(event){
//  drawing_now= true;
//    x = event.offsetX;
//    y = event.offsety;
//    };
//   function stop_drawing(){
//        drawing_now= false;
//        x = undefined;
//        y = undefined;
//         };
  
  
// function draw(x, y){
//      if(drawing_now) {
     // x = event.offsetX;
      //y = event.offsety;
      // function draw(x, y){
        //      if(drawing_now) {context.beginPath();
      // context.arc(x, y, 5, 0, Math.PIE*2 );
      // context.arc(x2, y2, pen_size, 0,Math.PI*2 );
      // context.fillStyle= "red";
      // context.strokeStyle = "red";
      //  let paintcolor = color.value;
       //context.strokeStyle= paintcolor;
       //let penSize = size.value;
       //context.lineWidth= penSize;
    //  context.closePath();
      
      //  context.fill();
     
                // }
  //  }

// function draw(x,y) {
//   if(drawing_now){
//     x = 
//   }
// }

//   canvas.addEventListener("mousedown", start_drawing);
  
//    canvas.addEventListener("mouseup", stop_drawing);

//  canvas.addEventListener("mousemove",draw);

 






// //class Bubbles {
//     constructor(){
//        this.x=10;
//         this.y=5;
//     }
// }
// let bubble= new Bubbles();



//x = event.offsetX;
      //y = event.offsety;
       //context.lineCap= "round";
        //let paintcolor = color.value;
       //context.strokeStyle= paintcolor;
       //let penSize = size.value;
      // context.lineWidth= penSize;
      // context.strokeRect(100, 50, 100, 100)
       //context.stroke();
       //drawLine(x,  y, x2, y2);

       //x= x2;
       //y= y2;
          
         