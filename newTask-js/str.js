'use strict';

//Создаем элемент textarea и кнопку button с одноименными классами для ввода строки
//Задание: Необходимо реализовать функцию, которая принимает underscore_case и преобразовывает его в camelCase

//Разделитель \n, каждое слово делем на _, перед этим убираем все в ловеркейс.

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
let inputText = document.querySelector('textarea').value;

const buttonInput = document.querySelector('button');

buttonInput.addEventListener('click', function () {
  inputText = inputText.toLowerCase();
  const correctArr = inputText.split('\n');
  for (let str of correctArr) {
    str = str
      .replace(
        str.slice(str.indexOf('_'), str.indexOf('_') + 2),
        str
          .slice(str.indexOf('_'), str.indexOf('_') + 2)
          .replace('_', '')
          .toUpperCase()
      )
      .trim();
    console.log(str);
  }
});
