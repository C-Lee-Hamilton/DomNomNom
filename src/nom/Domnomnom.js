//current issue. when running, the eligibleArray stalls out at the same exact 3 pieces left over, so it never hits 0 again.
export const Domnomnom = (mode) => {
  const destroy = () => {
    //get list of elements on page
    const elementsList = document.querySelectorAll("*");
    const elements = Array.from(elementsList);
    const eligibleArray = [];

    //filter to get an array of indexes that are eligible
    const filters = (element, index) => {
      const testElement = element;
      const typecount = testElement.nodeName;

      //check by nodeName for common things that shouldn't be deleted
      switch (typecount) {
        case "SCRIPT":
        case "HTML":
        case "HEAD":
        case "STYLE":
        case "TITLE":
        case "META":
        case "BODY":
          return false;
      }
      //check if element has been marked exempt in the App.js
      if (testElement.getAttribute("title") === "exempt") {
        return false;
      }

      if (testElement.getAttribute("id") === "root") {
        return false;
      }
      // pushing index to array to keep track of what can be pulled/deleted
      eligibleArray.push(index);
      return true;
    };
    // run filter
    elements.filter(filters);

    //get random number based on length of eligibleArray
    const randomNum = Math.floor(Math.random() * eligibleArray.length);
    //set random from value of index
    const randomselect = eligibleArray[randomNum];
    if (!elements[randomselect]) {
      return false;
    }

    //get the selectedElement from the eligibleArray
    const selectedElement = elements[randomselect];

    if (selectedElement.childElementCount > 0) {
      return false;
    }

    //remove option from eligibleArray
    eligibleArray.splice(randomNum, 1);
    //remove selected element
    selectedElement.remove();

    console.log(eligibleArray);
    console.log(elements);
    if (eligibleArray.length <= 1) {
      console.log("true");
      return true;
    }
    if (mode === "clicker") {
      return true;
    } else return false;
  };

  const destroyOne = () => {
    const intervalId = setInterval(() => {
      const success = destroy();
      if (success) {
        console.log("success");
        clearInterval(intervalId);
      }
    }, 100);
  };
  console.log("complete");
  return destroyOne;
};
