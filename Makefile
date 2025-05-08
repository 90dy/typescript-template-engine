# Makefile for ts-tmpl-engine
# This Makefile provides targets for development, testing, building, and publishing

# Default target
.PHONY: all
all: sync-version generate-syntaxes test build publish

# Testing
.PHONY: test
test:
	deno task test

# Generate syntax highlighting configurations
.PHONY: generate-syntaxes
generate-syntaxes:
	deno task generate:syntaxes

# Build all
.PHONY: build
build: build-extension

# Sync version from deno.json to vscode-extension/package.json
.PHONY: sync-version
sync-version:
	deno run -A sync-version.ts

# Build VSCode extension
.PHONY: build-extension
build-extension: generate-syntaxes
	deno task build:extension

# Publish to all platforms
.PHONY: publish
publish: build publish-jsr publish-extension

# Publish to VSCode Marketplace
.PHONY: publish-extension
publish-extension: build-extension
	@command -v vsce >/dev/null 2>&1 || { echo "Installing vsce..."; npm install -g @vscode/vsce; }
	@echo "Publishing VSCode extension..."
	@echo "Note: You need to be logged in to the VSCode Marketplace to publish."
	@echo "If you haven't logged in yet, run 'vsce login <publisher>' first."
	cd vscode-extension && vsce publish || { echo "Error: Failed to publish VSCode extension. Make sure you're logged in to the VSCode Marketplace."; exit 1; }

# Publish to JSR
.PHONY: publish-jsr
publish-jsr:
	@echo "Publishing to JSR..."
	deno publish

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf npm
	rm -rf vscode-extension/*.vsix

# Demo
.PHONY: demo
demo:
	deno task demo

# Help
.PHONY: help
help:
	@echo "TypeScript Template Engine Makefile"
	@echo ""
	@echo "Usage:"
	@echo "  make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  all               Do everything: generate, test, build, and publish (default target)"
	@echo "  dev               Run the development server"
	@echo "  test              Run tests"
	@echo "  generate-tests    Generate test files for all supported languages"
	@echo "  generate-syntaxes Generate syntax highlighting configurations"
	@echo "  sync-version      Sync version from deno.json to vscode-extension/package.json"
	@echo "  build             Build all packages (core, gen, and VSCode extension)"
	@echo "  build-extension   Build the VSCode extension"
	@echo "  publish           Publish all packages to all platforms"
	@echo "  publish-jsr       Publish @tmpl/gen to JSR"
	@echo "  publish-extension Publish to VSCode Marketplace"
	@echo "  clean             Clean build artifacts"
	@echo "  demo              Run the demo"
	@echo "  help              Show this help information"
