// const markRead = document.getElementById("mark-as-read");

const reddot = document.querySelectorAll(".red-dot");

const unread1 = document.getElementById("unread-1");
const unread2 = document.getElementById("unread-2");
const unread3 = document.getElementById("unread-3");

function markRead() {
  console.log("funciona");

  unread1.classList.remove("unread");
  unread2.classList.remove("unread");
  unread3.classList.remove("unread");
  reddot.forEach((el) => {
    el.classList.remove("red-dot");
  });
}

function markReadPerId(prop) {
  if (prop === 1) {
    unread1.classList.remove("unread");
  } else if (prop === 2) {
    unread2.classList.remove("unread");
  } else if (prop === 3) {
    unread3.classList.remove("unread");
  }
}
