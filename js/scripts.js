//Each item will have 3 properties: date due, priority (low, high, urgent), and category (like school, work, home, etc.)
//

function ToDoItem(category, dueDate, complete) {
    this.category = category;
    this.dueDate = dueDate;
    this.complete = false;
}

