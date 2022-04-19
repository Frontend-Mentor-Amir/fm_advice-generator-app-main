const ADVICE_SLIP_API = "https://api.adviceslip.com/advice";

async function fetchAdviceSlip() {
  const response = await fetch(ADVICE_SLIP_API);
  const slipObj = await response.json();
  const slip = slipObj.slip;
  return slip;
}

function createAdviceDiv(slip) {
  // Create overall div
  const adviceDiv = document.createElement("div");
  adviceDiv.setAttribute("id", "adviceDiv");
  adviceDiv.classList.add("adviceDiv");

  // create title header
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = `ADVICE #${slip["id"]}`;
  adviceDiv.appendChild(header);

  // create advice text
  const advice = document.createElement("q");
  advice.classList.add("advice");
  advice.textContent = slip["advice"];
  adviceDiv.appendChild(advice);

  // create divider and dice
  const divider = document.createElement("img");
  divider.src = "images/pattern-divider-desktop.svg";
  divider.classList.add("divider");

  const diceWrapper = document.createElement("div");
  diceWrapper.classList.add("diceWrapper");
  const dice = document.createElement("img");
  dice.src = "images/icon-dice.svg";
  diceWrapper.appendChild(dice);
  divider.classList.add("dice");

  adviceDiv.appendChild(divider);
  adviceDiv.appendChild(diceWrapper);

  diceWrapper.addEventListener("click", renderContent);

  // append div to the body
  document.getElementById("adviceDiv").replaceWith(adviceDiv);
  //   document.body.appendChild(adviceDiv);
}

function renderContent() {
  fetchAdviceSlip().then((slip) => createAdviceDiv(slip));
}

renderContent();
