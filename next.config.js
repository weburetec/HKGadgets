const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	eslint: { ignoreDuringBuilds: true },
	env: {
		JWT_SECRET: "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd",
		CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/weburetec",
		CLOUD_NAME: "weburetec",
		UPLOAD_PRESET: "ml_default",
	},
	trailingSlash: true,
};
