# JavaScript Api Automation Project


## Overview
* This is a simple project to showcase Api Test Automation in JavaScript.
* Project uses free [Weather API](https://www.weatherbit.io/api/swaggerui/weather-api-v2#/)
* **Skills:** Api Test Automation, Modular Design
* **Languages:** JavaScript
* **SCM:** Git
* **Build/Dependency Management:** Mocha/npm
* **API Testing Frameworks:** REST Api, NodeJS, Request
* **Assertion Lib:** Chai, Expect, Should
* **CI/CD:** CircleCI

----
## Setup
- Download [JavaScriptApiAutomation](https://github.com/irfanalinoor/JavaScriptApiAutomation) project repo from GitHub
- Install latest [Node.JS](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/downloads)
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- Navigate to Project Directory in Terminal
- Run `npm install`
- Run `npm install -g mocha`
- Run Tests `npm test`

----
## Test Scenarios

    Current Weather Data API - Test Suite
    Basic Shakedown Tests
      √ Verify 'Current Weather By GPS Coordinates' Api response is OK (1227ms)
    Functional Tests
      √ Verify STATE CODE is displayed in response of 'Current Weather By GPS Coordinates' Api (870ms)   

    Forecast Weather Data API - Test Suite
    Basic Shakedown Tests
      √ Verify 'Forecast - 3 Hourly Data' Api response is OK (1206ms)
    Functional Tests
      √ Verify response of 'Forecast Weather By Postal Code' Api have value of TIMESTAMP UTC (1286ms)
      √ Verify response of 'Forecast Weather By Postal Code' Api have value of WEATHER (2055ms)
