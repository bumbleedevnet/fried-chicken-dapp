# Sprint 00 - Environment Setup

## Project

Fried Chicken dApp

## Objective

Prepare the development environment for building a decentralized application (dApp) on Solana using Next.js, Solana Kit, Rust, Anchor, and Phantom Wallet.

This sprint focuses on initial project setup, development environment configuration, debugging, and GitHub repository preparation.

---

# Development Environment

## Operating System

```
Linux Mint 22.3
```

## Editor

```
Visual Studio Code
```

## Runtime

Node.js:

```
v24.18.0
```

Package Manager:

```
npm 11.16.0
```

Version Control:

```
Git
```

Wallet:

```
Phantom Wallet
```

---

# Project Initialization

The project was created using:

```bash
npx create-solana-dapp@latest
```

Template:

```
Next.js
```

Framework:

```
Solana Kit
```

The purpose of this setup is to learn:

- Solana wallet integration
- Frontend and blockchain communication
- dApp architecture
- On-chain transaction flow

---

# Completed Tasks

- Linux Mint development environment setup
- Node.js configuration using NVM
- Next.js + Solana Kit starter project initialization
- Phantom Wallet installation
- Git configuration
- GitHub CLI authentication
- GitHub repository creation
- Initial project push

Repository:

```
https://github.com/bumbleedevnet/fried-chicken-dapp
```

---

# Debugging Log

## Issue 1: DisposableStack Runtime Error

### Error Message

```
DisposableStack is not defined
```

The error occurred during Solana client initialization.

Location:

```
app/lib/solana-client.ts
```

Related code:

```typescript
createClient()
.use(walletSigner())
```

---

# Investigation

## Checking Node.js Version

Command:

```bash
node -v
```

Initial result:

```
v22.23.1
```

---

## Checking DisposableStack Support

Command:

```bash
node -p "typeof DisposableStack"
```

Result:

```
undefined
```

This indicated that the current Node.js runtime did not provide the required feature.

---

# Root Cause

The project uses:

```
@solana/kit 7.0.0
@solana/react 7.0.0
```

These dependencies require a newer Node.js runtime.

Initial environment:

```
Node.js v22.23.1
```

Required environment:

```
Node.js >=24
```

---

# Solution

Migrated Node.js runtime using NVM.

Before:

```
Node.js v22.23.1
```

After:

```
Node.js v24.18.0
```

Command:

```bash
nvm install 24
```

After upgrading Node.js, dependencies were reinstalled:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

# Additional Configuration

Added:

```
.nvmrc
```

Content:

```
24
```

Purpose:

Ensure the project always uses the correct Node.js version.

Developers can simply run:

```bash
nvm use
```

to switch to the required runtime.

---

# Git History

## Commit 1

```
chore: initial commit
```

Initial Solana Kit starter project.

---

## Commit 2

```
chore: configure Node 24 development environment
```

Changes:

- Upgrade Node.js runtime
- Add `.nvmrc`
- Regenerate `package-lock.json`
- Fix DisposableStack runtime error

---

# Current Status

Project successfully:

- Runs on local development server
- Connected with Git repository
- Published to GitHub repository

Current branch:

```
main
```

Repository status:

```
working tree clean
```

---

# Lessons Learned

During this sprint, I learned:

- How to analyze Next.js project structure
- How to read and understand stack traces
- How Node.js runtime affects package compatibility
- How to manage project versions using NVM
- How to use Git workflow properly
- The importance of documenting debugging processes

---

# Next Sprint

Planned activities:

- Understand Next.js App Router structure
- Learn React component architecture
- Understand Provider architecture
- Customize Solana Kit starter landing page
- Create Fried Chicken dApp branding
- Prepare wallet connection flow