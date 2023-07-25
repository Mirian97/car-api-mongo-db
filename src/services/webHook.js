import webHooks from 'node-webhooks'

export const registerWebHook = () =>
  new webHooks({
    db: {
      callback_hook: ['http://localhost:8000/webhookClient']
    }
  })
