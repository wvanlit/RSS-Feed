import { writable } from 'svelte/store'

export function createLocalStore<T>(key: string, initial: T) {
  const stored = retrieveValue<T>(key)
  const value = stored ?? initial

  const store = writable(value)

  store.subscribe(value => storeValue(key, value))

  return store
}

function retrieveValue<T>(key: string) {
  const stored = localStorage.getItem(key)

  if (!stored) return undefined
  return JSON.parse(stored) as T
}

function storeValue<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}
