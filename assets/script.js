
// Declare and initialize currentTimeEl
const currentTimeEl = document.querySelector("#currentTime");

// Displays the current date in the header of the page
let currentTime = setInterval(function () {
  let time = dayjs().format("hh:mm:ss A");
  currentTimeEl.textContent = time;
}, 1000);


// Displays current time at header
const currentDayEl = document.querySelector("#currentDay");
const timeBlockContainer = document.querySelector("#time-block-container");
const saveBtnEl = document.querySelectorAll("button");
const textareaEl = document.querySelectorAll("textarea");

console.log(textareaEl);

currentDay = dayjs().format("MMM DD, YYYY");
currentDayEl.textContent = currentDay;

// Click event when user clicks on save buttons
timeBlockContainer.addEventListener("click", (event) => {
  target = event.target;
  console.log(target.tagName);

  // if user click is on the save button, text area and time is saved in localstorage
  if (target == target.parentElement.children[2]) {
    console.log(target.parentElement.children[1].value);
    localStorage.setItem(
      target.parentElement.children[0].textContent,
      target.parentElement.children[1].value
    );


  // if user click is on the save button icon, text area and time is saved in localstorage
} else if (target.tagName == "I") {
  console.log(target.parentElement.parentElement.children[1].value);
  localStorage.setItem(
    target.parentElement.parentElement.children[0].textContent,
    target.parentElement.parentElement.children[1].value
  );
} else return;
});

// Upon reload, textcontent is updated to values in localstorage
textareaEl[0].textContent = localStorage.getItem("9AM");
textareaEl[1].textContent = localStorage.getItem("10AM");
textareaEl[2].textContent = localStorage.getItem("11AM");
textareaEl[3].textContent = localStorage.getItem("12PM");
textareaEl[4].textContent = localStorage.getItem("1PM");
textareaEl[5].textContent = localStorage.getItem("2PM");
textareaEl[6].textContent = localStorage.getItem("3PM");
textareaEl[7].textContent = localStorage.getItem("4PM");
textareaEl[8].textContent = localStorage.getItem("5PM");

// Get the current hour
let currentHour = new Date().getHours();

// Get all time blocks
let timeBlocks = document.querySelectorAll(".time-block");

// Function to highlight the current time block
function highlightCurrentTimeBlock() {
  timeBlocks.forEach((block, index) => {
    let blockHour = 9 + index;

    block.classList.remove('past', 'present', 'future');

    if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour === currentHour) {
      block.classList.add('present');
    } else {
      block.classList.add('future');
    }
  });
}

// Call the function
highlightCurrentTimeBlock();