let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  // Show the install button
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';
  installButton.addEventListener('click', installPWA);
});

function installPWA() {
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

    // Hide the install button
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'none';
  });
}
