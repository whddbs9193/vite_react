import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
      rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      }
  },
])

/* 인텔리 제이 에서 react 사용하지않는 상수 오류 에서 경고로 바꾸는 방법
*   1. File > Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint , automatic(자동) 으로 변경
*
*   2. eslint.config.js -> rules 추가
*      rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      }
      *
*   3. tsconfig.app.json -> noUnusedLocals : false 로 변경 하면 오류에서 경고로 변경됨.
* */