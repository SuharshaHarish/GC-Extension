// (onNewtabLaunch = () => {
//   chrome.storage.sync.get(null, (res) => {
//     Object.keys(res).map((key) => {
//       updateDOM(key, res[key]);
//     });
//   });
//   chrome.storage.onChanged.addListener((changes) => {
//     let key = Object.keys(changes)[0];
//     updateDOM(key, changes[key].newValue);
//   });
// })();

const getTime = () => {
  const time = new Date().getHours();

  switch (time) {
    case time > 5 && time < 12: {
      return "morning";
    }
    case time < 20:
      return "evening";
      break;
    default:
      return "night";
  }
};

(displayImageWall = () => {
  const imageName = {
    morning: [
      "meditate",
      "coffe",
      "breakfast",
      "yoga",
      "flowers",
      "birds",
      "lake",
      "nature",
      "love",
      "relationship",
      "morning",
    ],
    evening: [
      "book",
      "sleep",
      "love",
      "night",
      "moon",
      "stars",
      "night sky",
      "balence",
      "win",
    ],
    night: [
      "book",
      "sleep",
      "love",
      "night",
      "moon",
      "stars",
      "night sky",
      "balence",
      "win",
      "calm",
      "lamp",
      "happy",
      "smile",
      "peace",
    ],
  };

  const toShowImage = imageName[getTime()];

  // For picking a random word Image from the array of Image
  const randomImage =
    toShowImage[Math.floor(Math.random() * toShowImage.length)];

  document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${randomImage})`;
})();

(displayQuote = () => {
  const quote = fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then(({ content, author }) => {
      document.getElementById("quote").innerText = `'${content}'`;
      document.getElementById("author").innerText = `~${author}`;
    });
})();

// const updateDOM = (key, value) => {
//   switch (key) {
//     case "textColor":
//       document.body.style.color = value;
//       break;
//     case "backgroundColor":
//       document.body.style.backgroundColor = value;
//       break;
//     case "userInspiration":
//       document.querySelector("#inspirationa-quote").innerHTML = value;
//       document.querySelector("#author").style.display = "none";
//       break;
//     default:
//       return;
//   }
// };
