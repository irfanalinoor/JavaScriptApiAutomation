
var expect = require("chai").expect;
var {Get_ForecastByPostalCode} = require("../apiModules/Weather/Get_ForecastByPostalCode");
const data = require('../resource/datafile/InputData.json');


describe('Forecast Weather Data API - Test Suite', function() {
this.timeout(30000);

    describe('Basic Shakedown Tests', function() {

        it('Verify \'Forecast - 3 Hourly Data\' Api response is OK', async function() {

            
            testData = data.BaseURL+'forecast/3hourly?postal_code=28546&key='+data.ApiKey;
            
            forecastResponse = await Get_ForecastByPostalCode(testData);

            expect(forecastResponse.statusCode).to.equal(200);
            
            forecastResponseBody = JSON.parse(forecastResponse.body);
     
            expect(forecastResponseBody.data).to.be.an('array');
            
        });

    });


    describe('Functional Tests', function() {

        it('Verify response of \'Forecast Weather By Postal Code\' Api have value of TIMESTAMP UTC' , async function() {

            testData = data.BaseURL+'forecast/3hourly?postal_code='+data.Forecast3Hourly.Postal_Code+'&key='+data.ApiKey;
            
            forecastResponse = await Get_ForecastByPostalCode(testData);

            expect(forecastResponse.statusCode).to.equal(200);
            
            forecastResponseBody = JSON.parse(forecastResponse.body);
            
            for(var i = 0; i < forecastResponseBody.data.length; i++) {

                var dataObj = forecastResponseBody.data[i];
            
                expect(dataObj).to.include.any.keys('timestamp_utc');

                // console.log("timestamp_utc = "+dataObj.timestamp_utc);

            }
            

        });

        it('Verify response of \'Forecast Weather By Postal Code\' Api have value of WEATHER' , async function() {

            testData = data.BaseURL+'forecast/3hourly?postal_code='+data.Forecast3Hourly.Postal_Code+'&key='+data.ApiKey;
            
            forecastResponse = await Get_ForecastByPostalCode(testData);

            expect(forecastResponse.statusCode).to.equal(200);
            
            forecastResponseBody = JSON.parse(forecastResponse.body);
            
            for(var i = 0; i < forecastResponseBody.data.length; i++) {

                var dataObj = forecastResponseBody.data[i];
            
                expect(dataObj.weather).to.include.any.keys('icon','code','description');
                
                // console.log("weather = "+dataObj.weather);
            }
            

        });

    });

});