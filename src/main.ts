import * as core from '@actions/core'

async function Run()
{
    try {
        const UPM_CACHE_ROOT = core.getInput('upm-cache-root')
        const UPM_NPM_CACHE_PATH = core.getInput('upm-npm-cache-path')
        const UPM_CACHE_PATH = core.getInput('upm-cache-path')
        const UPM_GIT_LFS_CACHE_PATH = core.getInput('upm-git-lfs-cache-path')
        const UPM_ENABLE_GIT_LFS_CACHE = core.getBooleanInput('upm-enable-git-lfs-cache')

        if (!!UPM_CACHE_ROOT) {
            core.exportVariable('UPM_CACHE_ROOT', UPM_CACHE_ROOT)
        }

        if (!!UPM_NPM_CACHE_PATH) {
            core.exportVariable('UPM_NPM_CACHE_PATH', UPM_NPM_CACHE_PATH)
        }

        if (!!UPM_CACHE_PATH) {
            core.exportVariable('UPM_CACHE_PATH', UPM_CACHE_PATH)
        }

        if (!!UPM_GIT_LFS_CACHE_PATH) {
            core.exportVariable('UPM_GIT_LFS_CACHE_PATH', UPM_GIT_LFS_CACHE_PATH)
            core.exportVariable('UPM_ENABLE_GIT_LFS_CACHE', 'true')
        } else if (!!UPM_ENABLE_GIT_LFS_CACHE) {
            core.exportVariable('UPM_ENABLE_GIT_LFS_CACHE', 'true')
        }

        core.startGroup('Cache Settings')
        core.info(`UPM_CACHE_ROOT=${UPM_CACHE_ROOT}`)
        core.info(`UPM_NPM_CACHE_PATH=${UPM_NPM_CACHE_PATH}`)
        core.info(`UPM_CACHE_PATH=${UPM_CACHE_PATH}`)
        core.info(`UPM_GIT_LFS_CACHE_PATH=${UPM_GIT_LFS_CACHE_PATH}`)
        core.info(`UPM_ENABLE_GIT_LFS_CACHE=${UPM_ENABLE_GIT_LFS_CACHE}`)
        core.endGroup()
    } catch (ex: any) {
        core.setFailed(ex.message)
    }
}

Run()
