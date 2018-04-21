searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://superjoachimblog.azurewebsites.net/api/DownloadRDP?server=" + query});
  };
  
  chrome.contextMenus.create({
    title: "Download RDP file",
    contexts:["selection"],
    onclick: searchUrbanDict
  });