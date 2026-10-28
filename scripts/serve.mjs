import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd(),port=Number(process.env.PORT||47872);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.ico':'image/x-icon','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const relative=decodeURIComponent(url.pathname).replace(/^\/+/,''),file=path.resolve(root,relative||'index.html');if(!file.startsWith(root+path.sep)||relative.split('/').some(segment=>segment.startsWith('.'))||!['.html','.css','.js','.png','.ico','.svg','.txt'].includes(path.extname(file))) {res.writeHead(404);res.end('Not found');return}if(!(await stat(file)).isFile())throw new Error();const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data)}catch{res.writeHead(404);res.end('Not found')}});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
