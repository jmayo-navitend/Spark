// Extend the Window interface to include the electron property
declare global {
  interface Window {
    electron: {
      openExternal: (url: string) => void;
    };
  }
}

export function script() {
  // ...

  const links = document.querySelectorAll("a"); // Select all a tags
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default action (opening the link)
      window.electron.openExternal(link.href); // Open the link in the default browser
    });
  });

  // ...
}
