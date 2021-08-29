/**********************************************
 *
 *  API for a CRM Service
 *           -
 *  The Agile Monkeys Test
 *
 * @author Manuel González Afonso
 * @since 24/08/2021
 * @version 1.0.0
 *
 *********************************************/

import app from './app'
import './database'

app.listen(app.get('port'))

console.info('>'.repeat(40))
console.info('       ᓚᘏᗢ "API-TEST-CRM-SERVICE"')
console.info(`       IS ALIVE AT PORT: ${app.get('port')}`)
console.info('>'.repeat(40) + '\n')
