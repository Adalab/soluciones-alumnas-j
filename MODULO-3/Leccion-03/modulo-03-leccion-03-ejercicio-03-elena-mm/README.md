# README

## Nota

Yo he creado una carpeta llamada **components** donde he metido todos los componentes, incluído `App.js`

👉🏻 Recuerda que si haces esto tienes que cambiar la dirección relativa de `index.js` y de `App.js` del css

**App.js**:

```js
import React from 'react';
import '../App.css'; // esto!
```

**index.js**:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // esto!
import * as serviceWorker from './serviceWorker';
```

—🦊 [EMM](https://github.com/elemarmar)