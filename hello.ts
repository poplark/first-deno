import { serve } from 'https://deno.land/std@0.90.0/http/server.ts';

const app = serve({port: 3001});

console.log('http://localhost:3001');

for await (const req of app) {
    req.respond({body: `hello world\n`});
}
