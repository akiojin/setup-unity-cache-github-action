import * as core from '@actions/core'

async function Run()
{
    try {
        if (!!core.getInput('upm-cache-root')) {
            core.exportVariable('UPM_CACHE_ROOT', core.getInput('upm-cache-root'))
        }

        if (!!core.getInput('upm-npm-cache-path')) {
            core.exportVariable('UPM_NPM_CACHE_PATH', core.getInput('upm-npm-cache-path'))
        }

        if (!!core.getInput('upm-cache-path')) {
            core.exportVariable('UPM_CACHE_PATH', core.getInput('upm-cache-path'))
        }

        if (!!core.getInput('upm-git-lfs-cache-path')) {
            core.exportVariable('UPM_GIT_LFS_CACHE_PATH', core.getInput('upm-git-lfs-cache-path'))
            core.exportVariable('UPM_ENABLE_GIT_LFS_CACHE', 'true')
        } else if (!!core.getBooleanInput('upm-enable-git-lfs-cache')) {
            core.exportVariable('UPM_ENABLE_GIT_LFS_CACHE', 'true')
        }
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
