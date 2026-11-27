import fs from 'node:fs'
import path from 'node:path'
import configuredPrices from '../data/product-prices.json' with { type: 'json' }

const dataFile=process.env.PRODUCT_PRICES_FILE||'/tmp/serodesk-product-prices.json'
const defaults=configuredPrices

function readPrices(){
  try{return{...defaults,...JSON.parse(fs.readFileSync(dataFile,'utf8'))}}
  catch(error){
    if(error.code!=='ENOENT')throw error
    return defaults
  }
}

function writePrices(prices){
  fs.mkdirSync(path.dirname(dataFile),{recursive:true})
  fs.writeFileSync(dataFile,JSON.stringify(prices,null,2))
}

export default function handler(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','Content-Type')
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,OPTIONS')
  if(req.method==='OPTIONS')return res.status(204).end()
  if(req.method==='GET'){
    try{return res.status(200).json(readPrices())}
    catch{return res.status(500).json({error:'Unable to load product prices'})}
  }
  if(req.method==='PUT'){
    const submitted=req.body
    if(!submitted||typeof submitted!=='object'||Array.isArray(submitted))return res.status(400).json({error:'Product prices must be an object'})
    const prices={}
    for(const id of Object.keys(defaults)){
      const value=submitted[id]
      if(typeof value!=='number'||!Number.isFinite(value)||value<0)return res.status(400).json({error:`Invalid product price: ${id}`})
      prices[id]=value
    }
    try{
      writePrices(prices)
      return res.status(200).json(prices)
    }catch{return res.status(500).json({error:'Unable to save product prices'})}
  }
  return res.status(405).json({error:'Method not allowed'})
}
