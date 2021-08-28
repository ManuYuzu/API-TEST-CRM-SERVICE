import app from './app.js'
import './database'

app.listen(app.get('port'))

console.info('>'.repeat(40))
console.info('ᓚᘏᗢ "API-TEST-CRM-SERVICE" IS ALIVE')
console.info(`PORT: ${ app.get('port') }`)
console.info('>'.repeat(40) + '\n')
