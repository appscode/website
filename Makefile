.PHONY: run
run:
	hugo server --config=config.dev.yaml

PRODUCT ?=

.PHONY: docs
docs:
	hugo-tools docs-aggregator --shared  --product=$(PRODUCT)

.PHONY: gen
gen:
	rm -rf public
	hugo --config=config.dev.yaml

.PHONY: qa
qa: gen
	firebase use default
	firebase deploy

.PHONY: gen-prod
gen-prod:
	rm -rf public
	hugo --minify --config=config.yaml

.PHONY: release
release: gen-prod
	firebase use prod
	firebase deploy
	firebase use default

.PHONY: check-links
check-links:
	liche -r public -d http://localhost:1313 -c 10 -p -l -x "^http://localhost:9090$$"
