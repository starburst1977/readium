ifdef SystemRoot
    WINDOWS = 1
endif

ifdef WINDOWS
    NODE = node
    NPM = npm
    BOWER = .\node_modules\.bin\bower.cmd
else
    NODE = node
    NPM = npm
    BOWER = $(NODE) ./node_modules/.bin/bower
endif

NODE_ENV = production

install:
	- git submodule init
	- git submodule update
	- $(NPM) install
	- $(BOWER) install

release:
	mkdir -p dist
	@while [ -z "$$VERSION" ]; do \
		read -r -p "Version name: " VERSION;\
	done && \
	zip "./dist/readium-$$VERSION.zip" -x /dist/* -r ./

.PHONY: install