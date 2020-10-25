# Design patterns in TypeScript with Node

## Singleton

### Problem: Keep a single instance of the Logger class

    tsc && node dist/creational/singletonProblem/index.js

### Solution #1: Add a separate Singleton Class

    tsc && node dist/creational/singletonSeparateClass/index.js

### Solution #2: Modify the class that you want to use as a Singleton

    tsc && node dist/creational/singletonSameClass/index.js

### Solution #3: The easiest way - module singletons
    
    tsc && node dist/creational/singletonSeparateClass/index.js