"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
_app.default.listen(_app.default.get('port'));

console.info('>'.repeat(40));
console.info('       ᓚᘏᗢ "API-TEST-CRM-SERVICE"');
console.info("       IS ALIVE AT PORT: ".concat(_app.default.get('port')));
console.info('>'.repeat(40) + '\n');