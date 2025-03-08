# Contributing to ts-template

Thank you for considering contributing to ts-template! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report, reproduce the behavior, and find related reports.

- Use the bug report template when creating an issue
- Include as many details as possible
- Include a minimal code example that reproduces the issue

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- Use the feature request template when creating an issue
- Include as many details as possible
- Explain why this enhancement would be useful

### Pull Requests

- Fill in the required template
- Follow the style guidelines
- Write meaningful commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) specification
- Include tests for new features or bug fixes
- Update documentation as needed

## Development Workflow

### Setting Up the Development Environment

```bash
# Clone the repository
git clone https://github.com/90dy/ts-template.git
cd ts-template

# Install dependencies
npm install

# Run tests
deno test
```

### Development Tasks

```bash
# Run the development server
deno task dev

# Generate test files for all supported languages
deno task generate:tests

# Generate syntax highlighting configurations for VSCode extension
deno task generate:syntaxes

# Build the VSCode extension
deno task build:extension
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

- `feat: ...` - A new feature (minor version bump)
- `fix: ...` - A bug fix (patch version bump)
- `docs: ...` - Documentation changes
- `style: ...` - Code style changes (formatting, etc.)
- `refactor: ...` - Code changes that neither fix bugs nor add features
- `perf: ...` - Performance improvements
- `test: ...` - Adding or updating tests
- `chore: ...` - Changes to the build process or auxiliary tools

Breaking changes are indicated by adding `BREAKING CHANGE:` in the commit message body or using `!` after the type:

```
feat!: change API to use new authentication system
```

## Style Guidelines

### TypeScript

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use camelCase for variables and functions
- Use PascalCase for classes and interfaces
- Use UPPER_CASE for constants
- Add JSDoc comments for public APIs

### Documentation

- Use Markdown for documentation
- Include code examples where appropriate
- Keep documentation up-to-date with code changes

## Testing

- Write tests for new features and bug fixes
- Run tests before submitting a pull request
- Ensure all tests pass

## Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. The version numbers follow the pattern: MAJOR.MINOR.PATCH.

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards compatible manner
- PATCH version when you make backwards compatible bug fixes

## License

By contributing to ts-template, you agree that your contributions will be licensed under the project's MIT license.
