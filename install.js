let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
});
// Install the PWA when the install button is clicked
document.getElementById('install-button').addEventListener('click',()=>{
    installPWA();
    console.log('working')
});


function installPWA() {
  if (deferredPrompt) {
    // Prompt the user to install the PWA
    deferredPrompt.prompt();
    
    // Wait for the user's choice
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
      } else {
        console.log('User dismissed the PWA installation');
      }
      
      deferredPrompt = null;
    });
  }
}
