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

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

    }
})();



//UI controller
var UIController = (function () {

    var DOMstring = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
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

        addListItem: function (obj, type) {
            var html, newHtml, element;
            //create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace the placeholder text with some acutal value
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%value%', obj.value);
            newHtml = newHtml.replace('%description%', obj.description);


            // insert html to DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function () {
            var fields, fielddArr;
            fields = document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);

            fielddArr = Array.prototype.slice.call(fields);

            fields.forEach(function (current) {
                current.value = "";

            });

            fielddArr[0].focus();

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

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }



    var ctrlAddItem = function () {

        // 1. Get The input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI

        UICtrl.addListItem(newItem, input.type);

        //clear the fields
        UICtrl.clearFields();
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