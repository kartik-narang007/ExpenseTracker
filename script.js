var button = document.querySelector('input[type="button"]');
button.addEventListener('click', addExpense);

function addExpense(e) {
    e.preventDefault();
    // Getting the values
    var expenseValue = document.getElementById('amount').value;
    var category = document.getElementById('category').selectedOptions[0].text;
    var description = document.getElementById('description').value;

    // Creating the display string
    var str = expenseValue + " - " + category + " - " + description + " ";

    // Creating buttons
    var deleteItem = document.createElement('button');
    deleteItem.textContent = 'Delete Item';

    var editItem = document.createElement('button');
    editItem.textContent = 'Edit Item';

    // Create an ul item
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    // Adding all together
    li.textContent = str;

    // Adding buttons to li
    li.appendChild(deleteItem);
    li.appendChild(editItem);

    // Adding li to ul
    ul.appendChild(li);

    // Adding ul to the HTML body
    document.body.appendChild(ul);

    // Make the delete button working
    deleteItem.addEventListener('click', removeItem);

    // Add edit button functionality
    editItem.addEventListener('click', function () {
        var li = this.parentNode;
        var liData = li.textContent.split(' - ');

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

        // Replace li element with the form
        li.innerHTML = '';
        li.appendChild(form);

        // Add form submit event listener
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            var expenseValue = form.elements.amount.value;
            var category = form.elements.category.value;
            var description = form.elements.description.value;

            // Update li element with new data
            var newStr = expenseValue + " - " + category + " - " + description;
            li.textContent = newStr;

            // Recreate delete and edit buttons
            li.appendChild(deleteItem);
            li.appendChild(space1.cloneNode());
            li.appendChild(editItem);

            // Make the delete button working
            deleteItem.addEventListener('click', removeItem);

            // Add edit button functionality again
            editItem.addEventListener('click', function () {
                // Rest of the edit button functionality here
            });
        });
    });
}

function removeItem(e) {
    var li = e.target.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
