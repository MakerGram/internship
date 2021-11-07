/******************************************
 *  Author : Muhammad Swalah A A
 *  Created On : Sun Nov 07 2021
 *  File : GetNextVersion.js
 *******************************************/
const conventionalRecommendedBump = require("conventional-recommended-bump");
const semver = require("semver");
const packageJson = require("./package.json");

/**
 * Returns the next version based on the conventional-commit message conventions.
 * NOTE: The implementation is copied from https://github.com/devdigital/git-flow-standard-version/blob/master/get-next-version.js
 * Kindly refer this for more details: https://github.com/devdigital/git-flow-standard-version#readme
 *
 * @param {*} currentVersion
 * @returns
 */
const getNextVersion = (currentVersion) => {
	return new Promise((resolve, reject) => {
		conventionalRecommendedBump(
			{
				preset: "angular",
			},
			(err, release) => {
				if (err) {
					reject(err);
					return;
				}

				const nextVersion =
					semver.valid(release.releaseType) ||
					semver.inc(currentVersion, release.releaseType);

				resolve(nextVersion);
			},
		);
	});
};

getNextVersion(packageJson.version)
	.then((version) => {
		return console.log(version);
	})
	.catch((error) => {
		return console.log(error);
	});
