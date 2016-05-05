/* jshint devel:true */
/* globals Chatty */
'use strict';

(function() {
  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function(event){
    if (event.which === 13) {
      Chatty.addMessage("message-box", userInput.value);
      userInput.value = "";
      clearButton.disabled = false;
    }
  });

  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", function(){
    console.log("clearButton");
    Array.from(document.getElementsByClassName("message")).forEach(function(element) {
      Chatty.removeElement(element.id);
    });
    clearButton.disabled = true;
  });

  var bodyElement = document.querySelector("body");
  var darkTheme = document.getElementById("dark-theme");
  darkTheme.addEventListener("change", function(){
    bodyElement.classList.toggle("dark-theme", event.target.checked);
  });

  var largeText = document.getElementById("large-text");
  largeText.addEventListener("change", function(){
    bodyElement.classList.toggle("large-text", event.target.checked);
  });


  function insertMessagesArray(messagesArray) {
    messagesArray.forEach(function(messageObj) {
      Chatty.addMessage("message-box", messageObj.message);
    });
  }

// event listeners for color picker
  var saveButton = document.getElementById("saveBtn");
  saveButton.addEventListener("click", function(){
    console.log("saveButton");

    var newTheme = document.getElementById("colorTheme");
    var newFont = document.getElementById("colorFont");
    console.log("color", newTheme.value, newFont.value);

    var header = document.getElementById("header");
    var body = document.getElementById("body");
    header.style.background = newTheme.value;
    body.style.color = newFont.value;
  });

  Chatty.loadJSON(insertMessagesArray);
})();
