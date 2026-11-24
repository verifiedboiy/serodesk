export const APPLICATION_KEY = 'serodesk_application'
export const APPLICATIONS_KEY = 'serodesk_applications'
export const SUBMITTED_KEY = 'serodesk_application_submitted'
export const DEVICE_KEY = 'serodesk_device_id'

export function getDraft() {
  try { return JSON.parse(localStorage.getItem(APPLICATION_KEY) || '{}') } catch { return {} }
}

export function saveDraft(data) {
  localStorage.setItem(APPLICATION_KEY, JSON.stringify(data))
}

export function mergeDraft(part) {
  saveDraft({ ...getDraft(), ...part })
}

export function getApplications() {
  try { return JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]') } catch { return [] }
}

export function getDeviceId() {
  let deviceId = localStorage.getItem(DEVICE_KEY)
  if (!deviceId) {
    deviceId = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`
    localStorage.setItem(DEVICE_KEY, deviceId)
  }
  return deviceId
}
