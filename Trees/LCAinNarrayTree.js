
/*
given 3 inputs of a tree org chart that contains directReports property pointing to their direct reports.
3 inputs : topManager, reportone, reporttwo
find the lowest common manager of reportOne, reportTwo
*/

// O(n) TC, O(h) SC
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  // Write your code here.
	return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
	let numImportantreports = 0;
	for (const directreport of manager.directReports) {
		const orgInfo = getOrgInfo(directreport, reportOne, reportTwo);
		if (orgInfo.lowestCommonManager) return orgInfo;
		numImportantreports += orgInfo.numImportantreports;
	}
	if (manager === reportOne || manager === reportTwo) numImportantreports++;
	const lowestCommonManager = numImportantreports === 2 ? manager : null;
	return {lowestCommonManager, numImportantreports};
}

class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
