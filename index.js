require('./core/index');
sql = require('./core/models/sql');
full_admin =  require('./models/full_admin');;
require('./routes/web');

require('./routes/api/universities');
require('./routes/api/subjects');
require('./routes/api/notes');
require('./routes/api/images');
require('./routes/buy/buy-first');
require('./routes/buy/buy-second');
