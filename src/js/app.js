export let characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]


export function charactersSort(arr) {
    arr.sort((a, b) => a.health < b.health ? 1 : -1);
    return arr;
}

charactersSort(characters);

console.log(characters);
   

