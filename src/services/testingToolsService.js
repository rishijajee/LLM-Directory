/**
 * Automated Testing Tools Service
 * Provides comprehensive information about testing tools and platforms
 */

export const testingTools = [
  {
    id: 1,
    toolName: 'Selenium',
    category: 'Web Testing',
    description: 'Open-source framework for automating web browsers across many platforms',
    supportedLanguages: 'Java, Python, C#, Ruby, JavaScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Cross-browser testing, regression testing, functional testing',
    pricing: 'Free (Open Source)',
    features: 'Multi-browser support, parallel execution, extensive community support, integration with CI/CD pipelines',
    website: 'https://www.selenium.dev/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 2,
    toolName: 'Cypress',
    category: 'Web Testing',
    description: 'Modern JavaScript-based end-to-end testing framework',
    supportedLanguages: 'JavaScript, TypeScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Frontend testing, component testing, API testing',
    pricing: 'Free (Open Source) / Premium Cloud Features',
    features: 'Real-time reloads, time-travel debugging, automatic waiting, screenshot & video recording',
    website: 'https://www.cypress.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 3,
    toolName: 'Playwright',
    category: 'Web Testing',
    description: 'Cross-browser automation framework by Microsoft',
    supportedLanguages: 'JavaScript, TypeScript, Python, .NET, Java',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Multi-browser testing, mobile web testing, API testing',
    pricing: 'Free (Open Source)',
    features: 'Auto-wait, multiple browser contexts, mobile emulation, network interception',
    website: 'https://playwright.dev/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 4,
    toolName: 'Appium',
    category: 'Mobile Testing',
    description: 'Open-source automation framework for mobile applications',
    supportedLanguages: 'Java, Python, JavaScript, Ruby, C#',
    platforms: 'iOS, Android, Windows',
    bestFor: 'Mobile app testing (native, hybrid, web)',
    pricing: 'Free (Open Source)',
    features: 'Cross-platform testing, real device and emulator support, WebDriver protocol',
    website: 'https://appium.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 5,
    toolName: 'TestComplete',
    category: 'Desktop & Web Testing',
    description: 'Commercial automated testing tool for desktop, web, and mobile',
    supportedLanguages: 'JavaScript, Python, VBScript, C++, C#',
    platforms: 'Windows, macOS, Linux, iOS, Android',
    bestFor: 'Enterprise testing, keyword-driven testing, data-driven testing',
    pricing: 'Commercial (Starting at $6,000/year)',
    features: 'Object recognition, record & playback, visual testing, CI/CD integration',
    website: 'https://smartbear.com/product/testcomplete/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 6,
    toolName: 'JUnit',
    category: 'Unit Testing',
    description: 'Popular unit testing framework for Java applications',
    supportedLanguages: 'Java',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Unit testing, TDD (Test-Driven Development)',
    pricing: 'Free (Open Source)',
    features: 'Annotations, assertions, test runners, parameterized tests, test suites',
    website: 'https://junit.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 7,
    toolName: 'pytest',
    category: 'Unit Testing',
    description: 'Comprehensive testing framework for Python',
    supportedLanguages: 'Python',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Unit testing, functional testing, API testing',
    pricing: 'Free (Open Source)',
    features: 'Simple syntax, fixtures, plugins, parameterized testing, parallel execution',
    website: 'https://pytest.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 8,
    toolName: 'Jest',
    category: 'Unit Testing',
    description: 'JavaScript testing framework with focus on simplicity',
    supportedLanguages: 'JavaScript, TypeScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'React/Node.js testing, snapshot testing, unit testing',
    pricing: 'Free (Open Source)',
    features: 'Zero config, snapshot testing, mocking, code coverage, parallel test execution',
    website: 'https://jestjs.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 9,
    toolName: 'Postman',
    category: 'API Testing',
    description: 'Collaboration platform for API development and testing',
    supportedLanguages: 'JavaScript (for test scripts)',
    platforms: 'Windows, macOS, Linux, Web',
    bestFor: 'API testing, REST/GraphQL testing, API documentation',
    pricing: 'Free / Premium ($12-$49/user/month)',
    features: 'Collection runner, mock servers, automated testing, monitoring, team collaboration',
    website: 'https://www.postman.com/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 10,
    toolName: 'REST Assured',
    category: 'API Testing',
    description: 'Java library for testing REST APIs',
    supportedLanguages: 'Java',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'RESTful API testing, integration testing',
    pricing: 'Free (Open Source)',
    features: 'BDD syntax, JSON/XML support, authentication support, integration with Maven/Gradle',
    website: 'https://rest-assured.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 11,
    toolName: 'Katalon Studio',
    category: 'All-in-One Testing',
    description: 'Comprehensive test automation solution',
    supportedLanguages: 'Groovy, Java',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Web, mobile, API, desktop testing',
    pricing: 'Free / Premium ($208-$2,429/year)',
    features: 'Record & playback, keyword-driven testing, data-driven testing, CI/CD integration',
    website: 'https://www.katalon.com/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 12,
    toolName: 'Robot Framework',
    category: 'Keyword-Driven Testing',
    description: 'Generic open-source automation framework',
    supportedLanguages: 'Python (extensible)',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Acceptance testing, ATDD, RPA',
    pricing: 'Free (Open Source)',
    features: 'Keyword-driven approach, extensible libraries, readable test syntax, reporting',
    website: 'https://robotframework.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 13,
    toolName: 'Cucumber',
    category: 'BDD Testing',
    description: 'BDD framework using Gherkin language',
    supportedLanguages: 'Java, Ruby, JavaScript, Python, .NET',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Behavior-driven development, acceptance testing',
    pricing: 'Free (Open Source)',
    features: 'Gherkin syntax, collaboration between technical and non-technical team members',
    website: 'https://cucumber.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 14,
    toolName: 'TestNG',
    category: 'Unit Testing',
    description: 'Testing framework inspired by JUnit with more capabilities',
    supportedLanguages: 'Java',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Unit testing, integration testing, end-to-end testing',
    pricing: 'Free (Open Source)',
    features: 'Annotations, grouping, parameterization, parallel execution, data providers',
    website: 'https://testng.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 15,
    toolName: 'Jenkins',
    category: 'CI/CD & Test Orchestration',
    description: 'Open-source automation server for CI/CD',
    supportedLanguages: 'Any (orchestration tool)',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Continuous integration, automated test execution, deployment pipelines',
    pricing: 'Free (Open Source)',
    features: 'Plugin ecosystem, distributed builds, pipeline as code, integration with all major testing tools',
    website: 'https://www.jenkins.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 16,
    toolName: 'SoapUI',
    category: 'API Testing',
    description: 'Testing tool for SOAP and REST APIs',
    supportedLanguages: 'Groovy',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'SOAP/REST API testing, functional testing, load testing',
    pricing: 'Free (Open Source) / Pro ($659/year)',
    features: 'Drag-and-drop testing, data-driven testing, security testing, load testing',
    website: 'https://www.soapui.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 17,
    toolName: 'Gatling',
    category: 'Performance Testing',
    description: 'Open-source load testing framework',
    supportedLanguages: 'Scala, Java, Kotlin',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Load testing, stress testing, performance testing',
    pricing: 'Free (Open Source) / Enterprise (Custom)',
    features: 'High performance, real-time metrics, detailed reports, CI/CD integration',
    website: 'https://gatling.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 18,
    toolName: 'JMeter',
    category: 'Performance Testing',
    description: 'Apache open-source load testing tool',
    supportedLanguages: 'Java (plugin development)',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Load testing, performance testing, stress testing',
    pricing: 'Free (Open Source)',
    features: 'Protocol support (HTTP, JDBC, SOAP, etc.), distributed testing, GUI and CLI modes',
    website: 'https://jmeter.apache.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 19,
    toolName: 'Mocha',
    category: 'Unit Testing',
    description: 'Feature-rich JavaScript test framework',
    supportedLanguages: 'JavaScript, TypeScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Node.js testing, asynchronous testing, browser testing',
    pricing: 'Free (Open Source)',
    features: 'Flexible, async support, browser support, coverage reporting, multiple reporters',
    website: 'https://mochajs.org/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 20,
    toolName: 'Jasmine',
    category: 'Unit Testing',
    description: 'BDD framework for JavaScript',
    supportedLanguages: 'JavaScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'JavaScript unit testing, Angular testing',
    pricing: 'Free (Open Source)',
    features: 'No dependencies, clean syntax, spies and mocks, async support',
    website: 'https://jasmine.github.io/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 21,
    toolName: 'XCTest',
    category: 'Mobile Testing',
    description: 'Apple\'s testing framework for iOS/macOS apps',
    supportedLanguages: 'Swift, Objective-C',
    platforms: 'macOS (for iOS/macOS development)',
    bestFor: 'iOS unit testing, UI testing, performance testing',
    pricing: 'Free (Apple Developer)',
    features: 'Integration with Xcode, performance metrics, UI recording, continuous integration',
    website: 'https://developer.apple.com/documentation/xctest',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 22,
    toolName: 'Espresso',
    category: 'Mobile Testing',
    description: 'Google\'s testing framework for Android UI testing',
    supportedLanguages: 'Java, Kotlin',
    platforms: 'Android',
    bestFor: 'Android UI testing, integration testing',
    pricing: 'Free (Open Source)',
    features: 'Synchronization, hermetic testing environment, integration with Android Studio',
    website: 'https://developer.android.com/training/testing/espresso',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 23,
    toolName: 'TestRail',
    category: 'Test Management',
    description: 'Web-based test case management tool',
    supportedLanguages: 'N/A (Management Tool)',
    platforms: 'Web, Windows, macOS, Linux',
    bestFor: 'Test case management, test planning, reporting',
    pricing: 'Commercial ($30-$50/user/month)',
    features: 'Test case organization, milestone tracking, integrations, custom reports',
    website: 'https://www.gurock.com/testrail/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 24,
    toolName: 'BrowserStack',
    category: 'Cloud Testing',
    description: 'Cloud-based browser and device testing platform',
    supportedLanguages: 'Any (supports all major testing frameworks)',
    platforms: 'Cloud (2000+ real devices and browsers)',
    bestFor: 'Cross-browser testing, mobile device testing, visual regression',
    pricing: 'Commercial ($29-$299/month)',
    features: 'Real device cloud, automated testing, live testing, local testing, integrations',
    website: 'https://www.browserstack.com/',
    lastUpdated: new Date().toISOString()
  },
  {
    id: 25,
    toolName: 'k6',
    category: 'Performance Testing',
    description: 'Modern load testing tool for developers',
    supportedLanguages: 'JavaScript',
    platforms: 'Windows, macOS, Linux',
    bestFor: 'Load testing, performance testing, CI/CD integration',
    pricing: 'Free (Open Source) / Cloud ($49-$499/month)',
    features: 'Developer-friendly scripting, performance metrics, CI/CD friendly, cloud execution',
    website: 'https://k6.io/',
    lastUpdated: new Date().toISOString()
  }
];

/**
 * Get all testing tools
 */
export const getAllTestingTools = () => {
  const lastUpdateTime = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return {
    tools: testingTools,
    lastUpdateTime,
    totalCount: testingTools.length
  };
};

/**
 * Get unique categories
 */
export const getCategories = () => {
  const categories = ['All', ...new Set(testingTools.map(tool => tool.category))];
  return categories;
};

/**
 * Filter tools by category
 */
export const filterByCategory = (category) => {
  if (category === 'All') {
    return testingTools;
  }
  return testingTools.filter(tool => tool.category === category);
};
