'use strict';

const Sharp = require('./sharp/constructor');
require('./sharp/input')(Sharp);
require('./sharp/resize')(Sharp);
require('./sharp/composite')(Sharp);
require('./sharp/operation')(Sharp);
require('./sharp/colour')(Sharp);
require('./sharp/channel')(Sharp);
require('./sharp/output')(Sharp);
require('./sharp/utility')(Sharp);

module.exports = Sharp;
