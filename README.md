# Readium Ghost Theme
Hey there, my name is Sven Read. I love building themes & I love [Ghost](https://en.ghost.org). And I always wanted to have a possibility to blog that's similar to Medium.com,
but without the drawbacks (like no control over your data & loss of all rights to your content, etc.). So I made myself a theme for Ghost
that takes the good parts from Medium.com & mixes them with stuff I would do differently. And this is what I ended up with.

You can have a look at it here: [http://www.svenread.com/readium-ghost-theme/](http://www.svenread.com/readium-ghost-theme/)

Don't forget to check out my other themes [Marisa](http://crtv.mk/eOTs) & [Chiara](http://crtv.mk/tSYt).

## Install
### Requirements
- node >= 0.8.x

### Use dist files
Upload the latest `readium-VERSION.zip` file to your ghost instance and restart it. Choose readium and enjoy!

### Compile
Run `make` and do your changes. Once you are done, run `make release`. Enter the required data and pick the created zipfile out of your dist/ directory.

## Features
- Mobile-First Design Aproach
- Fully Responsive layout
- Valid HTML5/CSS3
- WAI-ARIA & Rich Snippets(microdata) roles
- Minimal design
- Needs Ghost 0.4
- Designed for Readability & Sharability
- Works with the Ghost Hosting platform
- Handles static pages (small sidebar navigation already included)
- FontAwesome implemented for easy use of icons fonts
- Google Analytics integrated
- Highlight.js integrated for Syntax highlighting - [Highlight JS](http://highlightjs.org)
- OpenGraph & Twitter Cards meta's
- Free & Open Source Font usage
- Theoretically ready for multiple users (Here is how to [hack Ghost for Mulit-User](http://lifewiththemacks.com/multi-user-support/)

## If your Ghost blog is self hosted:
1. Copy the contents of the .zip file into /content/themes/.
2. You need to restart your Ghost instance. After that you can switch themes inside your Ghost admin (http://your.domain.com/ghost/settings/general/). Scroll down and choose "Chiara" from the theme dropdown.
3. Now you can customize your logo, langing page image (if you choose to have one), as well as user images and texts to fit the theme.
4. Have fun.

## If your Ghost blog is hosted on the Ghost hosting platform:
1. Upload your Zip file via the Ghost admin panel.
2. Switch your theme to the Readium theme.
3. Have fun.

## Usage
- If you want a big article image, just give it the this alt attribute -> alt="img-post-cover".
- You should pay attention to image size. Don't go to crazy.
- Some style configuration possible inside essentials.less.

## Thanks go to...
- FontAwesome by Dave Gandy
- Highlight JS by Ivan Sagalaev
- Friedrich Althausen for Vollkorn & Adobe for Source Sans Pro
- Marc Binder & Kevin Read for helping with JS
- The awesome guys that make Ghost
- The really rad guys that design Medium

## License
The MIT License (MIT)

Copyright (c) 2014 mystical.ly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.