import { copyFile, mkdir } from 'node:fs/promises'

const buildRoot = new URL('../dist/', import.meta.url)
const workerEntry = new URL('vishal_learning_app/index.js', buildRoot)
const serverDirectory = new URL('server/', buildRoot)

await mkdir(serverDirectory, { recursive: true })
await copyFile(workerEntry, new URL('index.js', serverDirectory))
