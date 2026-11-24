import fs from 'node:fs'
import path from 'node:path'

const dataFile = process.env.APPLICATIONS_FILE || '/tmp/serodesk-applications.json'

function readApplications() {
  try { return JSON.parse(fs.readFileSync(dataFile, 'utf8')) } catch { return [] }
}

function writeApplications(applications) {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true })
  fs.writeFileSync(dataFile, JSON.stringify(applications, null, 2))
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
  if (req.method === 'OPTIONS') return res.status(204).end()

  if (req.method === 'GET') return res.status(200).json(readApplications())

  const applications = readApplications()
  if (req.method === 'DELETE') {
    writeApplications([])
    return res.status(200).json([])
  }

  if (req.method === 'POST') {
    const payload = req.body
    const updated = applications.filter(app => app.deviceId !== payload.deviceId)
    updated.unshift(payload)
    writeApplications(updated)
    return res.status(200).json(payload)
  }

  if (req.method === 'PATCH') {
    const { deviceId, status } = req.body
    const updated = applications.map(app => app.deviceId === deviceId ? { ...app, status } : app)
    writeApplications(updated)
    return res.status(200).json(updated)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
