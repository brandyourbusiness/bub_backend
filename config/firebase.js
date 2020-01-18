const admin = require("firebase-admin");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const serviceAccount = require(path.resolve(
	__dirname,
	"../",
	process.env.GOOGLE_APPLICATION_CREDENTIALS
));

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://whole-bub.firebaseio.com"
});

export const auth = admin.auth();
