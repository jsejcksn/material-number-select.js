/* Material Number Select -- v0.4.1 -- https://github.com/jsejcksn/material-number-select.js/ */

(function() {
  'use strict';

  var activeElements = document.getElementsByClassName('mdl-number-select'),
    bodyClassName = document.body.className,
    firstChildClass,
    scrollDist = 0,
    selectedElement,
    wrapper;

  // Cancels number select input view
  function cancelSelect() {
    console.log('Selection canceled');
    // this.removeEventListener('click', cancelSelect); // Not needed?
    restoreClass();
    window.scrollTo(0, scrollDist);
    document.getElementById('mdl-number-select-input').remove();
  }

  // Primary function: Construct number select input view
  function numberSelect(element) {
    selectedElement = element;
    var selectedOptions = selectedElement.options;
    scrollDist = document.body.scrollTop;
    selectedElement.blur(); // Prevents default iOS number wheel
    selectedElement.setAttribute('disabled', 'disabled'); // Safeguard
    wrapper.className += ' mdl-no-scroll'; // Keep body from scrolling underneath input view
    document.body.className += ' mdl-expand'; // Make body bg-color match input view and expand height to full viewport
    window.scrollTo(0, 0);

    // Create view
    var numberInput = document.createElement('div');
    numberInput.setAttribute('id', 'mdl-number-select-input');
    numberInput.className = 'mdl-number-select-input';
    document.body.appendChild(numberInput);

    // Create cancel button
    var btn = document.createElement('button');
    var txtNode = document.createTextNode('✕');
    btn.appendChild(txtNode);
    btn.className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-number-select-input-cancel';
    componentHandler.upgradeElement(btn);
    document.getElementById('mdl-number-select-input').appendChild(btn);
    btn.addEventListener('click', cancelSelect);

    // Populate with options from select element
    for (var i = 0; i < selectedOptions.length; i++) {
      var button = document.createElement('button');
      var textNode = document.createTextNode(selectedOptions[i].text);
      button.value = selectedOptions[i].value;
      button.appendChild(textNode);
      button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect mdl-number-select-input-option';
      componentHandler.upgradeElement(button);
      numberInput.appendChild(button);
      button.addEventListener('click', returnNum);
    }
    selectedElement.removeAttribute('disabled'); // Remove safeguard
  }

  // Restore scrolling to body
  function restoreClass() {
    document.body.className = bodyClassName;
    wrapper.className = firstChildClass;
  }

  // Return selection from number input view
  function returnNum() {
    console.log(this.value + ' selected');
    // var btns = document.querySelectorAll('#mdl-number-select-input > button'); // Not needed?
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].removeEventListener('click', returnNum);
    // }
    selectedElement.value = this.value;
    restoreClass();
    window.scrollTo(0, scrollDist);
    document.getElementById('mdl-number-select-input').remove();
  }

  // Add event listener to each select element having class="mdl-number-select"
  for (var i = 0; i < activeElements.length; i++) {
    activeElements[i].addEventListener('mousedown', function(e) {
      e.preventDefault();
      numberSelect(this);
    });
  }

  // Wrap body contents into containing <div>
  (function() {
    var div = document.createElement("div");

    // Move the body's children into this wrapper
    while (document.body.firstChild) {
      div.appendChild(document.body.firstChild);
    }

    // Append the wrapper to the body
    document.body.appendChild(div);
    wrapper = div;
    firstChildClass = wrapper.className;
  }());

  // Add CSS to <head>
  (function() {
    var head = document.head,
      style = document.createElement('style'),
      css = '.mdl-expand {background-color: #efefef;height: 100%;} .mdl-no-scroll {height: 0;overflow: hidden;width: 0;} .mdl-number-select-input {background-color: #efefef;height: 100%;margin: 0;padding: 0;width: 100%;} .mdl-number-select-input-cancel {background-color: #cc0000;color: #efefef;height: 64px;} .mdl-number-select-input-option {height: 64px;}';

    style.innerHTML = css;
    head.appendChild(style);
  }());

}());
