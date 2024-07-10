---
date: 2024-05-17
category:
  - JavaScript
tag:
  - 前端
archive: false
---
# JSDoc简介

### 1. JSDoc 简介

JSDoc 是一种用于 JavaScript 注释的标准，可以帮助开发者描述代码的功能、参数、返回值等信息，并提供代码补全、参数提示和文档生成等功能。

### 2. JSDoc 注释格式

JSDoc 注释以 `/**` 开头和 `*/` 结尾，可以包含多行注释和标签。

```javascript
/**
 * 这是一个 JSDoc 注释的示例。
 */
```

### 3. 常用标签

#### `@param`

描述函数的参数。

```javascript
/**
 * 计算两个数字的和。
 * @param {number} a - 第一个加数
 * @param {number} b - 第二个加数
 */
function add(a, b) {
  return a + b;
}
```

#### `@return` 或 `@returns`

描述函数的返回值。

```javascript
/**
 * 计算两个数字的和。
 * @param {number} a - 第一个加数
 * @param {number} b - 第二个加数
 * @return {number} - 两个数字的和
 */
function add(a, b) {
  return a + b;
}
```

#### `@description`

描述函数或变量的功能。

```javascript
/**
 * 这是一个示例函数，用于计算两个数字的和。
 */
function add(a, b) {
  return a + b;
}
```

#### `@example`

提供示例代码。

```javascript
/**
 * 计算两个数字的和。
 * @param {number} a - 第一个加数
 * @param {number} b - 第二个加数
 * @return {number} - 两个数字的和
 * @example
 * // 示例代码
 * add(2, 3); // 返回 5
 */
function add(a, b) {
  return a + b;
}
```

#### `@typedef`

定义自定义类型。

```javascript
/**
 * @typedef {Object} Person
 * @property {string} name - 人的姓名
 * @property {number} age - 人的年龄
 */
```

### 4. 数据类型

JSDoc 支持各种数据类型，例如 `String`、`Number`、`Boolean`、`Array`、`Object`、`Function` 等。

### 5. 生成文档

您可以使用工具（如 JSDoc、ESDoc 等）根据 JSDoc 注释自动生成代码文档。例如，使用 JSDoc 可以通过运行命令 `jsdoc yourfile.js` 来生成 HTML 文档。

### 6. 结束语

通过 JSDoc 注释，您可以提高代码的可读性和可维护性，并生成清晰的代码文档，从而更方便地与他人合作和交流。



### 附录

#### ①构造函数

```javascript
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```

