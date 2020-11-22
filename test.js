const alert = require('./index.js');

alert();

alert({ type: "success", msg: "All done!", name: `Done`});

alert({ type: "warning", msg: "Tomorrow it's going to be hot. Get up early!",});

alert({ type: "info", msg: "No Hurricanes in the Gulf of Mexico",});

alert({ type: "error", msg: "Oops that doesn't work. ",name: `Mistake!`});
