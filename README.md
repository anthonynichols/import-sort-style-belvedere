# import-sort-style-belvedere

Import sort styles for Blevedere apps using [import-sort](https://github.com/renke/import-sort).

Imports are sorted alphabetically by the library name or path name by which they are imported.

```js
// external modules
import {aaa, bbb, ccc} from 'aaa';
import {aaa, bbb, ccc} from 'bbb';
import * as express from 'express';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import * as React from 'react';

// local modules (either "~" or "_")
import * as Abathur from '~/Abathur';
import {Artanis} from './Artanis';
import Dehaka from '~/Dehaka';
import Kerrigan from '~/kerrigan';
import {Morales} from '~/medic';
import * as Nova from '~/nova';
import {Zeratul} from '~/Zeratul';
// or
import Abathur from '_/Abathur';
import * as Artanis from './Artanis';
import {Dehaka} from '_/Dehaka';
import Kerrigan from '_/kerrigan';
import {Morales} from '_/medic';
import * as Nova from '_/nova';
import {Zeratul} from '_/Zeratul';

// relative modules
import {Abathur} from './Abathur';
import Artanis from './Artanis';
import * as Dehaka from './Dehaka';
import Kerrigan from './kerrigan';
import {Morales} from './medic';
import * as Nova from './nova';
import * as Tassadar from './tassadar';
import {Zagara} from './Zagara';
```
