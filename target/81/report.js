$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "am going to validate NTL home page",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sample"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validating NTL home page with various data",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter phonenumber as \u003cPHONENUMBER\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select pickup address as \u003cPICK\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select drop address as \u003cDROP\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select vehicle type as \u003cVEHICLETYPE\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "dont click book button",
  "keyword": "But "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "PHONENUMBER",
        "PICK",
        "DROP",
        "VEHICLETYPE"
      ],
      "line": 16,
      "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;1"
    },
    {
      "cells": [
        "FIREFOX",
        "http://www.ntltaxi.com/",
        "Jalal",
        "12345",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 17,
      "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;2"
    },
    {
      "cells": [
        "FIREFOX",
        "http://www.ntltaxi.com/",
        "Yuva",
        "6789",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 18,
      "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;3"
    },
    {
      "cells": [
        "FIREFOX",
        "http://www.ntltaxi.com/",
        "Dinesh",
        "55555",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 19,
      "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "validating NTL home page with various data",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sample"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as FIREFOX",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter username as Jalal",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter phonenumber as 12345",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select pickup address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select drop address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select vehicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "dont click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 16
    }
  ],
  "location": "SampleTest.login(String)"
});
formatter.result({
  "duration": 9345827662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "SampleTest.enterURL(String)"
});
formatter.result({
  "duration": 20218597715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalal",
      "offset": 18
    }
  ],
  "location": "SampleTest.Enterusername(String)"
});
formatter.result({
  "duration": 848138915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 21
    }
  ],
  "location": "SampleTest.enterphonenumber(String)"
});
formatter.result({
  "duration": 266042463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 25
    }
  ],
  "location": "SampleTest.enterpickup(String)"
});
formatter.result({
  "duration": 184767747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 23
    }
  ],
  "location": "SampleTest.enterdropaddress(String)"
});
formatter.result({
  "duration": 339549279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "SampleTest.entervehicletype(String)"
});
formatter.result({
  "duration": 681273176,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.dontclickbutton()"
});
formatter.result({
  "duration": 97932,
  "status": "passed"
});
formatter.after({
  "duration": 405415,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validating NTL home page with various data",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sample"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as FIREFOX",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter username as Yuva",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter phonenumber as 6789",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select pickup address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select drop address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select vehicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "dont click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 16
    }
  ],
  "location": "SampleTest.login(String)"
});
formatter.result({
  "duration": 160370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "SampleTest.enterURL(String)"
});
formatter.result({
  "duration": 620283782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yuva",
      "offset": 18
    }
  ],
  "location": "SampleTest.Enterusername(String)"
});
formatter.result({
  "duration": 194393803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6789",
      "offset": 21
    }
  ],
  "location": "SampleTest.enterphonenumber(String)"
});
formatter.result({
  "duration": 180064841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 25
    }
  ],
  "location": "SampleTest.enterpickup(String)"
});
formatter.result({
  "duration": 182116723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 23
    }
  ],
  "location": "SampleTest.enterdropaddress(String)"
});
formatter.result({
  "duration": 430533870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "SampleTest.entervehicletype(String)"
});
formatter.result({
  "duration": 531434038,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.dontclickbutton()"
});
formatter.result({
  "duration": 107341,
  "status": "passed"
});
formatter.after({
  "duration": 47470,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validating NTL home page with various data",
  "description": "",
  "id": "am-going-to-validate-ntl-home-page;validating-ntl-home-page-with-various-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sample"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as FIREFOX",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter URL as http://www.ntltaxi.com/",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter username as Dinesh",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter phonenumber as 55555",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select pickup address as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "select drop address as ADYAR",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select vehicle type as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "dont click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 16
    }
  ],
  "location": "SampleTest.login(String)"
});
formatter.result({
  "duration": 181325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "SampleTest.enterURL(String)"
});
formatter.result({
  "duration": 632230286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dinesh",
      "offset": 18
    }
  ],
  "location": "SampleTest.Enterusername(String)"
});
formatter.result({
  "duration": 169797305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55555",
      "offset": 21
    }
  ],
  "location": "SampleTest.enterphonenumber(String)"
});
formatter.result({
  "duration": 172610410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 25
    }
  ],
  "location": "SampleTest.enterpickup(String)"
});
formatter.result({
  "duration": 161543163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 23
    }
  ],
  "location": "SampleTest.enterdropaddress(String)"
});
formatter.result({
  "duration": 161975947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "SampleTest.entervehicletype(String)"
});
formatter.result({
  "duration": 608102068,
  "status": "passed"
});
formatter.match({
  "location": "SampleTest.dontclickbutton()"
});
formatter.result({
  "duration": 144119,
  "status": "passed"
});
formatter.after({
  "duration": 35068,
  "status": "passed"
});
});