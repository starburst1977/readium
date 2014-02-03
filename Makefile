NODE = node
NPM = npm
BOWER = ./node_modules/.bin/bower

links = FontAwesome.otf fontawesome-webfont.eot fontawesome-webfont.svg fontawesome-webfont.ttf fontawesome-webfont.woff

all: install link

install:
	-$(NPM) install
	-$(BOWER) install

link:
	for i in $(links); \
	do \
		(cd ./assets/fonts && rm -f $${i} && ln -s ../../vendor/Font-Awesome/fonts/$${i} $${i}); \
	done

.PHONY: all