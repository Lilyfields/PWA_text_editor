const butInstall = document.getElementById('buttonInstall');
const headerTxt = document.getElementById('headerTxt');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility ='visible';
    headerTxt.textContent = 'Click the button to install!';

   // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('Click', ()=> {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent ='Installed!';
    });
    
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    headerTxt.textContent = 'Successfully installed';
    console.log('appinstalled',event);
});
