import { charactersSort } from "../app";

//Тест для проверки функции charactersSort сортировки массива characters, в app.js
test('testing the sorting function charactersSort', () => {
    const sourceArray = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},      
      ];

      const resultingArray = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},       
      ];

   
    const result = charactersSort(sourceArray);
  
    expect(result).toEqual(resultingArray);
  });
