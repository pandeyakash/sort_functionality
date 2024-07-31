//Selecting the container div for appending the user data.
const container = document.querySelector(".container");

// Seleting both the select elements i.e. id and name
const sortId = document.querySelector("#sort-id");
const sortName = document.querySelector("#sort-name");

//Calling getData() function with the base url.
getData(`https://jsonplaceholder.typicode.com/users`);
//Calling sort() function for sort by Id select
sort(sortId);
//Calling sort() function for sort by Name select
sort(sortName);

//This function makes the fetch request and then calls the displayData function for displaying data on to the screen
async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

//This function take the fetched data as input and using forEach() method creates relevant elements and appends them to the container.
function displayData(data) {
  container.innerHTML = "";
  data.forEach((ele) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const id = document.createElement("h2");
    id.textContent = ele.id;

    const name = document.createElement("h3");
    name.textContent = ele.name;

    const email = document.createElement("div");
    email.textContent = ele.email;

    card.append(id, name, email);

    container.append(card);
  });
}

//This function calls the getData() function with the relevant url for sorting.
function sort(sortBy) {
  sortBy.addEventListener("change", function () {
    const sortName = sortBy.name;
    const sortValue = sortBy.value;
    getData(
      `https://jsonplaceholder.typicode.com/users?_sort=${sortName}&_order=${sortValue}`
    );
  });
}
