let header = document.querySelector("header");
let main = document.querySelector("main");
if(main) {
  main.style.paddingTop = header.offsetHeight + "px";
}

let link = document.querySelector(".links");

function menu() {
  link.classList.toggle("active");
}

function toggleDiv(a) {
  a = a.parentNode.parentNode.parentNode
  replybox = a.querySelector('.comment-box')
  if (replybox.style.display === "none") {
    replybox.style.display = "block";
  } else {
    replybox.style.display = "none";
  }
}

let counter = 5;

function updateCounter() {
  const sec_counter = document.querySelector('#sec-counter');
  if (sec_counter && counter >= 0) {
    sec_counter.innerHTML = `You will be redirected to the Home Page after <strong>${counter}</strong> seconds`;
    counter--;

    if (counter >= 0) {
      setTimeout(updateCounter, 1000); // Call updateCounter() after 1 second (1000 milliseconds)
    } else {
      window.location.href = '/';
    }
  }
}

updateCounter();
