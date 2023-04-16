# Gravity [![Release](https://github.com/beskar-co/gravity/actions/workflows/push.yml/badge.svg)](https://github.com/beskar-co/gravity/actions/workflows/push.yml)

Beskar Labs Design System. WIP.

## Installation

Set your `compilerOptions.moduleResolution` to `nodenext` in your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "moduleResolution": "nodenext"
  }
}
```

## Known Issues

- `@vercel/edge-config` doesn't like the `nodenext` module resolution, so there's some interop issues there.
