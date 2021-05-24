console.log("Ask Lil Wayne");
console.log("Ask Lil Wayne");
console.log("Ask Lil Wayne who the five star bitch is");

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Service Worker Registered successfully.");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker Registerstion Failed!");
        console.log(error);
    })
}

function displayNotification() {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!');
      });
    }
  }