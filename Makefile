NODE = node
NPM = npm
BOWER = ./node_modules/.bin/bower

links = FontAwesome.otf fontawesome-webfont.eot fontawesome-webfont.svg fontawesome-webfont.ttf fontawesome-webfont.woff

all: install link

install: install_npm install_bower link

install_npm:
	$(NPM) install

install_bower:
	$(BOWER) install

link:
	for i in $(links); \
	do \
		(cd ./assets/fonts && rm -f $${i} && ln -s ../../vendor/Font-Awesome/fonts/$${i} $${i}); \
	done

.PHONY: all