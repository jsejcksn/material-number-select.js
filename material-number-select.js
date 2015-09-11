/* Material Number Select */

var mdlNumberSelect = (function() {
  'use strict';

  var bodyClassName = document.body.className,
    activeElements = document.getElementsByClassName('mdl-number-select'),
    selectedElement = '';

  // Cancels number select input view
  function cancelSelect() {
    console.log('Selection canceled');
    // this.removeEventListener('click', cancelSelect); // Not needed?
    document.body.className = bodyClassName; // Restore scrolling to body
    document.getElementById('number-select-input').remove();
  }

  // Primary function: Construct number select input view
  function numberSelect(element) {
    selectedElement = element;
    var selectedOptions = selectedElement.options;
    selectedElement.blur(); // Prevents default iOS number wheel
    selectedElement.setAttribute('disabled', 'disabled'); // Safeguard
    document.body.className += ' no-scroll'; // Keep body from scrolling underneath input view

    // Create view
    var numberInput = document.createElement('div');
    numberInput.setAttribute('id', 'number-select-input');
    numberInput.className = 'number-select-input';
    document.body.appendChild(numberInput);

    // Create cancel button
    var btn = document.createElement('button');
    var txtNode = document.createTextNode('✕');
    btn.appendChild(txtNode);
    btn.className = 'mdl-button mdl-js-button mdl-js-ripple-effect number-select-input-cancel';
    componentHandler.upgradeElement(btn);
    document.getElementById('number-select-input').appendChild(btn);
    btn.addEventListener('click', cancelSelect);

    // Populate with options from select element
    for (var i = 0; i < selectedOptions.length; i++) {
      var button = document.createElement('button');
      var textNode = document.createTextNode(selectedOptions[i].text);
      button.value = selectedOptions[i].value;
      button.appendChild(textNode);
      button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect number-select-input-option';
      componentHandler.upgradeElement(button);
      numberInput.appendChild(button);
      button.addEventListener('click', returnNum);
    }
    selectedElement.removeAttribute('disabled'); // Remove safeguard
  }

  // Return selection from number input view
  function returnNum() {
    console.log(this.value + ' selected');
    // var btns = document.querySelectorAll('#number-select-input > button'); // Not needed?
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].removeEventListener('click', returnNum);
    // }
    selectedElement.value = this.value;
    document.body.className = bodyClassName; // Restore scrolling to body
    document.getElementById('number-select-input').remove();
  }

  // Add event listener to each select element having class="mdl-number-select"
  for (var i = 0; i < activeElements.length; i++) {
    activeElements[i].addEventListener('click', function() {
      numberSelect(this);
    });
  }

  return {};

})();
