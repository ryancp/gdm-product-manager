# gdm-product-manager
Sample Vue.js product manager app: https://ryancp.github.io/gdm-product-manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Todo/Improvements

- Add unit test coverage
- Accidental navigate away protection on product add/edit modal: if user starts editing and accidentally tries to navigate away, show a confirmation toaster
- On product index, after successful create, immediately push the created product onto the product list (rather than wait for server response and refresh the list)
- On product index, after successful update, immediately modify the current product's name and description with the updated name/description data in the product list (rather than wait for server response and refresh the list)
- Add i18n support for entire application
- Refactor form validation to use a library like Vuelidate
