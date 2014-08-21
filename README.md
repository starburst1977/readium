# Readium 2.0.0
**The Medium-like theme for [Ghost](https://github.com/TryGhost)**. Reduced to the core design of Medium (without the cluttered
stuff, like the sidebar) to bring you a similar user experience
while giving you the freedom to host it on your own servers and on your own terms.

![Readium 2.0](http://cl.ly/VBX3/readium2.jpg)

**Check out [Mark Reads Blog](http://mark-read.info) as an good example**.

Just drop this theme in your Ghost theme folder and choose it in your Ghost admin dashboard (after restarting Ghost).

For big article images in your posts give it the tag "articleImage". If this tag gets added to an article, you should add an additional big image
to the beginning. The JS goes out and takes the first image inside this article and uses it as article image.

If you give your images an alt text, it gets added automatically as figcaption beneath the image (sorry, no links or other HTML stuff). Awesomeness!

## Features
- Mobile-First Design Aproach
- Fully Responsive layout
- Use header images in articles, if you want to (add tag "articleImage" and first article gets used)
- Automatic figcaption generation from image alt tags
- Valid HTML5/CSS3
- WAI-ARIA & Rich Snippets(microdata) roles
- Minimal design
- Compatible with Ghost 0.5 (Added Multi-User-Support)
- Designed for Readability & Sharability
- Works with the Ghost Hosting platform
- Handles static pages
- Featured article support
- FontAwesome implemented for easy use of icons fonts
- Google Analytics integrated
- Highlight.js integrated for Syntax highlighting - [Highlight JS](http://highlightjs.org)
- OpenGraph & Twitter Cards meta's
- Free & Open Source Font usage
- Theoretically ready for multiple users (here is how to [hack Ghost for Mulit-User](http://lifewiththemacks.com/multi-user-support/))

### Comments
To enable the disqus support open the file partials/comment-list.hbs and follow the instruction.

#### If your Ghost blog is self hosted:
1. Copy the contents of the .zip file into /content/themes/.
2. You need to restart your Ghost instance. After that you can switch themes inside your Ghost admin (http://your.domain.com/ghost/settings/general/). Scroll down and choose "Readium" from the theme dropdown.
3. Now you can customize your logo, langing page image (if you choose to have one), as well as user images and texts to fit the theme.
4. Have fun.

#### If your Ghost blog is hosted on the Ghost hosting platform:
1. Upload your Zip file via the Ghost admin panel.
2. Switch your theme to the Readium theme.
3. Have fun.

#### Thanks go to...
- FontAwesome by Dave Gandy
- Highlight JS by Ivan Sagalaev
- @mr_boolean, @riplexus & @unverbraucht for helping with JS
- The awesome guys that make Ghost
- The really rad guys that design Medium