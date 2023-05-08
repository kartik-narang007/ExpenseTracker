var button = document.querySelector('input[type="button"]');

button.addEventListener('click', addExpense);
function addExpense(e) {
    e.preventDefault();
    //getting the values
    var expenseValue = document.getElementById('amount').value;
    var category = document.getElementById('category').selectedOptions[0].text;
    var description = document.getElementById('description').value;
    

    //amount-category-description
    var str = expenseValue + " - " + category + " - " + description + " ";
    
    
    //creating buttons

    var deleteItem = document.createElement('button');
    deleteItem.textContent = 'Delete Item';

    var editItem = document.createElement('button');
    editItem.textContent = 'Edit Item';

    //create an ul item

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    
    //adding all together

    li.textContent = str;

    //adding buttons to li

    li.appendChild(deleteItem);
    li.appendChild(editItem);

    //adding li to ul

    ul.appendChild(li);


    //adding ul to html

    document.body.appendChild(ul);

    //make the delete button working
    deleteItem.addEventListener('click', removeItem);
    function removeItem(e) {
        ul.removeChild(li);
    }

    editItem.addEventListener('click', function() {
        var li = this.parentNode;
        var liData = li.textContent.split(' - ');
        
        // create edit form
        var form = document.createElement('form');
        
        var amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.name = 'amount';
        amountInput.value = liData[0];
        
        var categoryInput = document.createElement('input');
        categoryInput.type = 'text';
        categoryInput.name = 'category';
        categoryInput.value = liData[1];
        
        var descriptionInput = document.createElement('textarea');
        descriptionInput.name = 'description';
        descriptionInput.textContent = liData[2];
        
        var saveButton = document.createElement('button');
        saveButton.type = 'submit';
        saveButton.textContent = 'Save';
        
        form.appendChild(amountInput);
        form.appendChild(categoryInput);
        form.appendChild(descriptionInput);
        form.appendChild(saveButton);
        
        // replace li element with form
        li.innerHTML = '';
        li.appendChild(form);
        
        // add form submit event listener
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // get form data
          var expenseValue = form.elements.amount.value;
          var category = form.elements.category.value;
          var description = form.elements.description.value;
          
          // update li element with new data
          var newStr = expenseValue + " - " + category + " - " + description;
          li.textContent = newStr;
          
          // create delete and edit buttons
          var deleteItem = document.createElement('button');
          deleteItem.textContent = 'Delete Item';
      
          var editItem = document.createElement('button');
          editItem.textContent = 'Edit Item';
      
          li.appendChild(space1);
          li.appendChild(deleteItem);
          li.appendChild(space1.cloneNode());
          li.appendChild(editItem);
      
          // make the delete button working
          deleteItem.addEventListener('click', removeItem);
          function removeItem(e) {
              ul.removeChild(li);
          }
      
          // add edit button functionality
          editItem.addEventListener('click', function() {
            var li = this.parentNode;
            var liData = li.textContent.split(' - ');
            // rest of the code for edit functionality
          });
        });
      });
    }