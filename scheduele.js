var fileLog = require('./fileLog')
var CronJob = require('cron').CronJob;
var job = new CronJob(
	'0 0 3 * * *',
	function() {
        fileLog("Schedueler","Starting Task")
		require('child_process').fork('task.js')
	},
	null,
	true,
	'America/Los_Angeles'
);