const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 






// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     // to prevent the trigger of the standard global installation prompt, so that
//     // the before installation prompt UI can be used later instead.
//     event.preventDefault();
//     // to store events so it can be used outside of the function.
//     const installationPrompt = event;
// });


// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     if (installationPrompt) {
//         // calling the .prompt () meathod associated with the beforeinstallprompt event.
//         installationPrompt.prompt();
//         const choice = await installationPrompt.userChoice;
//         if (choice.outcome === 'accepted') {
//             console.log('installation complete');
//         } else {
//             console.log('installation rejected');
//         }
//         installationPrompt = null;
//     }
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//     console.log('the installation was successfull');
// });
