const recursiveRenderSection = require("./recursiveRenderSection");
const updateSection = require("./updateSection");

module.exports = generateDetailedReportBySuites = ($, talliedResults) => {
  let section_id = 'report-by-test-suites';
  let section_title = 'Report by Test Suites';

  if (!talliedResults) {
    updateSection($, section_id, section_title, '');
    return;
  }
  let bySuite = talliedResults.bySuite;

  let level = 3;
  let testResultReport = recursiveRenderSection(
    section_id,
    bySuite,
    (id, key, section_number) => `${id}-${key}`,
    (key, value) => "",
    level, ["Method", "Implementation"],
    tr => `<td>${tr.did_method}</td><td>${tr.implementation}</td>`
    );


  updateSection($, section_id, section_title, testResultReport);
};
