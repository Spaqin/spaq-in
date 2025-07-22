import React, { useEffect } from 'react';

const IssoComments = ({ slug }) => {
  // Define the server URL in one place for easy updates.
  const issoServerUrl = 'https://cdn.spaq.in:17135/';

  useEffect(() => {
    // Check if the script is already on the page to avoid adding it again
    // when navigating between posts.
    if (document.getElementById('isso-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'isso-script';

    // This points to the Isso JavaScript file on your server.
    // Note the custom port :17135 for HTTPS.
    script.src = `${issoServerUrl}js/embed.min.js`;

    // This tells the script where your Isso server is running.
    script.dataset.isso = issoServerUrl;

    document.body.appendChild(script);

    // Optional: A cleanup function to remove the script when the component unmounts.
    // This is good practice but not strictly necessary for most blogs.
    return () => {
      document.getElementById('isso-script')?.remove();
    };
  }, []); // The empty dependency array ensures this effect runs only once.

  return <section id="isso-thread" data-isso-id={slug}></section>;
};

export default IssoComments;