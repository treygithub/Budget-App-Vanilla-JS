//budget controller
let budgetController = ( ()=>{
   
    let Expense = function(id,description,value){
      this.id = id,
      this.description = description,
      this.value = value
    }
    let Income = function(id,description,value){
      this.id = id,
      this.description = description,
      this.value = value
    }

   const data = {
     allItems:{
       exp:[],
       inc:[]
     },
     totals:{
       exp:0,
       inc:0
     }
   }

   return{
     addItem:((type,des,val)=>{

       var newItem, ID;

       //Creat new ID
       if(data.allItems[type].length > 0 ){
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
       } else{
         ID = 0
       }

       //Creat new item/object based on inc or exp value aka type
        if(type === 'exp'){
          newItem = new Expense(ID,des,val);
        } else if(type === 'inc'){
          newItem = new Income(ID,des,val);
        }

        //push new item into data object
        data.allItems[type].push(newItem);

        //return new item
        return newItem;
     }),
     testing: function(){
       console.log('data', data)
     }
   }

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

  var setupEventListner = ()=>{

    var DomStr = UICtrl.getDomStrings();

    document.querySelector(DomStr.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', event =>{
  
      if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
  
    });

  }

  var ctrlAddItem = ()=>{

    let input, newItem;

    //get field input data
    input = UICtrl.getInput();

    //add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //add the item to the ui

    //calculate the budget

    //display the budget on the ui

  }

  return{
    init: ()=>{
      console.log('App is fired up!');
      setupEventListner();
    }
  }

})(budgetController,UIController);


controller.init();