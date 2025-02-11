export const config = {
    specs: [
        './test/specs/**/*.js'
    ],
 //   runner: 'local',
 //   port: 4723,
        user: 'oauth-arthursilvamirandanobre-851e6',
        key: '17664218-f59c-4fd9-acce-a507e7a54806',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
    
    maxInstances: 1,
    capabilities: [
    
    //  {
    //    platformName: 'Android',
    //    'appium:deviceName': 'ebac-qe',
    //    'appium:platformVersion': '9.0',
    //    'appium:automationName': 'UiAutomator2',
    //    'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //    'appium:appWaitActivity': '.MainActivity',
    //    'appium:disableIdLocatorAutocompletion' : true
    //  } 
   
     {
        platformName: 'Android',
        'appium:app': 'storage:77f30680-cbbf-4309-828d-be7746ec50fe', // The filename of the mobile app
        'appium:deviceName': 'Samsung.*',
        'appium:platformVersion': '10',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion' : true,
        'sauce:options': {
           build: 'appium-build-teste-ebacshop',
           name: '  Teste EBAC Shop',
           deviceOrientation: 'PORTRAIT',
           appiumVersion:  '2.0.0'
         },

      } 

    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }] 
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
            await driver.takeScreenshot();
    }
}