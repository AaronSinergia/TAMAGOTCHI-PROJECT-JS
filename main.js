function heNeedsFood() {
  const getPreElement = document.getElementsByTagName('pre')[0];

  getPreElement.textContent = `
          (0.o) ??
         /(🥓)\\
           / \\
  `;
}
setTimeout(heNeedsFood, 3000);

function heNeedstoDrink() {
  const getPreElement = document.getElementsByTagName('pre')[0];

  getPreElement.textContent = `
            (0.o) ??
           /(🥛)\\
             / \\
    `;
}
setTimeout(heNeedstoDrink, 7000);

const optionsBar = () => {
  const optionsDiv = document.createElement('div');
  const buttonBarEat = document.createElement('button');
  const buttonBarDrink = document.createElement('button');
  const buttonBarKeepCalm = document.createElement('button');

  //   buttonBarEat.classList.add('food_button');
  //   buttonBarDrink.classList.add('drink_button');
  //   buttonBarKeepCalm.classList.add('keep_calm_button');

  buttonBarEat.textContent = 'Dame de Comer';
  buttonBarDrink.textContent = 'Dame de Beber';
  buttonBarKeepCalm.textContent = 'Deja de darme más faena, renuncio!';

  optionsDiv.appendChild(buttonBarEat);
  optionsDiv.appendChild(buttonBarDrink);
  optionsDiv.appendChild(buttonBarKeepCalm);

  buttonBarEat.addEventListener('click', function () {
    const getPreElement = document.getElementsByTagName('pre')[0];

    getPreElement.textContent = `
                (o.-)
              /(Full)\\
                / \\  
      `;

    setTimeout(() => {
      getPreElement.textContent = `
        (0.o) ??
       /(🥓)\\
         / \\
`;
    }, 3000);
  });

  buttonBarDrink.addEventListener('click', function () {
    const getPreElement = document.getElementsByTagName('pre')[0];

    getPreElement.textContent = `
                (-.o)
              /(Full)\\
                / \\  
      `;

    setTimeout(() => {
      getPreElement.textContent = `
        (0.o) ??
       /(🥛)\\
         / \\
  `;
    }, 3000);
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
