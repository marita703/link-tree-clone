// with this line of code, it selects all the buttons that has this class and when I console log, then I will see an array of buttons
const shareButtons = document.querySelectorAll('[class="tile__share-button"]');
console.log(shareButtons);

async function copyText(event) {
  // prevent button going to the site
  event.preventDefault();
  //   the property "this" means, wherever you click in this event inside of the listener
  const link = this.getAttribute("link");
  console.log(link);

  // await is only going to live inside of async functions
  try {
    await navigator.clipboard.writeText(link);
    alert("copied the text: " + link);
  } catch (err) {
    console.log(err);
  }
}

// This line of code, adds a listener for each position of the array of buttons
shareButtons.forEach((shareButtons) =>
  shareButtons.addEventListener("click", copyText)
);

// Now I am going to do the same with the share button... but this time in a code that is understandable for my actual level now

const pricipalShareButton = document.querySelector(".share-button");

pricipalShareButton.addEventListener("click", () => {
  console.log("I clicked!");
  copyMyURL();
});

// now I am going to create a function that copies the text in the atribute that I created my self in the tag share-button called link

async function copyMyURL() {
  const link = pricipalShareButton.getAttribute("link");
  console.log(link);

  // Now I am going to add the try and catch function that only can live in a async function:

  try {
    await navigator.clipboard.writeText(link);
    alert("copied the text: " + link);
  } catch (err) {
    console.log(err);
  }
}
