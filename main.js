let currentTamagotchiState = randomTamagotchiState();
let continueExecuting = true;

function randomTamagotchiState() {
  const randomNum = Math.random();
  return randomNum < 0.5 ? 'heNeedsFood' : 'heNeedsToDrink';
}

function changeTamagotchiState() {
  const actions = randomTamagotchiState();
  const getPreElement = document.getElementsByTagName('pre')[0];

  if (!continueExecuting) {
    return;
  }

  // si currentTamagotchiState es exactamente igual que actions
  if (currentTamagotchiState === actions) {
    if (actions === 'heNeedsFood') {
      getPreElement.innerHTML = printChapter('heNeedsFood', true);
    } else {
      getPreElement.innerHTML = printChapter('heNeedsToDrink', true);
    }
  }
}
setInterval(changeTamagotchiState, 1000);

function doSomething(whatHeNeeds) {
  if (currentTamagotchiState === whatHeNeeds) {
    const getPreElement = document.getElementsByTagName('pre')[0];
    getPreElement.textContent = printChapter(whatHeNeeds);
    currentTamagotchiState = randomTamagotchiState();

    const errorElementMsg = document.getElementsByClassName('error-message')[0];
    if (heNeedstoDrink) errorElementMsg.remove();
  } else {
    const notTheCorrectButton = document.createElement('div');
    notTheCorrectButton.className = 'error-message';
    notTheCorrectButton.innerHTML =
      '<h3>(No puedes darme eso en este momento!!)</h3>';
    document.body.appendChild(notTheCorrectButton);
    setTimeout(() => {
      notTheCorrectButton.remove();
    }, 2000);
  }
}

function printChapter(whatHeNeeds, heReallyNeeds) {
  if (whatHeNeeds === 'heNeedsFood') {
    if (heReallyNeeds) {
      return `
   (0.o) ??
  /(🥓)\\
    / \\
  `;
    } else {
      return `
    (o.-)
  /(Full)\\
    / \\  
          `;
    }
  } else {
    if (heReallyNeeds) {
      return `
    (o.0) ??
  /(🥛)\\
    / \\
      `;
    } else {
      return `
    (-.0)
  /(Full)\\
    / \\  
          `;
    }
  }
}

const optionsBar = () => {
  const optionsDiv = document.createElement('div');
  const buttonBarEat = document.createElement('button');
  const buttonBarDrink = document.createElement('button');
  const buttonBarKeepCalm = document.createElement('button');

  optionsDiv.classList.add('options_bar');
  buttonBarEat.classList.add('food_button');
  buttonBarDrink.classList.add('drink_button');
  buttonBarKeepCalm.classList.add('keep_calm_button');

  buttonBarEat.textContent = 'Dame de Comer';
  buttonBarDrink.textContent = 'Dame de Beber';
  buttonBarKeepCalm.textContent = 'Deja de darme más faena, renuncio!';

  optionsDiv.appendChild(buttonBarEat);
  optionsDiv.appendChild(buttonBarDrink);
  optionsDiv.appendChild(buttonBarKeepCalm);

  // BOTON DAR COMIDA
  buttonBarEat.addEventListener('click', () => doSomething('heNeedsFood'));

  // BOTON DAR BEBIDA
  buttonBarDrink.addEventListener('click', () => doSomething('heNeedsToDrink'));

  // BOTON DAR MUERTE
  buttonBarKeepCalm.addEventListener('click', function () {
    const getPreElement = document.getElementsByTagName('pre')[0];

    getPreElement.textContent = `
    (-.-) 
  /(🔪)\\
  / \\
      `;
    continueExecuting = false;
  });

  document.body.appendChild(optionsDiv);
};

optionsBar();
