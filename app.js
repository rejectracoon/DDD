document.addEventListener('DOMContentLoaded', function () {
    let create = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    let container = document.createElement('div');
    container.classList.add('container');
    
    create.appendChild(btnText);
    document.body.appendChild(create);
    document.body.appendChild(container);
    
    let num=1

    create.addEventListener("click", () => {
        let div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        div.id = num
        div.innerHTML=num
        num++
       
        div.addEventListener("dblclick", function(){
            if(div.id % 2 === 0) {
                div.nextSibling.remove();
            } else {
                console.log("odd")
            }
          }
          )
        


    let colorArray = [
      'yellow',
      'green',
      'blue',
      'red',
      'orange',
      'purple',
      'violet',
      'black',
  ];
  div.addEventListener("click", () => {
  div.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  

}

);
});
});
