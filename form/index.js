document.querySelector("form").addEventListener("submit", todoList);
function todoList() {
    event.preventDefault();

    let itemName = document.querySelector("#name").value;
    let itemQty = document.querySelector("#qty").value;
    let itemPriority = document.querySelector("#priority").value;

    let tr =document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = itemName;

    let td2 = document.createElement("td");
    td2.innerText = itemQty;

    let td3 = document.createElement("td");
    td3.innerText = itemPriority;

    tr.append(td1, td2, td3);

    document.querySelector("tbody").append(tr);
    document.querySelector("#name").value="";
    document.querySelector("#qty").value="";


}