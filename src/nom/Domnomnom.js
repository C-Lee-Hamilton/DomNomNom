export const Domnomnom = (mode) => {
  //function if mode=clicker
  //destroys one random element without children
  const destroy = () => {
    const elements = document.querySelectorAll("*");
    const randomselect = Math.floor(Math.random() * elements.length);
    if (!elements[randomselect]) {
      return;
    }

    const selectedElement = elements[randomselect];
    const exemptStatus = selectedElement.getAttribute("title");
    if (exemptStatus === "exempt") {
      return;
    }

    const typetest = selectedElement.nodeName;
    switch (typetest) {
      case "SCRIPT":
      case "HTML":
      case "HEAD":
      case "STYLE":
      case "TITLE":
      case "META":
        return;
    }

    if (selectedElement.childElementCount > 0) {
      return;
    }

    selectedElement.remove();
  };

  //function if mode=auto
  //auto destroy elements from the bottom up
  //currently just deletes everything and ignores exemptions
  const massDestroy = () => {
    const elements = document.querySelectorAll("*");

    for (let i = elements.length - 1; i > 0; i--) {
      setTimeout(() => {
        const exemptStatus = elements[i].getAttribute("title");
        const typetest = elements[i].nodeName;
        const valid = () => {
          switch (typetest) {
            case "SCRIPT":
            case "HTML":
            case "HEAD":
            case "STYLE":
            case "TITLE":
            case "META":
            case "BODY":
              return false;
          }

          if (exemptStatus === "exempt") {
            return false;
          }
          return true;
        };
        const isValid = valid();

        if (isValid) {
          elements[i].remove();
        } else {
          console.log("xforce");
        }
      }, 200 * (elements.length - 1 - i));
    }

    console.log(elements);
  };

  //where what to do is chosen
  if (mode === "clicker") {
    return destroy;
  } else return massDestroy;
};
