// in keys_prod.js, we're actually going to use Enviroment variable
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};

// the process.env.MONGO_URI, and the process.env.SECRET_OR_KEY, are somthing
// that just server can findout what's they are.
// so they're suitable for pushing to servers like heroku or so on

// MONGODB_URI
// mongodb://arman756:arman756@devConnectorCluster-shard-00-00-6xumt.mongodb.net:27017,devConnectorCluster-shard-00-01-6xumt.mongodb.net:27017,devConnectorCluster-shard-00-02-6xumt.mongodb.net:27017/test?ssl=true&replicaSet=devConnectorCluster-shard-0&authSource=admin&retryWrites=true