import app from './app'
import './database'

app.listen(app.get('port'))

console.info('>'.repeat(40))
console.info('       ᓚᘏᗢ "API-TEST-CRM-SERVICE"')
console.info(`       IS ALIVE AT PORT: ${app.get('port')}`)
console.info('>'.repeat(40) + '\n')
