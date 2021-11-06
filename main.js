const Form = document.querySelector(".addform");
const submitbutton = document.querySelector(".add");
const list = document.querySelector(".list");
const all_li = document.querySelectorAll(".list li");

const lang = navigator.language;

let date = new Date();

let datName = date.toLocaleString(lang, {
    weekday: "long"
});

var total_li = all_li.length;

const generatetemplate = (todo) => {
    const html = `  <li>
      <input type="checkbox" id="todo_${total_li}">
         <label for="todo_${total_li}">
            <span class="check"></span>
             ${todo}
             </label>
            <label class="delete"></label>
        </li> `;
        list.innerHTML += html;
};
function addTodos(e){
    e.preventDefault();
    const todo = Form.addtask.value.trim();
    if (todo.length) {
        total_li = total_li + 1;
        generatetemplate(todo);
        Form.reset();
    }else{
        alert("first type any task");
    }
}
Form.addEventListener("submit", addTodos);
submitbutton.addEventListener("click" , addTodos);

function deletelist(e){
    if (e.target.classlist.contains("delete")) {
        e.target.parentElement.remove();
    }
}
list.addEventListener("click" , deletelist);