import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repositoryName?.endsWith('.github.io')
const githubPagesBase =
  process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrgPage ? `/${repositoryName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  build: {
    chunkSizeWarningLimit: 1400,
  },
  plugins: [react()],
})
