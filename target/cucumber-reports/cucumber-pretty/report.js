$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/classTasks.feature");
formatter.feature({
  "name": "Class tasks",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@classTasks"
    }
  ]
});
formatter.scenario({
  "name": "Testing chase bank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@classTasks"
    },
    {
      "name": "@chase"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open \"chase bank\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iOpen(java.lang.String)"
});
formatter.write("08-22-2020 23:07:30 INFO:  opened website: chase bank");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-22-2020 23:07:30");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify title is \"Credit Card, Mortgage, Banking, Auto | Chase Online | Chase.comS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iVerifyTitleIs(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...e Online | Chase.com[S]\u003e but was:\u003c...e Online | Chase.com[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step_definitions.ClassTaskSteps.iVerifyTitleIs(ClassTaskSteps.java:32)\r\n\tat ✽.I verify title is \"Credit Card, Mortgage, Banking, Auto | Chase Online | Chase.comS\"(file:///C:/Users/olena/Desktop/CucumberBDD/src/test/resources/features/classTasks.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click \"ATM \u0026 branch\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.ClassTaskSteps.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-22-2020 23:07:30");
formatter.after({
  "status": "passed"
});
});