import {
  type LanguageSupport as LSupport,
  type StreamParser,
} from '@codemirror/language';
import {LanguageDefinition} from '../types/language-def';

const importLegacy = () =>
  import('@codemirror/language').then(({LanguageSupport, StreamLanguage}) => {
    return function legacy(parser: StreamParser<unknown>): LSupport {
      return new LanguageSupport(StreamLanguage.define(parser));
    };
  });

export const SUPPORTED_LANGUAGES: readonly LanguageDefinition[] = [
  {
    id: 'javascript',
    label: 'Javascript',
    color: '#f1e05a',
    plugin: () =>
      import('@codemirror/lang-javascript').then(({javascript}) =>
        javascript({jsx: true}),
      ),
    icons: [
      {
        name: 'js',
        extension: '.js',
        content: () => import('material-icon-theme/icons/javascript.svg?raw'),
        matcher: /^.*\.(js)$/,
      },
      {
        name: 'jsx',
        extension: '.jsx',
        content: () => import('material-icon-theme/icons/react.svg?raw'),
        matcher: /^.*\.(jsx)$/,
      },
      {
        name: 'test-jsx',
        extension: '.spec.jsx',
        content: () => import('material-icon-theme/icons/test-jsx.svg?raw'),
        matcher: /^.*\.(spec.jsx)$/,
      },
      {
        name: 'test-js',
        extension: '.spec.js',
        content: () => import('material-icon-theme/icons/test-ts.svg?raw'),
        matcher: /^.*\.(spec.js)$/,
      },
      {
        name: 'vue',
        extension: '.vue',
        content: () => import('material-icon-theme/icons/vue.svg?raw'),
        matcher: /^.*\.(vue)$/,
      },
      {
        name: 'redux-store',
        extension: '.store.js',
        content: () => import('material-icon-theme/icons/redux-store.svg?raw'),
        matcher: /^.*\.*?(store.js)$/,
      },
      {
        name: 'redux-reducer',
        extension: '.reducer.js',
        content: () =>
          import('material-icon-theme/icons/redux-reducer.svg?raw'),
        matcher: /^.*\.*?(reducer.js)$/,
      },
      {
        name: 'redux-action',
        extension: '.action.js',
        content: () => import('material-icon-theme/icons/redux-action.svg?raw'),
        matcher: /^.*\.*?(action.js)$/,
      },
      {
        name: 'redux-selector',
        extension: '.selector.js',
        content: () =>
          import('material-icon-theme/icons/redux-selector.svg?raw'),
        matcher: /^.*\.*?(selector.js)$/,
      },
      {
        name: 'svelte',
        extension: '.svelte',
        content: () => import('material-icon-theme/icons/svelte.svg?raw'),
        matcher: /^.*\.(svelte)$/,
      },
    ],
  },
  {
    id: 'typescript',
    label: 'Typescript',
    color: '#3178c6',
    plugin: () =>
      import('@codemirror/lang-javascript').then(({javascript}) =>
        javascript({jsx: true, typescript: true}),
      ),
    icons: [
      {
        name: 'ts',
        extension: '.ts',
        content: () => import('material-icon-theme/icons/typescript.svg?raw'),
        matcher: /^.*\.(ts)$/,
      },
      {
        name: 'tsx',
        extension: '.tsx',
        content: () => import('material-icon-theme/icons/react_ts.svg?raw'),
        matcher: /^.*\.(tsx)$/,
      },
      {
        name: 'test-tsx',
        extension: '.spec.tsx',
        content: () => import('material-icon-theme/icons/test-jsx.svg?raw'),
        matcher: /^.*\.(spec.jsx|spec.tsx)$/,
      },
      {
        name: 'test-ts',
        extension: '.spec.ts',
        content: () => import('material-icon-theme/icons/test-ts.svg?raw'),
        matcher: /^.*\.(spec.js|spec.ts)$/,
      },
      {
        name: 'vue',
        extension: '.vue',
        content: () => import('material-icon-theme/icons/vue.svg?raw'),
        matcher: /^.*\.(vue)$/,
      },
      {
        name: 'redux-store',
        extension: '.store.ts',
        content: () => import('material-icon-theme/icons/redux-store.svg?raw'),
        matcher: /^.*\.*?(store.ts)$/,
      },
      {
        name: 'redux-reducer',
        extension: '.reducer.ts',
        content: () =>
          import('material-icon-theme/icons/redux-reducer.svg?raw'),
        matcher: /^.*\.*?(reducer.ts)$/,
      },
      {
        name: 'redux-action',
        extension: '.action.ts',
        content: () => import('material-icon-theme/icons/redux-action.svg?raw'),
        matcher: /^.*\.*?(action.ts)$/,
      },
      {
        name: 'redux-selector',
        extension: '.selector.ts',
        content: () =>
          import('material-icon-theme/icons/redux-selector.svg?raw'),
        matcher: /^.*\.*?(selector.ts)$/,
      },
      {
        name: 'ng-component',
        extension: '.component.ts',
        content: () =>
          import('material-icon-theme/icons/angular-component.svg?raw'),
        matcher: /^.*\.(component.ts)$/,
      },
      {
        name: 'ng-pipe',
        extension: '.pipe.ts',
        content: () => import('material-icon-theme/icons/angular-pipe.svg?raw'),
        matcher: /^.*\.(pipe.ts)$/,
      },
      {
        name: 'ng-guard',
        extension: '.guard.ts',
        content: () =>
          import('material-icon-theme/icons/angular-guard.svg?raw'),
        matcher: /^.*\.(guard.ts)$/,
      },
      {
        name: 'ng-directive',
        extension: '.directive.ts',
        content: () =>
          import('material-icon-theme/icons/angular-directive.svg?raw'),
        matcher: /^.*\.(directive.ts)$/,
      },
      {
        name: 'ng-resolver',
        extension: '.resolver.ts',
        content: () =>
          import('material-icon-theme/icons/angular-resolver.svg?raw'),
        matcher: /^.*\.(resolver.ts)$/,
      },
      {
        name: 'ng-service',
        extension: '.service.ts',
        content: () =>
          import('material-icon-theme/icons/angular-service.svg?raw'),
        matcher: /^.*\.(service.ts)$/,
      },
      {
        name: 'svelte',
        extension: '.svelte',
        content: () => import('material-icon-theme/icons/svelte.svg?raw'),
        matcher: /^.*\.(svelte)$/,
      },
    ],
  },
  {
    id: 'java',
    label: 'Java',
    color: '#b07219',
    plugin: () => import('@codemirror/lang-java').then(({java}) => java()),
    icons: [
      {
        name: 'java-class',
        extension: '.java',
        content: () => import('material-icon-theme/icons/javaclass.svg?raw'),
        matcher: /^.*\.(java)$/,
      },
    ],
  },
  {
    id: 'kotlin',
    label: 'Kotlin',
    color: '#A97BFF',
    plugin: () =>
      Promise.all([
        importLegacy(),
        import('@codemirror/legacy-modes/mode/clike'),
      ]).then(([cb, m]) => cb(m.kotlin)),
    icons: [
      {
        name: 'kotlin',
        extension: '.kt',
        content: () => import('material-icon-theme/icons/kotlin.svg?raw'),
        matcher: /^.*\.(kt)$/,
      },
    ],
  },
  {
    id: 'css',
    label: 'Css',
    color: '#563d7c',
    plugin: () => import('@codemirror/lang-css').then(({css}) => css()),
    icons: [
      {
        name: 'css',
        extension: '.css',
        content: () => import('material-icon-theme/icons/css.svg?raw'),
        matcher: /^.*\.(css)$/,
      },
      {
        name: 'sass',
        extension: '.sass',
        content: () => import('material-icon-theme/icons/sass.svg?raw'),
        matcher: /^.*\.(scss|sass)$/,
      },
      {
        name: 'less',
        extension: '.less',
        content: () => import('material-icon-theme/icons/less.svg?raw'),
        matcher: /^.*\.(less)$/,
      },
      {
        name: 'stylus',
        extension: '.stylus',
        content: () => import('material-icon-theme/icons/stylus.svg?raw'),
        matcher: /^.*\.(stylus)$/,
      },
    ],
  },
  {
    id: 'html',
    label: 'Html',
    color: '#e34c26',
    plugin: () =>
      import('@codemirror/lang-html').then(({html}) =>
        html({matchClosingTags: true, autoCloseTags: true}),
      ),
    icons: [
      {
        name: 'html',
        extension: '.html',
        content: () => import('material-icon-theme/icons/html.svg?raw'),
        matcher: /^.*\.(html)$/,
      },
    ],
  },
  {
    id: 'php',
    label: 'PHP',
    color: '#4F5D95',
    plugin: () => import('@codemirror/lang-php').then(({php}) => php()),
    icons: [
      {
        name: 'php',
        extension: '.php',
        content: () => import('material-icon-theme/icons/php.svg?raw'),
        matcher: /^.*\.(php)$/,
      },
    ],
  },
  {
    id: 'python',
    label: 'Python',
    color: '#3572A5',
    plugin: () =>
      import('@codemirror/lang-python').then(({python}) => python()),
    icons: [
      {
        name: 'python',
        extension: '.py',
        content: () => import('material-icon-theme/icons/python.svg?raw'),
        matcher: /^.*\.(py)$/,
      },
    ],
  },
  {
    id: 'markdown',
    label: 'Markdown',
    color: '#083fa1',
    plugin: () =>
      import('@codemirror/lang-markdown').then(({markdown}) => markdown()),
    icons: [
      {
        name: 'markdown',
        extension: '.md',
        content: () => import('material-icon-theme/icons/markdown.svg?raw'),
        matcher: /^.*\.(md)$/,
      },
    ],
  },
  {
    id: 'rust',
    label: 'Rust',
    color: '#dea584',
    plugin: () => import('@codemirror/lang-rust').then(({rust}) => rust()),
    icons: [
      {
        name: 'rust',
        extension: '.rs',
        content: () => import('material-icon-theme/icons/rust.svg?raw'),
        matcher: /^.*\.(rs)$/,
      },
    ],
  },
  {
    id: 'cpp',
    label: 'C++',
    color: '#f34b7d',
    plugin: () => import('@codemirror/lang-cpp').then(({cpp}) => cpp()),
    icons: [
      {
        name: 'cpp',
        extension: '.cpp',
        content: () => import('material-icon-theme/icons/cpp.svg?raw'),
        matcher: /^.*\.(cpp)$/,
      },
    ],
  },
  {
    id: 'xml',
    label: 'XML',
    color: '#0060ac',
    plugin: () => import('@codemirror/lang-xml').then(({xml}) => xml()),
    icons: [
      {
        name: 'xml',
        extension: '.xml',
        content: () => import('material-icon-theme/icons/xml.svg?raw'),
        matcher: /^.*\.(xml)$/,
      },
    ],
  },
  {
    id: 'json',
    label: 'JSON',
    color: '#292929',
    plugin: () => import('@codemirror/lang-json').then(({json}) => json()),
    icons: [
      {
        name: 'json',
        extension: '.json',
        content: () => import('material-icon-theme/icons/json.svg?raw'),
        matcher: /^.*\.(json)$/,
      },
    ],
  },
  {
    id: 'sql',
    label: 'SQL',
    color: '#e38c00',
    plugin: () => import('@codemirror/lang-sql').then(({sql}) => sql()),
    icons: [
      {
        name: 'sql',
        extension: '.sql',
        content: () => import('material-icon-theme/icons/database.svg?raw'),
        matcher: /^.*\.(sql)$/,
      },
    ],
  },
];
