import {IStyleAPI, IStyleItem} from 'import-sort-style';
import {IImport} from 'import-sort-parser';

function isLocalModule(imported: IImport) {
  return (
    imported.moduleName.startsWith('~') ||
    imported.moduleName.startsWith('_')
  );
}

export default function(styleApi: IStyleAPI): IStyleItem[] {
  const {
    and,
    hasNoMember,
    isAbsoluteModule,
    isRelativeModule,
    moduleName,
    name,
    naturally,
    not,
  } = styleApi;

  return [
    // * ----------------------------------------------------------------------
    // * Import side effects
    // * ----------------------------------------------------------------------

    // * import 'module'
    {
      match: and(hasNoMember, isAbsoluteModule),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import '~/local-module' or '_/local-module'
    {
      match: and(hasNoMember, isLocalModule),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import './relative-module'
    {
      match: and(hasNoMember, isRelativeModule),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import external
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from 'module'
    {
      match: and(isAbsoluteModule, not(isLocalModule)),
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import internal using prefix
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from '~/module' | '_/module'
    {
      match: isLocalModule,
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import internal using relative
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from './module'
    {
      match: isRelativeModule,
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},
  ];
}
