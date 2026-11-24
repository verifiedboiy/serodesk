export const APPLICATIONS_ENDPOINT='/api/applications'

export async function fetchApplications(){
  const response=await fetch(APPLICATIONS_ENDPOINT,{cache:'no-store'})
  if(!response.ok)throw new Error('Unable to load applications')
  return response.json()
}

export async function saveApplication(application){
  const response=await fetch(APPLICATIONS_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(application)})
  if(!response.ok)throw new Error('Unable to save application')
  return response.json()
}

export async function updateApplicationStatus(deviceId,status){
  const response=await fetch(APPLICATIONS_ENDPOINT,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({deviceId,status})})
  if(!response.ok)throw new Error('Unable to update application')
  return response.json()
}

export async function clearApplications(){
  await fetch(APPLICATIONS_ENDPOINT,{method:'DELETE'})
}
