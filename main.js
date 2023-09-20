let currentTamagotchiState = randomTamagotchiState();

function randomTamagotchiState() {
  const randomNum = Math.random();
  return randomNum < 0.5 ? 'heNeedsFood' : 'heNeedsToDrink';
}

function changeTamagotchiState() {
  const actions = randomTamagotchiState();

  if (currentTamagotchiState === actions) {
    currentTamagotchiState = actions;

    if (actions === 'heNeedsFood') {
      heNeedsFood();
    } else {
      heNeedstoDrink();
    }
  }
}

setInterval(changeTamagotchiState, 1000);

function heNeedsFood() {
  const getPreElement = document.getElementsByTagName('pre')[0];

  getPreElement.textContent = `
          (0.o) ??
         /(🥓)\\
           / \\
  `;
}

function heNeedstoDrink() {
  const getPreElement = document.getElementsByTagName('pre')[0];

  getPreElement.textContent = `
            (o.0) ??
           /(🥛)\\
             / \\
    `;
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

  buttonBarEat.addEventListener('click', function () {
    const errorElementMsg = document.getElementsByClassName('error-message')[0];
    if (currentTamagotchiState === 'heNeedsFood') {
      const getPreElement = document.getElementsByTagName('pre')[0];
      getPreElement.textContent = `
                  (o.-)
                /(Full)\\
                  / \\  
        `;
      currentTamagotchiState = randomTamagotchiState();
      if (heNeedstoDrink) errorElementMsg.remove();
    } else {
      const notTheCorrectButton = document.createElement('div');
      notTheCorrectButton.classList.add('error-message');
      notTheCorrectButton.innerHTML =
        '<h3>No puedes darme eso en este momento!!</h3>';
      document.body.appendChild(notTheCorrectButton);
    }
  });

  buttonBarDrink.addEventListener('click', function () {
    const errorElementMsg = document.getElementsByClassName('error-message')[0];

    if (currentTamagotchiState === 'heNeedsToDrink') {
      const getPreElement = document.getElementsByTagName('pre')[0];
      getPreElement.textContent = `
                  (-.o)
                /(Full)\\
                  / \\  
        `;
      currentTamagotchiState = randomTamagotchiState();
      if (heNeedsFood) errorElementMsg.remove();
    } else {
      const notTheCorrectButton = document.createElement('div');
      notTheCorrectButton.innerHTML =
        '<h3>No puedes darme eso en este momento!!</h3>';
      document.body.appendChild(notTheCorrectButton);
    }
  });

  buttonBarKeepCalm.addEventListener('click', function () {
    const getPreElement = document.getElementsByTagName('pre')[0];

    getPreElement.textContent = `
                  (-.-) 
                /(🔪)\\
                / \\
      `;
  });
  document.body.appendChild(optionsDiv);
};

optionsBar();
