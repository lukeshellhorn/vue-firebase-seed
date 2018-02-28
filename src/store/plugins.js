import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { cmvStore }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cmvStore))
  })
}

// export default process.env.NODE_ENV !== 'production'
//   ? [createLogger(), localStoragePlugin]
//   : [localStoragePlugin]

export default [localStoragePlugin]
