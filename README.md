# `CheatManager`

A simple typescript / javascript module to process and act on the konami code.

Written in typescript so accurate typings are included out of the box!

## Using

```sh
npm i --save @antisoftwareclub/cheat-manager
```

### TypeScript

```typescript
import { CheatManager } from "@antisoftwareclub/cheat-manager";

CheatManager.shared.addActivator(() => {
    console.log("activated!");
});
```

### JavaScript

```javascript
const CheatManager = require("@antisoftwareclub/cheat-manager");

CheatManager.shared.addActivator(() => {
    console.log("activated!");
});
```

## Developing

We use [pnpm](https://pnpm.io) so you'll need to make sure that's installed.

```sh
pnpm i
pnpm run build
```
