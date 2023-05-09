# Practica 3: Exercism

### Notas
1. Añadir dependencias al fichero package.json para poder ejecutar código con sintaxis CommonJS.
```
    "devDependencies": {
        "@babel/core": "^7.17.4",
        "@exercism/babel-preset-javascript": "^0.1.2",
        "@exercism/eslint-config-javascript": "^0.6.0",
        "@types/jest": "^27.4.0",
        "@types/node": "^16.11.25",
        "babel-jest": "^27.5.1",
        "core-js": "^3.21.1",
        "eslint": "^8.9.0",
        "jest": "^27.5.0"
    },    
    "type": "module"
```
2. Para ejecutar código con dicha sintaxis, se utiliza el comando:
```
    npx babel-node programa.js
```
3. Para ejecutar los tests:
```
    npm run test
```