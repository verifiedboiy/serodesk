import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'

const root=process.cwd()
const dataFile=path.join(root,'data','applications.json')
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'}

await fs.mkdir(path.dirname(dataFile),{recursive:true})
try{await fs.access(dataFile)}catch{await fs.writeFile(dataFile,'[]')}

async function readApplications(){try{return JSON.parse(await fs.readFile(dataFile,'utf8'))}catch{return[]}}
async function writeApplications(applications){await fs.writeFile(dataFile,JSON.stringify(applications,null,2))}

const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost')
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','Content-Type')
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS')
  if(req.method==='OPTIONS'){res.writeHead(204);res.end();return}

  if(url.pathname==='/'||url.pathname==='')url.pathname='/home.html'

  if(url.pathname==='/.well-known/appspecific/com.chrome.devtools.json'){res.writeHead(204);res.end();return}

  if(url.pathname==='/api/applications'){
    try{
      if(req.method==='GET'){res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(await readApplications()));return}
      if(req.method==='POST'||req.method==='PATCH'||req.method==='DELETE'){
        let body=''
        for await(const chunk of req)body+=chunk
        const applications=await readApplications()
        if(req.method==='DELETE'){await writeApplications([]);res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify([]));return}
        const payload=body?JSON.parse(body):{}
        if(req.method==='POST'){
          const filtered=applications.filter(app=>app.deviceId!==payload.deviceId)
          filtered.unshift(payload)
          await writeApplications(filtered)
          res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(payload));return
        }
        if(req.method==='PATCH'){
          const updated=applications.map(app=>app.deviceId===payload.deviceId?{...app,status:payload.status}:app)
          await writeApplications(updated)
          res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify(updated));return
        }
      }
    }catch(error){res.writeHead(500,{'Content-Type':'application/json'});res.end(JSON.stringify({error:error.message}));return}
  }

  if(url.pathname.startsWith('/api/')){res.writeHead(404,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Not found'}));return}

  let relativePath=url.pathname.slice(1)
  if(!relativePath||relativePath==='home.html')relativePath='dist/home.html'
  else if(relativePath.endsWith('.html'))relativePath=`dist/${relativePath}`
  else if(relativePath.startsWith('assets/'))relativePath=`dist/${relativePath}`
  else relativePath=`dist/${relativePath}`
  const filePath=path.join(root,relativePath)
  try{await fs.access(filePath);const data=await fs.readFile(filePath);res.writeHead(200,{'Content-Type':mime[path.extname(filePath)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found')}
})

const port=Number(process.env.PORT||5176)
server.listen(port,'0.0.0.0',()=>console.log(`SeroDesk API server running at http://127.0.0.1:${port}`))

