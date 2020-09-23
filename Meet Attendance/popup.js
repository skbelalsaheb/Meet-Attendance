/*
 *   Copyright (c) 2020 
 *   All rights reserved By E-cell Author Sk Belal Saheb.
 */

// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
      file: 'alert.js'
    }); 
  }
  
  document.getElementById('clickme').addEventListener('click', hello);