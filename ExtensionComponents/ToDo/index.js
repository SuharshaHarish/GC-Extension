const todoContent = document.getElementsByClassName("content-todo");
const wallContent = document.getElementsByClassName("content-wall");
const noteContent = document.getElementsByClassName("content-note");

// Display todo contents initially

const displayContent = (content) => {
  const x = document.querySelector(`.content-${content}`);
  console.log(x.style.display);
  x.style.display = "block";
};
