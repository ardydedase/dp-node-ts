# Design patterns in TypeScript with Node

## Setup

Tested on node 10

    npm install

## Creational: Singleton

Blog post: [3 Ways to Implement the Singleton Pattern in TypeScript with Node.js
](https://wickedmanok.medium.com/3-ways-to-implement-the-singleton-pattern-in-typescript-with-node-js-75129f391c9b)

### Problem: Maintain a single instance of the Logger class

    tsc && node dist/creational/singleton/problem/index.js

### Solution #1: Add a separate Singleton Class

    tsc && node dist/creational/singleton/separateClass/index.js

### Solution #2: Modify the class that you want to use as a Singleton

    tsc && node dist/creational/singleton/sameClass/index.js

### Solution #3: The easiest way - module singletons
    
    tsc && node dist/creational/singleton/separateClass/index.js