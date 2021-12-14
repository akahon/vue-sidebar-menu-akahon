# vue-sidebar-menu-akahon

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# vue-sidebar-menu-akahon

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

[![Vue 2.x](https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square)](https://vuejs.org)

> A Vue.js sidebar menu component. 
## Demo
[View demo](https://akahon.github.io/vue-sidebar-menu-akahon/)

[![demo](https://raw.githubusercontent.com/akahon/vue-sidebar-menu-akahon/src/assets/img/demo.gif)](https://akahon.github.io/vue-sidebar-menu-akahon/)
## Install

```bash
yarn add vue-sidebar-menu-akahon
```

Or

```bash
npm install --save vue-sidebar-menu-akahon
```

## Add to project

#### Global
```js
// main.js
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
```

#### Local Usage

```html
<template>
  <div>
      <VueSidebarMenuAkahon />
  </div>
</template>

<script>
  import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
  
  export default {
    name: 'component.vue',
    components: {VueSidebarMenuAkahon},
    data() {
      return {}
    }
  }
</script>
```

## Props
You can use icons in [boxicons](https://boxicons.com/)
### Menu settings

Props (Parameter) | Type | Default | Description
--------- | ---- | ------- | -----------
v-model (*required*) | `String, Number` | - | target input value
isMenuOpen | `Boolean` | `true` | Open/Close menu
menuTitle | `String` | `'Akahon'` | Menu title 
menuLogo | `String` | - | Logo
menuIcon | `String` | `'bxl-c-plus-plus'` | Icon (boxicons)

### Menu items

Props (Parameter) | Type | Default | Description
--------- | ---- | ------- | -----------
menuItems | `Array` | [{link: '#',name: 'Dashboard', tooltip: 'Dashboard', icon: 'bx-grid-alt' }] | Items

### Search

Props (Parameter) | Type | Default | Description
--------- | ---- | ------- | -----------
isSearch | `Boolean` | `true` | Enable/Disable search input
searchPlaceholder | `String` | `'Search...'` | Placeholder search input
searchTooltip | `String` | `'Search'` | Tooltip search input

### Profile detailes

Props (Parameter) | Type | Default | Description
--------- | ---- | ------- | -----------
profileImg | `String` | `'@/assets/img/photo.jpg'` | Profile avatar
profileName | `String` | `'Fayzullo Saidakbarov'` | Profile full name
profileRole | `String` | `'Frontend vue developer'` | Role profile
isExitButton | `Boolean` | `true` | Enable/Disable exit button

### Styles

Props (Parameter) | Type | Default | Description
--------- | ---- | ------- | -----------
bgColor | `String` | `'#11101d'` | Background color
secondaryColor | `String` | `'#1d1b31'` | Secondary color
homeSectionColor | `String` | `'#e4e9f7'` | 
logoTitleColor | `String` | `'#fff'` | 
iconsColor | `String` | `'#fff'` | 
itemsTooltipColor | `String` | `'#e4e9f7'` | 
searchInputTextColor | `String` | `'#fff'` | 
menuItemsHoverColor | `String` | `'#fff'` | 
menuItemsTextColor | `String` | `'#fff'` | 
menuFooterTextColor | `String` | `'#fff'` | 

### Events

Event | Output |  Description
--------- | ---- | -----------
button-exit-clicked | - | Background color
search-input-emit | String | Background color

## License
[The MIT License](http://opensource.org/licenses/MIT)

### Vue CLI configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
