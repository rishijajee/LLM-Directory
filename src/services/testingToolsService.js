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
    architecture: {
      type: 'Client-Server Architecture with WebDriver Protocol',
      components: {
        'Selenium WebDriver': 'Core API that directly communicates with browsers through browser-specific drivers',
        'Browser Drivers': 'Native drivers for Chrome, Firefox, Safari, Edge that translate WebDriver commands to browser actions',
        'Language Bindings': 'Client libraries in Java, Python, C#, Ruby, JavaScript that provide programming interfaces',
        'Selenium Grid': 'Distributed test execution system for parallel testing across multiple machines and browsers'
      },
      layers: '4-tier: Client Code → Language Binding → WebDriver Protocol → Browser Driver → Browser',
      frameworkPattern: 'Command Pattern with Remote Execution',
      detailedDescription: 'Selenium uses the W3C WebDriver protocol as a communication standard. Tests written in any supported language are converted to HTTP requests following the WebDriver protocol. These requests are sent to browser-specific drivers (ChromeDriver, GeckoDriver, etc.) which execute the commands natively in the browser. Selenium Grid adds a hub-node architecture for distributed testing, where the hub routes test requests to available nodes running different browser/OS combinations.'
    },
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
    architecture: {
      type: 'Node.js-based In-Browser Test Execution',
      components: {
        'Test Runner': 'Interactive GUI that executes tests and displays results in real-time with time-travel debugging',
        'Cypress Server': 'Node.js server that orchestrates test execution and communicates with the browser',
        'Browser Proxy': 'Network proxy that intercepts and modifies HTTP requests/responses for testing',
        'Command Queue': 'Asynchronous command execution system with automatic retry and waiting logic'
      },
      layers: '3-tier: Test Code → Cypress Server → Browser (same event loop)',
      frameworkPattern: 'In-Process Testing with Proxy Network Layer',
      detailedDescription: 'Unlike Selenium, Cypress runs directly inside the browser alongside your application, sharing the same event loop. This allows direct access to DOM, window, and application state. The Cypress server acts as a reverse proxy, intercepting all network traffic to enable request stubbing, response modification, and network testing. Tests are written as asynchronous command chains that automatically retry and wait for elements, eliminating flaky tests from timing issues.'
    },
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
    architecture: {
      type: 'Multi-Browser DevTools Protocol Architecture',
      components: {
        'Browser Server': 'Dedicated browser instances controlled via DevTools Protocol (CDP for Chromium, custom for Firefox/WebKit)',
        'Page Contexts': 'Isolated browser contexts (like incognito windows) that don\'t share cookies/cache',
        'Auto-Waiting Engine': 'Smart waiting system that checks element actionability before interacting',
        'Network Interceptor': 'Route-based request/response interception and modification at the protocol level'
      },
      layers: '4-tier: Test Code → Playwright API → DevTools Protocol → Browser Engine',
      frameworkPattern: 'Multi-Context Parallel Execution with Protocol-Level Control',
      detailedDescription: 'Playwright leverages browser DevTools protocols (CDP for Chromium, proprietary for Firefox/WebKit) to achieve deep browser control. Each test can spawn multiple isolated browser contexts in parallel, enabling efficient test execution. The auto-waiting mechanism inspects element properties (visibility, stability, enabled state) before actions, eliminating explicit waits. Network interception works at the protocol level, allowing request modification, mocking, and HAR recording without proxies.'
    },
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
    architecture: {
      type: 'Parallel Test Runner with Isolated Execution Environments',
      components: {
        'Test Runner': 'Worker pool that executes tests in parallel across multiple processes for speed',
        'JSDOM Environment': 'Simulated browser environment for testing DOM manipulation without a real browser',
        'Module Mocker': 'Automatic function and module mocking system with manual mock overrides',
        'Snapshot Engine': 'Serializes component output to files for regression testing of UI changes'
      },
      layers: '3-tier: Test Files → Jest Runner → Node.js Worker Processes',
      frameworkPattern: 'Worker Pool Pattern with Sandboxed Execution',
      detailedDescription: 'Jest uses a worker pool architecture where tests are distributed across multiple Node.js processes for parallel execution. Each test file runs in an isolated environment with its own global scope, preventing test interference. The test runner automatically mocks modules by intercepting require() calls, allowing easy dependency isolation. For React testing, Jest uses JSDOM to simulate a browser environment in Node.js, enabling DOM testing without spinning up real browsers. Snapshot testing serializes component output (JSX, objects) to __snapshots__ files, which are version-controlled and compared on subsequent runs.'
    },
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
    architecture: {
      type: 'Master-Slave Distributed Load Generation',
      components: {
        'Test Plan Engine': 'Orchestrates test execution based on thread groups, samplers, and controllers',
        'Thread Groups': 'Simulate concurrent users with configurable ramp-up periods and iteration counts',
        'Protocol Samplers': 'Pluggable samplers for HTTP, JDBC, JMS, FTP, SMTP, and other protocols',
        'Listeners & Reporters': 'Real-time and post-execution result collectors with statistical aggregation'
      },
      layers: '3-tier: Test Plan → Thread Pool → Protocol Samplers',
      frameworkPattern: 'Distributed Master-Slave with Plugin Architecture',
      detailedDescription: 'JMeter uses a master-slave architecture for distributed load generation. The master (controller) coordinates multiple slave (remote) instances to generate massive load from different machines. Each JMeter instance creates thread groups that simulate virtual users. Threads execute samplers (HTTP requests, database queries, etc.) according to the test plan logic (loops, conditionals, timers). Results are collected by listeners and aggregated into reports showing metrics like response times, throughput, error rates. The plugin system allows custom samplers, listeners, and functions to be added without modifying core code.'
    },
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
  },
  {
    id: 26,
    toolName: 'Tricentis Tosca',
    category: 'All-in-One Testing',
    description: 'Enterprise continuous testing platform with AI-powered test automation',
    supportedLanguages: 'Model-based (no-code/low-code), VB.NET, C#',
    platforms: 'Windows, Web, Mobile (iOS, Android), API',
    bestFor: 'Enterprise test automation, SAP testing, model-based testing, continuous testing',
    pricing: 'Commercial (Custom enterprise pricing)',
    features: 'Model-based test automation, risk-based testing, service virtualization, test data management, vision AI for UI testing',
    website: 'https://www.tricentis.com/products/automate-continuous-testing-tosca',
    architecture: {
      type: 'Model-Based Test Automation with AI-Powered Execution',
      components: {
        'Tosca Commander': 'Central interface for test design, execution, and management using visual models',
        'Vision AI Engine': 'Computer vision-based object recognition for testing any UI technology without technical selectors',
        'Test Case Design': 'Model-based approach where test cases are derived from business requirements and application models',
        'Execution Engine': 'Distributed execution across multiple environments with parallel test execution',
        'Test Data Service': 'Centralized test data management with data provisioning and masking capabilities',
        'Analytics Dashboard': 'Risk-based insights and test coverage analytics with AI-driven recommendations'
      },
      layers: '4-tier: Business Models → Test Cases → Execution Engine → Application Under Test',
      frameworkPattern: 'Model-Based Testing with AI-Augmented Execution',
      detailedDescription: 'Tricentis Tosca uses a unique model-based testing approach where tests are designed from application models rather than scripts. The platform scans applications to create models of UI elements, business processes, and data flows. Test cases are then derived from these models, making tests resilient to UI changes. The Vision AI engine uses computer vision and machine learning to identify UI elements without relying on traditional selectors (XPath, CSS), enabling testing of technologies like SAP, Salesforce, legacy mainframes, and custom applications. The risk-based testing module uses AI to prioritize test execution based on code changes, business impact, and historical defect data.'
    },
    lastUpdated: new Date().toISOString()
  }
];

// AI/Gen AI Integration details for each tool
const aiIntegrationDetails = {
  'Selenium': {
    capability: 'Partial',
    integration: 'LLM-powered test generation and self-healing locators',
    description: 'Can integrate with OpenAI GPT, Claude, or other LLMs through custom plugins. LLMs can generate Selenium test scripts from natural language requirements, suggest optimal locators, and create self-healing tests that use AI to adapt when UI elements change. Tools like Testim.io and Applitools use AI/ML for visual testing with Selenium.',
    examples: 'Generate test code: "Test login with valid credentials" → GPT generates Selenium code. Self-healing: AI detects changed locators and suggests alternatives.'
  },
  'Cypress': {
    capability: 'Partial',
    integration: 'AI-assisted test generation and ChatGPT plugins',
    description: 'Integration through ChatGPT plugins or custom API calls to LLMs. Can use GPT-4 to generate Cypress test code from user stories, convert manual test cases to automated scripts, and analyze test failures to suggest fixes. Some community plugins enable natural language test writing.',
    examples: 'Natural language test: "Verify checkout flow" → LLM generates complete Cypress test. AI analyzes flaky tests and suggests stability improvements.'
  },
  'Playwright': {
    capability: 'Partial',
    integration: 'Codegen with AI enhancement and GPT-based test generation',
    description: 'Microsoft Playwright Codegen can be enhanced with AI. Integrate with Azure OpenAI or other LLMs to generate Playwright scripts from requirements, convert recorded actions to optimized code, and create data-driven tests. AI can analyze accessibility issues and suggest improvements.',
    examples: 'AI-powered codegen: Record actions → AI optimizes selectors and adds assertions. Generate tests from Figma designs using vision models.'
  },
  'Appium': {
    capability: 'Limited',
    integration: 'AI-based element detection and test case generation',
    description: 'Can integrate with computer vision AI models for element recognition in mobile apps. LLMs can generate Appium test scripts from app screenshots or requirements. AI assists in identifying flaky tests and optimizing wait strategies for mobile testing.',
    examples: 'Visual AI: Upload app screenshot → AI identifies elements and generates locators. LLM generates mobile test scripts from user stories.'
  },
  'TestComplete': {
    capability: 'Yes - Built-in',
    integration: 'Native AI-powered object recognition',
    description: 'TestComplete has built-in AI object recognition that uses machine learning to identify UI elements even when properties change. Can integrate with external LLMs via APIs for test generation. The AI engine learns from your application UI and adapts to changes automatically.',
    examples: 'Built-in: AI recognizes buttons/fields by visual appearance, not just properties. External: ChatGPT generates TestComplete script code from requirements.'
  },
  'JUnit': {
    capability: 'Partial',
    integration: 'LLM-based test generation and code completion',
    description: 'GitHub Copilot and ChatGPT can generate JUnit test cases from Java code. LLMs analyze production code and suggest edge cases, generate parameterized tests, and create mock objects. AI code assistants provide intelligent test assertions and help maintain test suites.',
    examples: 'Copilot: Type @Test → AI suggests complete test method. GPT-4: "Generate JUnit tests for UserService" → Creates comprehensive test class.'
  },
  'pytest': {
    capability: 'Partial',
    integration: 'AI-powered test generation and completion',
    description: 'Compatible with GitHub Copilot, ChatGPT, and Claude for generating pytest test functions from Python code. LLMs can create fixtures, parametrize tests, and suggest assertions. AI tools analyze code coverage and recommend missing test scenarios.',
    examples: 'AI generates fixtures and parametrized tests. ChatGPT creates pytest tests from docstrings and function signatures with edge cases.'
  },
  'Jest': {
    capability: 'Partial',
    integration: 'LLM-assisted test writing and snapshot generation',
    description: 'Works with GitHub Copilot for React/JavaScript test generation. ChatGPT can create Jest tests from component code, generate snapshot tests, and write mocking logic. AI can analyze test failures and suggest fixes, especially for async testing issues.',
    examples: 'Copilot generates Jest tests for React components. GPT creates mock implementations and test data. AI suggests matchers and assertions.'
  },
  'Postman': {
    capability: 'Yes - Built-in',
    integration: 'Postbot AI assistant powered by GPT',
    description: 'Postman has built-in Postbot, an AI assistant powered by OpenAI GPT. Postbot generates API test scripts, creates request bodies, writes pre-request scripts, suggests assertions, and helps debug API responses. Can analyze API specs and auto-generate test collections.',
    examples: 'Postbot: "Create tests for this endpoint" → Generates test scripts. "Debug this 500 error" → Analyzes response and suggests fixes. Auto-generates tests from OpenAPI specs.'
  },
  'REST Assured': {
    capability: 'Partial',
    integration: 'LLM code generation for API tests',
    description: 'LLMs like ChatGPT and Claude can generate REST Assured test code from API documentation (OpenAPI/Swagger). AI can create BDD-style tests, generate data builders, and suggest validation strategies. GitHub Copilot assists with fluent API syntax.',
    examples: 'GPT: Paste API spec → Generates REST Assured test code with validations. AI suggests request builders and response extractors.'
  },
  'Katalon Studio': {
    capability: 'Yes - Built-in',
    integration: 'Built-in AI with self-healing and smart locators',
    description: 'Katalon has native AI features including self-healing locators that automatically adapt to UI changes, and visual testing with AI image comparison. Can integrate with external LLMs for natural language test generation. AI suggests test optimization and maintenance strategies.',
    examples: 'Self-healing: UI changes → AI finds new locators automatically. Visual AI detects layout changes. External: GPT generates Katalon scripts from requirements.'
  },
  'Robot Framework': {
    capability: 'Partial',
    integration: 'AI-powered keyword generation',
    description: 'LLMs can generate Robot Framework keywords and test cases from natural language. ChatGPT understands the keyword-driven syntax and can create custom libraries. AI can convert manual test cases to Robot syntax and suggest keyword improvements.',
    examples: 'GPT generates keywords from descriptions. AI converts Excel test cases to Robot format. Suggests keyword refactoring for better reusability.'
  },
  'Cucumber': {
    capability: 'Partial',
    integration: 'Gherkin generation from requirements',
    description: 'LLMs excel at generating Gherkin scenarios from user stories or requirements. ChatGPT, Claude, and GPT-4 can write Given-When-Then scenarios, suggest step definitions, and generate test data. AI can also convert Gherkin to executable code in multiple languages.',
    examples: 'User story → LLM generates Gherkin scenarios. AI creates step definition code. Suggests edge case scenarios from requirements.'
  },
  'TestNG': {
    capability: 'Partial',
    integration: 'AI code generation and test suite optimization',
    description: 'GitHub Copilot and ChatGPT generate TestNG annotations, test methods, and data providers. AI can optimize test suite execution order based on dependencies, suggest parallel execution strategies, and create TestNG XML configurations.',
    examples: 'AI generates @DataProvider methods with test data. Suggests optimal test grouping and execution order. Creates suite XML from test descriptions.'
  },
  'Jenkins': {
    capability: 'Yes - Emerging',
    integration: 'AI-powered pipeline generation and optimization',
    description: 'LLMs can generate Jenkinsfiles from requirements, optimize pipeline stages, and suggest parallel execution strategies. AI analyzes build failures and suggests fixes. Tools like GitHub Copilot help write Groovy scripts for Jenkins pipelines. Emerging plugins integrate GPT for intelligent CI/CD.',
    examples: 'GPT generates complete Jenkinsfile from description. AI analyzes failed builds and suggests solutions. Optimizes pipeline for faster execution.'
  },
  'SoapUI': {
    capability: 'Limited',
    integration: 'API test generation from WSDL/OpenAPI',
    description: 'LLMs can parse WSDL/SOAP definitions and generate SoapUI test cases. ChatGPT creates Groovy scripts for assertions, generates test data, and suggests security test scenarios. AI can analyze SOAP responses and create validation rules.',
    examples: 'Paste WSDL → AI generates test requests. GPT writes Groovy assertion scripts. Suggests security and performance test scenarios.'
  },
  'Gatling': {
    capability: 'Partial',
    integration: 'Scala simulation script generation',
    description: 'LLMs like GPT-4 can generate Gatling simulation scripts in Scala from load testing requirements. AI suggests realistic user scenarios, optimizes request chains, and creates data feeders. Can analyze performance results and recommend optimizations.',
    examples: 'Describe load scenario → AI generates Scala simulation. Suggests virtual user patterns and think times. Analyzes results and recommends tuning.'
  },
  'JMeter': {
    capability: 'Partial',
    integration: 'Test plan generation and script optimization',
    description: 'LLMs can generate JMeter test plans (XML/JMX) from requirements, create thread group configurations, and suggest samplers. AI can analyze JMeter logs, identify bottlenecks, and recommend performance optimizations. ChatGPT helps write JSR223 sampler scripts.',
    examples: 'Describe load test → AI generates JMeter test plan. GPT writes JSR223 Groovy scripts. Analyzes .jtl results and suggests improvements.'
  },
  'Mocha': {
    capability: 'Partial',
    integration: 'AI test generation for Node.js',
    description: 'GitHub Copilot and ChatGPT generate Mocha test suites for JavaScript/Node.js code. AI suggests test hooks (before, after), creates async test patterns, and generates chai assertions. Can analyze code and suggest missing test scenarios.',
    examples: 'Copilot auto-completes test cases. GPT generates Mocha tests with chai assertions from function signatures. Suggests edge cases.'
  },
  'Jasmine': {
    capability: 'Partial',
    integration: 'BDD-style test generation',
    description: 'LLMs generate Jasmine specs in BDD style (describe/it blocks). ChatGPT creates spies, mocks, and matchers. AI can convert requirements to Jasmine tests and suggest test organization. Works well with Copilot for Angular testing.',
    examples: 'Natural language spec → AI generates Jasmine describe/it blocks. Creates spy configurations. Suggests custom matchers for domain logic.'
  },
  'XCTest': {
    capability: 'Partial',
    integration: 'Swift test generation with AI',
    description: 'GitHub Copilot and ChatGPT generate XCTest cases for iOS/macOS apps in Swift. AI creates UI tests using XCUITest, suggests test data, and generates performance tests. Can analyze iOS code and suggest appropriate test coverage.',
    examples: 'Copilot generates XCTest methods. GPT creates UI test sequences from app flows. Suggests performance benchmarks and edge cases.'
  },
  'Espresso': {
    capability: 'Partial',
    integration: 'Android UI test generation',
    description: 'LLMs generate Espresso tests in Kotlin/Java from UI descriptions. ChatGPT creates ViewMatchers, ViewActions, and ViewAssertions. AI can analyze Android layouts and suggest comprehensive UI test scenarios.',
    examples: 'Describe UI flow → AI generates Espresso test code. Creates custom matchers. Suggests idling resources for async operations.'
  },
  'TestRail': {
    capability: 'Limited',
    integration: 'AI-assisted test case writing',
    description: 'LLMs can generate test case descriptions, steps, and expected results for TestRail. ChatGPT can analyze requirements and create structured test cases in TestRail format. Can suggest test coverage gaps based on requirements analysis.',
    examples: 'Requirement doc → AI generates test case templates. GPT suggests test scenarios and prioritization. Analyzes coverage gaps.'
  },
  'BrowserStack': {
    capability: 'Yes - Emerging',
    integration: 'AI-powered visual testing and bug detection',
    description: 'BrowserStack integrates with AI visual testing tools (Percy, Applitools). Can use LLMs to generate test scripts for cross-browser testing. AI analyzes screenshots across browsers and detects visual regressions. Emerging features for AI-driven test selection.',
    examples: 'Visual AI detects rendering differences across browsers. LLM generates browser compatibility test scenarios. AI suggests optimal device/browser combinations.'
  },
  'k6': {
    capability: 'Partial',
    integration: 'JavaScript test script generation',
    description: 'LLMs generate k6 performance test scripts in JavaScript. ChatGPT creates realistic load scenarios, suggests thresholds, and generates checks. AI can analyze k6 results and recommend performance optimizations.',
    examples: 'Load scenario description → AI generates k6 script. GPT suggests realistic user patterns. Analyzes metrics and recommends threshold adjustments.'
  },
  'Tricentis Tosca': {
    capability: 'Yes - Built-in',
    integration: 'Native Vision AI and AI-powered test generation',
    description: 'Tosca has built-in Vision AI using computer vision and ML for object recognition. The platform includes AI-based risk assessment, intelligent test case design, and self-healing capabilities. Can integrate with LLMs for natural language test generation from requirements. AI analyzes code changes and recommends which tests to run.',
    examples: 'Vision AI: Recognizes UI elements without selectors using ML. Risk-based AI: Prioritizes tests based on code changes and defect history. NLP: "Test user login" → Generates model-based test. AI suggests test optimization and maintenance.'
  }
};

// Add generic architecture to tools that don't have detailed architecture
const enrichToolsWithArchitecture = (tools) => {
  return tools.map(tool => {
    if (!tool.architecture) {
      // Generic architecture based on tool category
      tool.architecture = {
        type: `${tool.category} Framework`,
        components: {
          'Test Engine': `Core ${tool.toolName} engine that executes test cases and validates results`,
          'API Layer': `Programming interface for writing tests in ${tool.supportedLanguages}`,
          'Reporter': 'Test result collection and reporting system with various output formats',
          'Integration Layer': 'Connectors for CI/CD pipelines and development tools'
        },
        layers: '3-tier: Test Code → Framework Engine → Target System',
        frameworkPattern: 'Standard Test Framework Pattern',
        detailedDescription: `${tool.toolName} follows a standard testing framework architecture where test code is written using the framework's API, executed by the test engine, and results are collected and reported. The framework provides assertions, test organization, and integration capabilities to streamline the testing process for ${tool.bestFor}.`
      };
    }

    // Add AI integration details
    const aiDetails = aiIntegrationDetails[tool.toolName];
    if (aiDetails) {
      tool.aiIntegration = aiDetails;
    } else {
      // Generic AI integration for tools without specific details
      tool.aiIntegration = {
        capability: 'Limited',
        integration: 'LLM-based code generation',
        description: `${tool.toolName} can leverage LLMs like ChatGPT, GitHub Copilot, or Claude for test code generation and documentation. AI assistants can generate test scripts in ${tool.supportedLanguages}, suggest test scenarios, and help with debugging.`,
        examples: `Use ChatGPT or Copilot to generate ${tool.toolName} test code from requirements. AI suggests test patterns and best practices specific to ${tool.category}.`
      };
    }

    return tool;
  });
};

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
    tools: enrichToolsWithArchitecture(testingTools),
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
