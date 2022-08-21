// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
import { getCubeSolves } from './fetch-utils.js';

const pllAlgorithms = document.getElementById('pll-algorithms');

function renderCubeGrid() {
  const cubeDiv = document.createElement('div');
  cubeDiv.classList.add('div-pll');

  const cube1 = document.createElement('div');
  cube1.classList.add('div1');

  const cube2 = document.createElement('div');
  cube2.classList.add('div2');

  const cube3 = document.createElement('div');
  cube3.classList.add('div3');

  const cube4 = document.createElement('div');
  cube4.classList.add('div4');

  const cube5 = document.createElement('div');
  cube5.classList.add('div5');

  const cube6 = document.createElement('div');
  cube6.classList.add('div6');

  const cube7 = document.createElement('div');
  cube7.classList.add('div7');

  const cube8 = document.createElement('div');
  cube8.classList.add('div8');

  const cube9 = document.createElement('div');
  cube9.classList.add('div9');

  cubeDiv.append(cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9);
  return cubeDiv;
}

async function displayAlgorithms(pllSolve) {
  const cubeGrid = await getCubeSolves(pllSolve);
  const cubeSolves = renderCubeGrid(cubeGrid);
  pllAlgorithms.append(cubeSolves);
}

displayAlgorithms();