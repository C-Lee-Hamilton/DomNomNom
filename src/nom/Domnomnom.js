export const Domnomnom = (mode) => {
  const destroy = () => {
    const elementsList = document.querySelectorAll("*");
    const elements = Array.from(elementsList);
    const randomselect = Math.floor(Math.random() * elements.length);
    if (!elements[randomselect]) {
      return false;
    }

    //scan for number of exemptions
    var i = 0;
    for (let k = 0; k <= elements.length - 1; k++) {
      const testElement = elements[k];
      const typecount = testElement.nodeName;
      switch (typecount) {
        case "SCRIPT":
        case "HTML":
        case "HEAD":
        case "STYLE":
        case "TITLE":
        case "META":
          i++;
      }
      if (testElement.getAttribute("title") === "exempt") {
        i++;
      }
    }
    //
    //end if all eligible elements destroyed
    if (elements.length <= i) {
      console.log("end of list");
      return true;
    }
    //

    const selectedElement = elements[randomselect];
    const exemptStatus = selectedElement.getAttribute("title");
    if (exemptStatus === "exempt") {
      return false;
    }

    const typetest = selectedElement.nodeName;
    switch (typetest) {
      case "SCRIPT":
      case "HTML":
      case "HEAD":
      case "STYLE":
      case "TITLE":
      case "META":
        return false;
    }

    if (selectedElement.childElementCount > 0) {
      return false;
    }

    selectedElement.remove();

    if (mode === "clicker") {
      return true;
    } else return false;
  };

  const destroyOne = () => {
    const intervalId = setInterval(() => {
      const success = destroy();
      if (success) {
        clearInterval(intervalId);
        console.log("success");
      }
    }, 100);
  };

  return destroyOne;
};
