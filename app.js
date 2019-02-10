//budget controller
let budgetController = ( ()=>{
   
    //do something

})();

// UI Controller
let UIController = ( ()=>{

  var DOMstrings ={
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

    return {
      getInput: ()=>{
        return {
          type: document.querySelector(DOMstrings.inputType).value, // value will equal = inc or exp
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
        }
      },
      getDomStrings: ()=>{
        return DOMstrings;
      }
    };

})();

//Global App Controller
let controller = ( (budgetCtrl, UICtrl)=>{

  var DomStr = UICtrl.getDomStrings();

  var ctrlAddItem = ()=>{

    //get field input data
    let input = UICtrl.getInput();
    console.log('input', input);
    //add the item to the budget controller
    //add the item to the ui
    //calculate the budget
    //display the budget on the ui

  }

  document.querySelector(DomStr.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', event =>{

    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }

  });

})(budgetController,UIController);