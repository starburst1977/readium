# Readium 3

**The (the good parts) Medium-like theme for [Ghost](https://github.com/TryGhost)**. I took the good parts of Medium to bring you a similar reading and blogging experience while giving you the freedom to host your content on your own servers and on your own terms. In contrast to the previous version of Readium this one isn't a copy of Medium any more. Readium 3.0 sets out to be different than Medium (I have read so many Medium articles, that I can't stand them any more), while keeping what is good and building upon it. Readium now has it's own charm. It will always be somewhat similar (hopyfully better!), but never again will it be the same.

**Check out [Sven Reads Blog](http://www.svenread.com) as an example**.

Just drop this theme in your Ghost theme folder (and exptract it!) and choose it in your Ghost admin dashboard (after restarting Ghost).

If you give your images an alt text, it gets added automatically as figcaption beneath the image (sorry, no links or other HTML stuff). Awesomeness!

## Features
- Mobile-First Design Approach
- Fully Responsive layout
- Use header images in articles
- Automatic figcaption generation from image alt tags
- Valid HTML5/CSS3
- WAI-ARIA & Rich Snippets(microdata) roles
- Minimal design
- Compatible up from Ghost 0.6
- Designed for Readability & Sharability
- Works with the Ghost Hosting platform
- Static pages welcome
- Featured article support
- FontAwesome implemented for easy use of icons fonts
- Highlight.js integrated for Syntax highlighting - [Highlight JS](http://highlightjs.org)
- OpenGraph & Twitter Cards meta's
- Free & Open Source Font usage

### Good to know

#### Half Images

While writing your article you decide it would be nice if the image wouldn't be full width. Half would be enough, text flowing around it. Well, we got you covered. Just surround your image with the following HTML code while writing inside the editor:
```
	<div class="image-left">
		![First load of beverages getting shipped to our location.](/content/images/2014/Jul/2014-07-11-11-45-01.jpg)
	</div>
```
A DIV with the class "image-left" makes your image float left and only take up 50% of the space. Same goes btw for "image-right" as well :).

#### Things to better not forget

You can find my Google Analytics Snippet in the default.hbs. If you want to use it, uncomment it and fill it with your credentials. Same goes for the Twitter sharing information inside the HEADER tag, right at the beginning of the default.hbs. I put comments there so you can find it easily.

#### If your Ghost blog is self hosted:
1. Copy the contents of the .zip file into /content/themes/ and unzip it.
2. You need to restart your Ghost instance. After that you can switch themes inside your Ghost admin (http://your.domain.com/ghost/settings/general/). Scroll down and choose "Readium" from the theme dropdown.
3. Now you can customize your logo, blog background image (if you choose to have one), as well as user images and texts to fit the theme.
4. Have fun.

#### If your Ghost blog is hosted on the Ghost hosting platform:
1. Upload your Zip file via the Ghost admin panel.
2. Switch your theme to the Readium theme.
3. Have fun.

#### Thanks go to...
- FontAwesome by Dave Gandy
- Highlight JS by Ivan Sagalaev
- The awesome guys that make Ghost
- The really rad guys that design Medium
