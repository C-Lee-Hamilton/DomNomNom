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

    let j = 0;

    for (let i = 0; i < elements.length - 1; i++) {
      const typetest = elements[i].nodeName;
      const exemptStatus = elements[i].getAttribute("title");
      switch (typetest) {
        case "SCRIPT":
        case "HTML":
        case "HEAD":
        case "STYLE":
        case "TITLE":
        case "META":
        case "BODY":
          j++;
      }
      if (exemptStatus === "exempt") {
        j++;
      }
    }
    console.log(j);

    for (let k = elements.length - 1; k >= j; k--) {
      setTimeout(() => {
        destroy();
      }, 200 * (elements.length - 1 - k));
    }

    console.log("done");
  };

  //where what to do is chosen
  if (mode === "clicker") {
    return destroy;
  } else return massDestroy;
};
