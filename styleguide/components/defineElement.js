var defineElement = function(elementName) {
  var customElementPrototype = Object.create(HTMLElement.prototype);
  customElementPrototype.createdCallback = function() {
    var shadowRoot = this.createShadowRoot();
    var currentScript = document._currentScript ? document._currentScript : document.currentScript;
    var template = currentScript.ownerDocument.getElementById('template').content;
    shadowRoot.appendChild(document.importNode(template, true));
  };
  return document.registerElement(elementName, {prototype: customElementPrototype});

