# setup-unity-cache-github-action

![BuildAndTest](https://github.com/akiojin/setup-unity-cache-github-action/actions/workflows/BuildAndTest.yml/badge.svg)

This action sets up a cache in Unity.

## Usage

### Example of only changing all cache directories

```yml
- uses: akiojin/setup-unity-cache-github-action@v0.1.0
  with:
    upm-cache-root: ${{ runner.temp }}/cache
    upm-npm-cache-path: ${{ runner.temp }}/cache/npm
    upm-cache-path: ${{ runner.temp }}/cache/packages
    upm-git-lfs-cache-path: ${{ runner.temp }}/cache/git-lfs
    upm-enable-git-lfs-cache: true
```

### Example of changing only the global cache directory

```yml
- uses: akiojin/setup-unity-cache-github-action@v0.1.0
  with:
    upm-cache-root: ${{ runner.temp }}/cache
```

### Example of enabling Git LFS

```yml
- uses: akiojin/setup-unity-cache-github-action@v0.1.0
  with:
    upm-enable-git-lfs-cache: true
```

## Arguments

### Inputs

| Name                       | Required | Type      | Default | Description                                                                                                                                                                                                |
| -------------------------- | -------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `upm-cache-root`           | `false`  | `string`  |         | Specifies the root directory of the global cache to be used by the Package Manager. If omitted, the Unity default cache directory is used.                                                                 |
| `upm-npm-cache-path`       | `false`  | `string`  |         | Specify the absolute path to the location where you want Package Manager to store package metadata and tarballs. By default, this is the `npm` subfolder under the global cache root.                      |
| `upm-cache-path`           | `false`  | `string`  |         | Specify the absolute path to the location where you want Package Manager to store the uncompressed contents of package tarballs. By default, this is the `packages` subfolder under the global cache root. |
| `upm-git-lfs-cache-path`   | `false`  | `string`  |         | Specify the absolute path to the location where you want Package Manager to store the Git LFS cache. By setting this path, you automatically enable the Git LFS cache.                                     |
| `upm-enable-git-lfs-cache` | `false`  | `boolean` | `false` | Specify any value except true to enable the Git LFS cache. Package Manager will use the `git-lfs` subfolder under the global cache root.                                                                   |

## License

Any contributions made under this project will be governed by the [MIT License](https://github.com/akiojin/setup-unity-cache-github-action/blob/main/LICENSE).
