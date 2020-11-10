const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_SERVER_URL,
    options: {
      "sonar.projectKey": process.env.SONAR_PROJECT_KEY,
      "sonar.projectName": "nextjs-with-custom-server",
      "sonar.projectVersion": "1.0.0",
      "sonar.sources": "src/frontend",
      "sonar.tests": "src/frontend",
      "sonar.test.inclusions":
        "src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx,server/**/*.spec.js,server/**/*.test.js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.login": process.env.SONAR_LOGIN,
      "sonar.javascript.file.suffixes": ".js,.jsx",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/report.xml",
    },
  },
  () => {}
);
