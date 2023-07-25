import webHooks from 'node-webhooks'

const deployApiUrl = process.env.DEPLOY_API_BASE_URL
export const registerWebHook = () =>
  new webHooks({
    db: { callback_hook: [deployApiUrl] }
  })
