export const codePrefix1 = `
import {isDir, generateId} from '~/utilities';
import PropTypes from 'prop-types';
import * as lib from './local-lib';
import * as _ from 'lodash';
import {observer} from 'mobx-react';
import {Zeratul} from '~/Zeratul';
import * as ReactDOM from 'react-dom';
import {IconButton} from '../../../ui';
import * as express from 'express';
import 'totally-awesome';
import * as Abathur from '~/Abathur';
import {action, computed} from 'mobx';
import {Icon, Dropdown, Checkbox, Button, Card} from '~/ui';
import * as Models from '~/models';
import {ccc, aaa, bbb} from 'bbb';
import * as React from 'react';
import * as Services from '~/services';
import * as reactRouter from 'react-router';
import './locally-awesome';
import {bbb, aaa, ccc} from 'aaa';
`.trim() + '\n';

export const expectedPrefix1 = `
import 'totally-awesome';

import './locally-awesome';

import {aaa, bbb, ccc} from 'aaa';
import {aaa, bbb, ccc} from 'bbb';
import * as express from 'express';
import * as _ from 'lodash';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as reactRouter from 'react-router';

import * as Abathur from '~/Abathur';
import * as Models from '~/models';
import * as Services from '~/services';
import {Button, Card, Checkbox, Dropdown, Icon} from '~/ui';
import {generateId, isDir} from '~/utilities';
import {Zeratul} from '~/Zeratul';

import {IconButton} from '../../../ui';
import * as lib from './local-lib';
`.trim() + '\n';

export const codePrefix2 = `
import {isDir, generateId} from '_/utilities';
import PropTypes from 'prop-types';
import * as lib from './local-lib';
import * as _ from 'lodash';
import {observer} from 'mobx-react';
import {Zeratul} from '_/Zeratul';
import * as ReactDOM from 'react-dom';
import {IconButton} from '../../../ui';
import * as express from 'express';
import 'totally-awesome';
import * as Abathur from '_/Abathur';
import {action, computed} from 'mobx';
import {Icon, Dropdown, Checkbox, Button, Card} from '_/ui';
import * as Models from '_/models';
import {ccc, aaa, bbb} from 'bbb';
import * as React from 'react';
import * as Services from '_/services';
import * as reactRouter from 'react-router';
import './locally-awesome';
import {bbb, aaa, ccc} from 'aaa';
`.trim() + '\n';

export const expectedPrefix2 = `
import 'totally-awesome';

import './locally-awesome';

import {aaa, bbb, ccc} from 'aaa';
import {aaa, bbb, ccc} from 'bbb';
import * as express from 'express';
import * as _ from 'lodash';
import {action, computed} from 'mobx';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as reactRouter from 'react-router';

import * as Abathur from '_/Abathur';
import * as Models from '_/models';
import * as Services from '_/services';
import {Button, Card, Checkbox, Dropdown, Icon} from '_/ui';
import {generateId, isDir} from '_/utilities';
import {Zeratul} from '_/Zeratul';

import {IconButton} from '../../../ui';
import * as lib from './local-lib';
`.trim() + '\n';
