require('./core/index');
sql = require('./core/models/sql');
full_admin =  require('./models/full_admin');;
require('./routes/web');

require('./routes/api/universities');
require('./routes/api/subjects');
