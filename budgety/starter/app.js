///////////////////////////////////////////////////////////////////////////////
//Basics of Module Pattern. Created 3 modules and the contoller module to interact between other
//two modules

/* var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            add(b);
        }
    }
})();

var UIController = (function () {

})();


var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublicTest: function () {
            console.log(z);
        }
    }
})(budgetController, UIController); */


///////////////////////////////////////////////////////////////////////////////////////////////

//Budget Controller
var budgetController = (function () {


})();



//UI controller
var UIController = (function () {

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function () {

            return {
                //will be either inc or exp
                type: document.querySelector(DOMstring.inputType).value,
                description: document.querySelector(DOMstring.inputDescription).value,
                value: document.querySelector(DOMstring.inputValue).value
            }

        },

        getDOMstring: function () {
            return DOMstring
        }
    }
})();




//event Controller or Global App controller
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstring();

        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }



    var ctrlAddItem = function () {

        // 1. Get The input data
        var input = UICtrl.getInput();
        console.log(input)
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on UI.
    }

    return {
        init: function () {
            setupEventListeners();
        }
    }


})(budgetController, UIController);


controller.init();