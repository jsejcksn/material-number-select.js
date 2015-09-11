/* Material Number Select */

var mdlNumberSelect = (function() {
  'use strict';

  var sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    selectElement = '',
    selection = 0;

  function activate(selectElementID) {
    document.getElementById(selectElementID).addEventListener('click', function() {
      mdlNumberSelect.numberSelect(selectElementID);
    });
  }

  function cancelSelect() {
    console.log('Selection canceled');
    this.removeEventListener('click', cancelSelect);
    document.getElementById('number-select-input').remove();
  }

  function numberSelect(selectElementID) {
    selectElement = document.getElementById(selectElementID);
    var arr = selectElement.options;
    selectElement.blur();
    selectElement.setAttribute('disabled', 'disabled');

    var numberInput = document.createElement('div');
    numberInput.setAttribute('id', 'number-select-input');
    numberInput.className = 'number-select-input';
    document.body.appendChild(numberInput);

    var btn = document.createElement('button');
    var txtNode = document.createTextNode('✕');
    btn.appendChild(txtNode);
    btn.className = 'mdl-button mdl-js-button mdl-js-ripple-effect number-select-input-cancel';
    componentHandler.upgradeElement(btn);
    document.getElementById('number-select-input').appendChild(btn);
    btn.addEventListener('click', cancelSelect);

    for (var i = 0; i < arr.length; i++) {
      var button = document.createElement('button');
      var textNode = document.createTextNode(arr[i].value);
      button.appendChild(textNode);
      button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect number-select-input-option';
      componentHandler.upgradeElement(button);
      numberInput.appendChild(button);
      button.addEventListener('click', returnNum);
    }
    selectElement.removeAttribute('disabled');
  }

  function returnNum() {
    console.log(parseInt(this.innerHTML, 10) + ' selected');
    var btns = document.querySelectorAll('#number-select-input > button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].removeEventListener('click', returnNum);
    }
    selectElement.value = [parseInt(this.innerHTML, 10)];
    document.getElementById('number-select-input').remove();
  }

  return {
    activate: activate,
    numberSelect: numberSelect
  };

})();
