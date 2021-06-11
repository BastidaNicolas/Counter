//seting initial count value
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');//selected all the buttons with btn class

//Looping through the buttons in the Node List
btns.forEach(function(btn) {
    
    //Adding event listiners deppending on the class that the event listiner object has
    btn.addEventListener('click', function(e){
       
        const btnClass = e.currentTarget.classList; //returns list of classes that the object that was clicked on has
       
        //setting actions acording to what class the element has
        if(btnClass.contains('decrease')){
            count--;
        }else if(btnClass.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        //Changing color of <span> depending if the number is negative or positive
        if(count > 0){
            value.style.color = 'green'; 
        }else if(count < 0){
            value.style.color = 'red';
        }else{
            value.style.color = '';
        }
        //changes the number in <span> in HTML file acording to the count variable
        value.textContent = count;
    });
});