console.log('This is the background page.');
console.log('Put the background scripts here.');

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// chrome.extension.onConnect.addListener(function(port) {
//     console.log("Connected .....");
//     port.onMessage.addListener(function(msg) {
//          console.log("message recieved" + msg);
//          port.postMessage("Hi Popup.js");
//     });
// })


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    console.log('Got a message')
    getCurrentTab()
    .then((currentTab) => {        
        console.log(currentTab)
    
        if (message === 'get-current-url') {
            sendResponse(currentTab);
        }
    });
    
    
})