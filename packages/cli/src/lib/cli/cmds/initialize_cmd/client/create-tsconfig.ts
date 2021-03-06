export const createTSConfig = () => {
  return `{
  "compilerOptions": {
    "baseUrl": "./src/",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "module": "esnext",
    "jsx": "react",
    "moduleResolution": "node",
    "downlevelIteration": true,
    "strict": true,
    "allowJs": true,
    "noEmit": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "removeComments": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "exclude": ["node_modules"],
  "include": ["src", "src/support/setupTests.ts", "src/support"]
}`;
};
