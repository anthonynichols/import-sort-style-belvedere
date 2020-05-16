import {IStyleAPI, IStyleItem} from 'import-sort-style';
import {IImport} from 'import-sort-parser';

function isLocalModule(imported: IImport) {
  return (
    imported.moduleName.startsWith('~') ||
    imported.moduleName.startsWith('_')
  );
}

function isStylesheet(imported: IImport) {
  return (
    imported.moduleName.endsWith('css') ||
    imported.moduleName.endsWith('less') ||
    imported.moduleName.endsWith('sass') ||
    imported.moduleName.endsWith('scss') ||
    imported.moduleName.endsWith('styl')
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
      match: and(hasNoMember, isAbsoluteModule, not(isStylesheet)),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import '~/local-module' or '_/local-module'
    {
      match: and(hasNoMember, isLocalModule, not(isStylesheet)),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import './relative-module'
    {
      match: and(hasNoMember, isRelativeModule, not(isStylesheet)),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import external
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from 'module'
    {
      match: and(isAbsoluteModule, not(isLocalModule), not(isStylesheet)),
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import internal using prefix
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from '~/module' | '_/module'
    {
      match: and(isLocalModule, not(isStylesheet)),
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},

    // * ----------------------------------------------------------------------
    // * Import internal using relative
    // * ----------------------------------------------------------------------

    // * import * as foo | foo | {foo} from './module'
    {
      match: and(isRelativeModule, not(isStylesheet)),
      sort: moduleName(naturally),
      sortNamedMembers: name(naturally),
    },

    {separator: true},

    // * import 'stylesheet.css|less|sass|scss|styl'
    {
      match: and(hasNoMember, isAbsoluteModule, isStylesheet),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import '~/local-stylesheet.css|less|sass|scss|styl' or '_/local-stylesheet.css|less|sass|scss|styl'
    {
      match: and(hasNoMember, isLocalModule, isStylesheet),
      sort: moduleName(naturally),
    },

    {separator: true},

    // * import './relative-module'
    {
      match: and(hasNoMember, isRelativeModule, not(isStylesheet)),
      sort: moduleName(naturally),
    },
  ];
}
