---
title: "Gallery launched"
date: "2021-02-14"
featured: "../images/gallery_code_screenshot.png"
---

This was a pain.

Mostly because of the technology I chose. CV-driven development requires some dedication, and sacrifice. Getting out of the comfort zone, and all.
I mean, sure, you can find few Gatsby image galleries. So simple! Just slap a component and hope for the best!

As long as you for example, don't require subalbums, you can go ahead with ``gatsby-theme-gallery``. Or if you don't care about the looks but want to preserve the folders, ``gatsby-theme-photo-albums`` will be right for you.

...or, if you're like me, and want to have it look half decent, with subgalleries, well, I stumbled upon ``gatsby-image-gallery``. It had one feature that I needed - I could just point it to an image array. That array does not need to be fully populated with all images, and thus, with few graphql queries I could just make a basic gallery with only the pictures I needed.

And, one last thing remained to be done - main gallery page. First, how to get a thumbnail from the album? Do I want a dedicated one, or some image from the folder? I settled with the latter for now. Wanted to make them random, but that proved to be rather difficult, so the first fetched image will have to do for now.

Currently it's done half-programatically - it can generate a link just by being given a subfolder in /src/gallery directory, but the gallery page itself is still manually created, with copy-paste techniques. 

And then some basic styles... well, I'm no good at CSS, or webdev in general, so it's rather rough, but I managed it. I think. It's okay for an amateur, makes a decent first impression.

Anyway, now that I'm somewhat done building what I wanted, I can start adding more blog posts and/or reviews.

Hope you enjoy it.