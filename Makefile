# Makefile for ts-template
# This Makefile provides targets for development, testing, building, and publishing

# Default target
.PHONY: all
all: test

# Check for required tools
.PHONY: check-tools
check-tools:
	@command -v deno >/dev/null 2>&1 || { echo "Error: deno is required but not installed. Visit https://docs.deno.com/runtime/manual/getting_started/installation"; exit 1; }

# Development
.PHONY: dev
dev: check-tools
	deno task dev

# Testing
.PHONY: test
test: check-tools
	deno task test

# Generate test files
.PHONY: generate-tests
generate-tests: check-tools
	deno task generate:tests

# Generate syntax highlighting configurations
.PHONY: generate-syntaxes
generate-syntaxes: check-tools
	deno task generate:syntaxes

# Build all
.PHONY: build
build: build-npm build-extension

# Build npm package using dnt
.PHONY: build-npm
build-npm: check-tools
	deno task build:npm

# Build VSCode extension
.PHONY: build-extension
build-extension: check-tools generate-syntaxes
	deno task build:extension

# Publish to all platforms
.PHONY: publish
publish: build publish-jsr publish-npm publish-extension

# Publish to npm
.PHONY: publish-npm
publish-npm: build-npm
	@command -v npm >/dev/null 2>&1 || { echo "Error: npm is required but not installed."; exit 1; }
	@echo "Checking npm login status..."
	@npm whoami >/dev/null 2>&1 || { echo "Error: You need to be logged in to npm. Run 'npm login' first."; exit 1; }
	@echo "Publishing to npm..."
	cd npm && npm publish

# Publish to VSCode Marketplace
.PHONY: publish-extension
publish-extension: build-extension
	@command -v vsce >/dev/null 2>&1 || { echo "Installing vsce..."; npm install -g @vscode/vsce; }
	@echo "Publishing VSCode extension..."
	@echo "Note: You need to be logged in to the VSCode Marketplace to publish."
	@echo "If you haven't logged in yet, run 'vsce login <publisher>' first."
	cd vscode-extension && vsce publish || { echo "Error: Failed to publish VSCode extension. Make sure you're logged in to the VSCode Marketplace."; exit 1; }

# Publish to JSR (Deno)
.PHONY: publish-jsr
publish-jsr: check-tools
	@echo "Checking JSR login status..."
	@deno publish --dry-run >/dev/null 2>&1
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
demo: check-tools
	deno task demo

# Help
.PHONY: help
help:
	@echo "ts-template Makefile"
	@echo ""
	@echo "Usage:"
	@echo "  make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  all               Run tests (default target)"
	@echo "  dev               Run the development server"
	@echo "  test              Run tests"
	@echo "  generate-tests    Generate test files for all supported languages"
	@echo "  generate-syntaxes Generate syntax highlighting configurations"
	@echo "  build             Build all packages (npm and VSCode extension)"
	@echo "  build-npm         Build the npm package using dnt"
	@echo "  build-extension   Build the VSCode extension"
	@echo "  publish           Publish to all platforms (npm, VSCode Marketplace, and JSR)"
	@echo "  publish-npm       Publish to npm"
	@echo "  publish-extension Publish to VSCode Marketplace"
	@echo "  publish-jsr       Publish to JSR"
	@echo "  clean             Clean build artifacts"
	@echo "  demo              Run the demo"
	@echo "  help              Show this help information"
