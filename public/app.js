// console.log(localStorage)

 

//let count =  localStorage.getItem('count') || 0;



  document.getElementById("count-value1").textContent = localStorage.getItem('count') || 0;

        var resetButton = document.getElementsByClassName('reset')

        for (var i = 0; i < resetButton.length ; i++ ){
             var resbutton = resetButton[i];

             resbutton.addEventListener('click', function(event){
                event.preventDefault();
                var buttonClicked = event.target;
                
                var input = buttonClicked.parentElement.children[1].children[0];
                

                console.log(input)
                var inputValue = parseInt(input.textContent);
                var newValue = 0;
                input.textContent = parseInt(newValue);
                localStorage.setItem('count', newValue);
            })
        }

var countButton = document.getElementsByClassName('counter-btn');

for(var i = 0; i < countButton.length; i++){
    var button  = countButton[i];
    button.addEventListener('click',function(event){
        event.preventDefault();
        var buttonClicked = event.target;
        

        var input = buttonClicked.parentElement.children[1].children[0];
       
        var inputValue = parseInt(input.textContent);
       

          var newValue = inputValue +1;
         

          input.textContent = parseInt(newValue);

          localStorage.setItem('count', newValue);
    })
    }