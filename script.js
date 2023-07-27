// Function to add an expense item
function addExpense() {
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
  
    if (amount && description && category) {
      const expenseItem = document.createElement("li");
      expenseItem.classList.add("expense-item");
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", deleteExpense);
  
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", () => editExpense(expenseItem));
  
      const expenseInfo = document.createElement("span");
      expenseInfo.innerHTML = `<strong>Amount:</strong> ${amount}, <strong>Description:</strong> ${description}, <strong>Category:</strong> ${category}`;
  
      expenseItem.appendChild(expenseInfo);
      expenseItem.appendChild(deleteButton);
      expenseItem.appendChild(editButton);
  
      document.getElementById("expense-list").appendChild(expenseItem);
    }
  }
  
  // Function to delete an expense item
  function deleteExpense(event) {
    const item = event.target.parentNode;
    item.remove();
  }
  
  // Function to edit an expense item
  function editExpense(item) {
    const expenseInfo = item.querySelector("span");
    const [amount, description, category] = expenseInfo.innerText.match(/\d+(\.\d{1,2})?|\D+/g);
  
    const editForm = document.createElement("form");
    editForm.innerHTML = `
      <label for="editAmount">Amount:</label>
      <input type="number" id="editAmount" value="${amount}" required>
      
      <label for="editDescription">Description:</label>
      <input type="text" id="editDescription" value="${description}" required>
      
      <label for="editCategory">Category:</label>
      <select id="editCategory" required>
        <option value="fuel" ${category.trim() === 'Fuel' ? 'selected' : ''}>Fuel</option>
        <option value="food" ${category.trim() === 'Food' ? 'selected' : ''}>Food</option>
        <option value="electricity" ${category.trim() === 'Electricity' ? 'selected' : ''}>Electricity</option>
        <option value="movie" ${category.trim() === 'Movie' ? 'selected' : ''}>Movie</option>
      </select>
  
      <button type="button" onclick="saveEdit(this.parentNode.parentNode)">Save</button>
    `;
  
    expenseInfo.style.display = "none";
    item.appendChild(editForm);
  }
  
  // Function to save edited expense item
  function saveEdit(formItem) {
    const expenseInfo = formItem.querySelector("span");
    const editForm = formItem.querySelector("form");
  
    const editedAmount = editForm.querySelector("#editAmount").value;
    const editedDescription = editForm.querySelector("#editDescription").value;
    const editedCategory = editForm.querySelector("#editCategory").value;
  
    if (editedAmount && editedDescription && editedCategory) {
      expenseInfo.innerHTML = `<strong>Amount:</strong> ${editedAmount}, <strong>Description:</strong> ${editedDescription}, <strong>Category:</strong> ${editedCategory}`;
      expenseInfo.style.display = "inline";
  
      formItem.removeChild(editForm);
    }
  }
  
  // Add click event listener to the "Add Expense" button
  const addButton = document.querySelector("input[type='button']");
  addButton.addEventListener("click", addExpense);
  