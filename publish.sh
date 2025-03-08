#!/bin/bash

# Script to publish ts-template to all platforms
# Usage: ./publish.sh

set -e

echo "Publishing ts-template to all platforms..."

# Check if required tools are installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm first."
    exit 1
fi

if ! command -v vsce &> /dev/null; then
    echo "vsce is not installed. Installing..."
    npm install -g @vscode/vsce
fi

if ! command -v deno &> /dev/null; then
    echo "deno is not installed. Please install deno first."
    echo "Visit https://docs.deno.com/runtime/manual/getting_started/installation"
    exit 1
fi

# 1. Publish to npm
echo "Building and publishing to npm..."
npm install
npm run build
npm publish

# 2. Publish to VSCode Marketplace
echo "Building and publishing VSCode extension..."
cd vscode-extension
vsce package
vsce publish
cd ..

# 3. Publish to JSR (Deno)
echo "Publishing to JSR..."
deno publish

echo "All done! ts-template has been published to npm, VSCode Marketplace, and JSR."
