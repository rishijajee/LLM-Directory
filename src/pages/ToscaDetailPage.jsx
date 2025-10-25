import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ToscaDetailPage.css';

const ToscaDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const useCases = [
    {
      id: 1,
      title: "End-to-End SAP Testing",
      description: "Comprehensive testing of SAP S/4HANA business processes",
      example: "Automating the complete Order-to-Cash process: Create sales order → Check inventory → Process delivery → Generate invoice → Record payment. TOSCA uses model-based testing to automatically generate test cases covering all variations including edge cases like partial deliveries and credit holds.",
      benefits: "Reduces SAP testing time by 70%, ensures business process integrity across updates"
    },
    {
      id: 2,
      title: "API Testing with Service Virtualization",
      description: "Testing REST and SOAP APIs without backend dependencies",
      example: "Testing a payment gateway integration: Mock third-party payment provider responses (success, failure, timeout). TOSCA creates virtual services that simulate Stripe, PayPal APIs, allowing testing of all scenarios including network failures and rate limiting without hitting actual payment systems.",
      benefits: "Enables parallel development, reduces dependency on third-party services, 24/7 testing capability"
    },
    {
      id: 3,
      title: "Mobile App Testing Across Devices",
      description: "Cross-platform mobile testing on real and virtual devices",
      example: "Testing an e-commerce mobile app on iOS and Android: Single test script tests checkout flow on iPhone 15, Samsung Galaxy S24, iPad Pro. TOSCA automatically adapts UI element identification across different screen sizes and OS versions using dynamic UI recognition.",
      benefits: "90% reduction in mobile test maintenance, coverage across 50+ device configurations"
    },
    {
      id: 4,
      title: "Risk-Based Test Optimization",
      description: "Prioritizing test execution based on risk analysis",
      example: "Banking application with 10,000 test cases: TOSCA analyzes code changes in the latest build, identifies that login module and transaction history were modified. Risk-based execution runs 500 high-priority tests related to those modules first, catching 95% of defects in 20% of execution time.",
      benefits: "Faster feedback cycles, optimized CI/CD pipeline, intelligent test selection"
    },
    {
      id: 5,
      title: "Data-Driven Testing at Scale",
      description: "Executing tests with thousands of data combinations",
      example: "Insurance premium calculator testing: Single test case with 5,000 data rows covering different age groups, coverage types, deductibles, and risk factors. TOSCA automatically generates reports showing which data combinations passed/failed, with detailed analytics on edge cases.",
      benefits: "Comprehensive data coverage, automatic test data generation, detailed analytics"
    },
    {
      id: 6,
      title: "Mainframe Testing Integration",
      description: "Testing legacy mainframe applications alongside modern systems",
      example: "Bank core banking system: Test money transfer from web app (Angular) → middleware (Java) → mainframe (COBOL). TOSCA orchestrates the entire flow, verifying data consistency across 3270 terminal screens, APIs, and web UI in a single test case.",
      benefits: "Unified testing across tech stacks, maintains legacy system quality during modernization"
    },
    {
      id: 7,
      title: "Salesforce Testing with Model-Based Approach",
      description: "Automated testing of Salesforce CRM customizations",
      example: "Custom Salesforce opportunity management: TOSCA scans Salesforce org, auto-discovers custom fields, workflows, and validation rules. Creates model of the application and generates test cases for all opportunity states (Prospecting → Qualification → Proposal → Closed Won/Lost) including validation rule testing.",
      benefits: "Adapts to Salesforce releases automatically, tests custom and standard objects, 60% faster test creation"
    },
    {
      id: 8,
      title: "Performance Testing Integration",
      description: "Combining functional and performance testing",
      example: "E-commerce Black Friday load testing: TOSCA functional tests converted to performance tests with 10,000 virtual users. Simulates realistic user journeys (browse → search → add to cart → checkout) while monitoring response times, database queries, and server resources.",
      benefits: "Reuses functional test assets for performance testing, realistic load scenarios"
    },
    {
      id: 9,
      title: "Continuous Testing in CI/CD Pipeline",
      description: "Automated testing triggered by code commits",
      example: "Jenkins pipeline integration: Developer commits code → Jenkins builds application → TOSCA executes smoke tests (5 mins) → If pass, executes regression suite (2 hours) → Generates test report → Posts results to Slack. Failed tests automatically create Jira tickets with screenshots and execution logs.",
      benefits: "Shift-left testing, immediate feedback, automated defect tracking"
    },
    {
      id: 10,
      title: "Accessibility Testing Compliance",
      description: "Ensuring WCAG 2.1 compliance for web applications",
      example: "Government portal accessibility testing: TOSCA scans all pages for WCAG violations (missing alt text, insufficient color contrast, keyboard navigation issues). Tests screen reader compatibility, generates compliance report for Section 508 requirements. Auto-generates remediation suggestions.",
      benefits: "Legal compliance, inclusive design, automated accessibility reporting"
    }
  ];

  const integrations = [
    {
      category: "CI/CD Tools",
      tools: [
        { name: "Jenkins", description: "Trigger TOSCA tests via Jenkins pipeline, get execution reports", example: "jenkinsfile: stage('TOSCA Tests') { bat 'ToscaCI.exe -r regression_suite' }" },
        { name: "Azure DevOps", description: "Native integration with Azure Pipelines", example: "YAML pipeline with TOSCA task for automated test execution on every PR" },
        { name: "GitLab CI", description: "Execute TOSCA tests in GitLab runners", example: "gitlab-ci.yml with TOSCA Docker container execution" },
        { name: "Bamboo", description: "TOSCA plugin for Atlassian Bamboo", example: "Bamboo plan with TOSCA test execution and artifact publishing" }
      ]
    },
    {
      category: "Test Management",
      tools: [
        { name: "Jira", description: "Bi-directional sync of test cases and defects", example: "TOSCA test failure auto-creates Jira bug with screenshots, logs, and test data" },
        { name: "Xray", description: "Test case management within Jira", example: "Sync TOSCA test execution results to Xray test plans and test executions" },
        { name: "qTest", description: "Enterprise test management integration", example: "Push TOSCA test results to qTest for centralized reporting and traceability" },
        { name: "TestRail", description: "Test case repository integration", example: "Map TOSCA test cases to TestRail cases, sync execution results" }
      ]
    },
    {
      category: "Application Platforms",
      tools: [
        { name: "SAP", description: "Native SAP GUI and SAP Fiori testing", example: "Record SAP transaction codes, TOSCA auto-identifies SAP controls using technical properties" },
        { name: "Salesforce", description: "Salesforce Lightning and Classic testing", example: "Model-based scanning of Salesforce org, auto-generate tests for custom objects" },
        { name: "ServiceNow", description: "ServiceNow platform testing", example: "Test ServiceNow incident management workflow with TOSCA" },
        { name: "Workday", description: "Workday HCM and Finance testing", example: "Automate employee onboarding workflow in Workday" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      tools: [
        { name: "AWS", description: "Test applications on AWS, integrate with AWS services", example: "Execute TOSCA tests on EC2 instances, store results in S3, trigger via Lambda" },
        { name: "Azure", description: "Azure Test Plans integration", example: "Run TOSCA tests in Azure DevOps with test result publishing" },
        { name: "Docker", description: "Containerized TOSCA execution", example: "Docker image with TOSCA Commander for scalable test execution" },
        { name: "Kubernetes", description: "Orchestrate TOSCA test execution at scale", example: "K8s pods running parallel TOSCA test suites" }
      ]
    },
    {
      category: "Service Virtualization",
      tools: [
        { name: "TOSCA Service Virtualization", description: "Built-in service virtualization", example: "Mock REST API responses for payment gateway, simulate latency and errors" },
        { name: "CA Service Virtualization", description: "Integration with Broadcom SV", example: "Use CA virtual services within TOSCA test cases" },
        { name: "WireMock", description: "Lightweight API mocking", example: "TOSCA tests call WireMock stubs for external APIs" }
      ]
    },
    {
      category: "Monitoring & Analytics",
      tools: [
        { name: "Splunk", description: "Send TOSCA execution logs to Splunk", example: "Real-time dashboard showing test execution metrics, failure trends" },
        { name: "ELK Stack", description: "Elasticsearch for test result analysis", example: "Index TOSCA execution data, create Kibana dashboards for test analytics" },
        { name: "Grafana", description: "Visualize TOSCA metrics", example: "Grafana dashboard showing test pass rate, execution time trends" },
        { name: "Datadog", description: "Monitor TOSCA infrastructure", example: "Track TOSCA agent health, execution queue, resource utilization" }
      ]
    }
  ];

  return (
    <div className="tosca-page">
      <header className="tosca-header">
        <div className="header-content">
          <div className="header-left">
            <h1>🔧 Tricentis TOSCA</h1>
            <p className="subtitle">Enterprise Test Automation & Continuous Testing Platform</p>
          </div>
          <div className="header-right">
            <Link to="/testing-tools" className="back-button">
              <svg
                className="back-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Back to Testing Tools</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="tosca-main">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === 'framework' ? 'active' : ''}`}
            onClick={() => setActiveTab('framework')}
          >
            Framework Architecture
          </button>
          <button
            className={`tab-btn ${activeTab === 'functionality' ? 'active' : ''}`}
            onClick={() => setActiveTab('functionality')}
          >
            Core Functionality
          </button>
          <button
            className={`tab-btn ${activeTab === 'usecases' ? 'active' : ''}`}
            onClick={() => setActiveTab('usecases')}
          >
            Use Cases
          </button>
          <button
            className={`tab-btn ${activeTab === 'integrations' ? 'active' : ''}`}
            onClick={() => setActiveTab('integrations')}
          >
            Integrations
          </button>
          <button
            className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            AI & LLM Integration
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="content-section">
              <h2>What is Tricentis TOSCA?</h2>
              <div className="overview-content">
                <p>
                  Tricentis TOSCA is an enterprise-grade continuous testing platform that combines intelligent test automation,
                  service virtualization, and test data management. It uses a model-based testing approach to dramatically
                  reduce test maintenance and accelerate test creation.
                </p>

                <div className="key-features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Model-Based Testing</h3>
                    <p>Create a model of your application once, generate thousands of test cases automatically.
                    90% reduction in test maintenance when applications change.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">🤖</div>
                    <h3>Codeless Automation</h3>
                    <p>Business analysts and testers create tests without programming. Visual test design with
                    drag-and-drop modules and reusable components.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">🔄</div>
                    <h3>Risk-Based Testing</h3>
                    <p>AI-powered risk analysis prioritizes test execution. Run the most critical tests first,
                    optimize test coverage based on code changes and business impact.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">🌐</div>
                    <h3>End-to-End Testing</h3>
                    <p>Test across UI, API, mobile, mainframe, SAP, Salesforce in a single test case.
                    Unified platform for all testing needs.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Test Data Management</h3>
                    <p>Advanced test data provisioning with data masking, synthetic data generation, and
                    subset creation. Compliant with GDPR and data privacy regulations.</p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Service Virtualization</h3>
                    <p>Simulate unavailable or expensive-to-access systems. Test in isolation without
                    dependencies, 24/7 testing capability.</p>
                  </div>
                </div>

                <div className="stats-section">
                  <h3>TOSCA by the Numbers</h3>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">2,000+</div>
                      <div className="stat-label">Enterprise Customers</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">90%</div>
                      <div className="stat-label">Reduction in Test Maintenance</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">160+</div>
                      <div className="stat-label">Supported Technologies</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">5x</div>
                      <div className="stat-label">Faster Test Creation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Framework Architecture Tab */}
          {activeTab === 'framework' && (
            <div className="content-section">
              <h2>TOSCA Framework Architecture</h2>

              {/* Architecture Diagram */}
              <div className="architecture-diagram-section">
                <h3>🏗️ Layered Architecture</h3>
                <p className="diagram-subtitle">TOSCA's multi-tier architecture for scalable test automation</p>

                <div className="architecture-layers-diagram">
                  {/* Layer 1 */}
                  <div className="arch-layer">
                    <div className="layer-header">
                      <div className="layer-number">1</div>
                      <div className="layer-title">Presentation Layer</div>
                    </div>
                    <div className="layer-content">
                      <div className="layer-component">
                        <strong>TOSCA Commander</strong>
                        <p>Primary IDE for test design, execution, and analysis</p>
                      </div>
                      <div className="layer-component">
                        <strong>TOSCA ARA (Analytics & Reporting)</strong>
                        <p>Web-based dashboards and real-time analytics</p>
                      </div>
                    </div>
                  </div>

                  <div className="layer-arrow">↓</div>

                  {/* Layer 2 */}
                  <div className="arch-layer">
                    <div className="layer-header">
                      <div className="layer-number">2</div>
                      <div className="layer-title">Business Logic Layer</div>
                    </div>
                    <div className="layer-content">
                      <div className="layer-component">
                        <strong>Test Case Design</strong>
                        <p>Model-based test case creation with reusable modules</p>
                      </div>
                      <div className="layer-component">
                        <strong>Risk-Based Testing Engine</strong>
                        <p>AI-driven test prioritization and optimization</p>
                      </div>
                      <div className="layer-component">
                        <strong>Test Data Service</strong>
                        <p>Data provisioning, masking, and generation</p>
                      </div>
                    </div>
                  </div>

                  <div className="layer-arrow">↓</div>

                  {/* Layer 3 */}
                  <div className="arch-layer">
                    <div className="layer-header">
                      <div className="layer-number">3</div>
                      <div className="layer-title">Execution Layer</div>
                    </div>
                    <div className="layer-content">
                      <div className="layer-component">
                        <strong>TOSCA Execution Agents</strong>
                        <p>Distributed test execution on local and remote machines</p>
                      </div>
                      <div className="layer-component">
                        <strong>Mobile Execution</strong>
                        <p>Real device and emulator test execution</p>
                      </div>
                      <div className="layer-component">
                        <strong>API Testing Engine</strong>
                        <p>REST/SOAP API validation</p>
                      </div>
                    </div>
                  </div>

                  <div className="layer-arrow">↓</div>

                  {/* Layer 4 */}
                  <div className="arch-layer">
                    <div className="layer-header">
                      <div className="layer-number">4</div>
                      <div className="layer-title">Integration Layer</div>
                    </div>
                    <div className="layer-content">
                      <div className="layer-component">
                        <strong>CI/CD Integration</strong>
                        <p>Jenkins, Azure DevOps, GitLab connectors</p>
                      </div>
                      <div className="layer-component">
                        <strong>Test Management Integration</strong>
                        <p>Jira, qTest, TestRail synchronization</p>
                      </div>
                      <div className="layer-component">
                        <strong>Service Virtualization</strong>
                        <p>Mock external dependencies</p>
                      </div>
                    </div>
                  </div>

                  <div className="layer-arrow">↓</div>

                  {/* Layer 5 */}
                  <div className="arch-layer">
                    <div className="layer-header">
                      <div className="layer-number">5</div>
                      <div className="layer-title">Data & Repository Layer</div>
                    </div>
                    <div className="layer-content">
                      <div className="layer-component">
                        <strong>TOSCA Repository (SQL Server)</strong>
                        <p>Centralized storage of test assets, modules, and results</p>
                      </div>
                      <div className="layer-component">
                        <strong>Version Control Integration</strong>
                        <p>Git, SVN integration for test asset versioning</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Component Interaction Diagram */}
                <div className="component-interaction-section">
                  <h3>🔄 Component Interaction Flow</h3>
                  <p className="diagram-subtitle">How TOSCA components work together during test execution</p>

                  <div className="interaction-diagram">
                    <div className="interaction-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Test Design</h4>
                        <p>Tester creates test case in TOSCA Commander using drag-and-drop modules</p>
                      </div>
                    </div>

                    <div className="interaction-arrow">→</div>

                    <div className="interaction-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Model Scanning</h4>
                        <p>TOSCA scans application UI/API and creates object model with properties</p>
                      </div>
                    </div>

                    <div className="interaction-arrow">→</div>

                    <div className="interaction-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Test Data Binding</h4>
                        <p>Test Data Service provides parameterized test data from Excel, DB, or API</p>
                      </div>
                    </div>

                    <div className="interaction-arrow">→</div>

                    <div className="interaction-step">
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Execution</h4>
                        <p>Execution Agent runs test on target system (Web, Mobile, SAP, API)</p>
                      </div>
                    </div>

                    <div className="interaction-arrow">→</div>

                    <div className="interaction-step">
                      <div className="step-number">5</div>
                      <div className="step-content">
                        <h4>Result Collection</h4>
                        <p>Results stored in Repository with screenshots, logs, and metrics</p>
                      </div>
                    </div>

                    <div className="interaction-arrow">→</div>

                    <div className="interaction-step">
                      <div className="step-number">6</div>
                      <div className="step-content">
                        <h4>Reporting</h4>
                        <p>TOSCA ARA generates dashboards, trend analysis, and defect reports</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="tech-stack-section">
                  <h3>💻 Technology Stack</h3>
                  <div className="tech-stack-grid">
                    <div className="tech-item">
                      <strong>Backend:</strong> C#, .NET Framework
                    </div>
                    <div className="tech-item">
                      <strong>Database:</strong> Microsoft SQL Server
                    </div>
                    <div className="tech-item">
                      <strong>Frontend:</strong> WPF (Commander), Angular (ARA)
                    </div>
                    <div className="tech-item">
                      <strong>Mobile:</strong> Appium, XCUITest, Espresso
                    </div>
                    <div className="tech-item">
                      <strong>API:</strong> REST, SOAP, GraphQL
                    </div>
                    <div className="tech-item">
                      <strong>Cloud:</strong> AWS, Azure, Docker, Kubernetes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Core Functionality Tab */}
          {activeTab === 'functionality' && (
            <div className="content-section">
              <h2>Core Functionality</h2>

              <div className="functionality-grid">
                <div className="func-card">
                  <h3>1. Model-Based Test Automation</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Creates a logical model of the application under test, separating test logic from UI implementation.</p>
                    <p><strong>How it works:</strong></p>
                    <ul>
                      <li>Scan application UI to identify objects (buttons, fields, tables)</li>
                      <li>Create reusable modules for business actions (e.g., "Login", "Create Order")</li>
                      <li>Compose test cases by linking modules together</li>
                      <li>When UI changes, update model once - all tests automatically adapt</li>
                    </ul>
                    <p><strong>Example:</strong> If a "Submit" button ID changes from #submit to #submit-btn, you update the model definition once instead of updating 500 test cases.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>2. Test Case Design</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Visual test case creation using drag-and-drop interface.</p>
                    <p><strong>How it works:</strong></p>
                    <ul>
                      <li>Use TestCase folder structure to organize tests</li>
                      <li>Drag modules from Module Library into TestCases</li>
                      <li>Set parameters and test data for each step</li>
                      <li>Create verification points for expected results</li>
                    </ul>
                    <p><strong>Example:</strong> Create "User Registration" test by dragging: Navigate to Page → Fill Form → Click Submit → Verify Success Message.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>3. Multi-Technology Support</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Test 160+ technologies from a single platform.</p>
                    <p><strong>Supported Technologies:</strong></p>
                    <ul>
                      <li><strong>Web:</strong> Chrome, Firefox, Edge, Safari, IE</li>
                      <li><strong>Mobile:</strong> iOS, Android native and hybrid apps</li>
                      <li><strong>Desktop:</strong> Windows applications, Java, .NET</li>
                      <li><strong>Enterprise:</strong> SAP GUI, SAP Fiori, Salesforce, ServiceNow, Workday</li>
                      <li><strong>Mainframe:</strong> 3270 terminal emulators</li>
                      <li><strong>API:</strong> REST, SOAP, GraphQL, gRPC</li>
                    </ul>
                  </div>
                </div>

                <div className="func-card">
                  <h3>4. Test Data Management (TDM)</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Provisions, masks, and generates test data.</p>
                    <p><strong>Capabilities:</strong></p>
                    <ul>
                      <li><strong>Data Provisioning:</strong> Extract subsets from production databases</li>
                      <li><strong>Data Masking:</strong> Anonymize PII for GDPR compliance</li>
                      <li><strong>Synthetic Data:</strong> Generate realistic fake data</li>
                      <li><strong>Data Refresh:</strong> Automated data refresh for test environments</li>
                    </ul>
                    <p><strong>Example:</strong> Extract 10,000 customer records from production, mask email/SSN, load into test environment, bind to TOSCA tests.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>5. Service Virtualization</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Simulates unavailable or expensive systems.</p>
                    <p><strong>Use Cases:</strong></p>
                    <ul>
                      <li>Mock third-party payment gateways</li>
                      <li>Simulate mainframe responses without mainframe access</li>
                      <li>Create performance test scenarios with simulated load</li>
                      <li>Test error conditions (timeouts, 500 errors) on demand</li>
                    </ul>
                    <p><strong>Example:</strong> Record API traffic between your app and Stripe, create virtual service that replays responses, test without hitting Stripe API limits.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>6. Risk-Based Testing</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> AI-powered test prioritization based on risk.</p>
                    <p><strong>How it calculates risk:</strong></p>
                    <ul>
                      <li>Code coverage analysis: Which tests cover changed code?</li>
                      <li>Defect history: Which modules have most bugs historically?</li>
                      <li>Business criticality: User-defined business impact scores</li>
                      <li>Test execution history: Which tests are flaky or slow?</li>
                    </ul>
                    <p><strong>Benefit:</strong> Run 20% of tests to find 80% of defects, optimize CI/CD pipeline runtime.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>7. Distributed Execution</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Parallel test execution across multiple machines.</p>
                    <p><strong>Architecture:</strong></p>
                    <ul>
                      <li>TOSCA Commander (controller) distributes tests to Execution Agents</li>
                      <li>Agents can be on-premise VMs, cloud instances, or Docker containers</li>
                      <li>Dynamic agent allocation based on workload</li>
                      <li>Real-time execution monitoring</li>
                    </ul>
                    <p><strong>Example:</strong> Run 1,000 tests in 2 hours using 50 agents instead of 100 hours on single machine.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>8. Mobile Testing</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Cross-platform mobile testing on real devices and emulators.</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                      <li>Single test script for iOS and Android</li>
                      <li>Integration with device farms (Sauce Labs, BrowserStack)</li>
                      <li>Gesture support (swipe, pinch, rotate)</li>
                      <li>Network condition simulation (3G, 4G, offline)</li>
                    </ul>
                    <p><strong>Example:</strong> Test mobile banking app on 20 device configurations simultaneously in BrowserStack.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>9. API Testing</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Comprehensive API testing without coding.</p>
                    <p><strong>Capabilities:</strong></p>
                    <ul>
                      <li>Import OpenAPI/Swagger specs to auto-generate tests</li>
                      <li>Validate response schemas, status codes, headers</li>
                      <li>Chain API calls (use response from API1 as input to API2)</li>
                      <li>Performance testing of APIs</li>
                    </ul>
                    <p><strong>Example:</strong> Test user creation API: POST /users → verify 201 status → extract user ID → GET /users/{id} → verify response data.</p>
                  </div>
                </div>

                <div className="func-card">
                  <h3>10. Reporting & Analytics</h3>
                  <div className="func-content">
                    <p><strong>What it does:</strong> Real-time dashboards and historical trend analysis.</p>
                    <p><strong>TOSCA ARA Features:</strong></p>
                    <ul>
                      <li>Executive dashboards (pass/fail rates, test coverage)</li>
                      <li>Defect trend analysis</li>
                      <li>Test execution duration tracking</li>
                      <li>Requirement traceability matrix</li>
                      <li>Custom reports with filters and drill-downs</li>
                    </ul>
                    <p><strong>Example:</strong> View which user stories lack test coverage, drill down to see specific requirements without tests.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'usecases' && (
            <div className="content-section">
              <h2>Real-World Use Cases</h2>
              <p className="section-description">
                Explore 10 detailed use cases demonstrating how TOSCA solves complex testing challenges across industries and technologies.
              </p>

              <div className="usecases-grid">
                {useCases.map((useCase) => (
                  <div key={useCase.id} className="usecase-card">
                    <div className="usecase-header">
                      <div className="usecase-number">{useCase.id}</div>
                      <h3>{useCase.title}</h3>
                    </div>
                    <div className="usecase-content">
                      <div className="usecase-description">
                        <strong>Overview:</strong>
                        <p>{useCase.description}</p>
                      </div>
                      <div className="usecase-example">
                        <strong>Detailed Example:</strong>
                        <p>{useCase.example}</p>
                      </div>
                      <div className="usecase-benefits">
                        <strong>Benefits:</strong>
                        <p>{useCase.benefits}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className="content-section">
              <h2>TOSCA Integrations</h2>
              <p className="section-description">
                TOSCA integrates with 160+ tools and platforms across the software development lifecycle.
              </p>

              <div className="integrations-container">
                {integrations.map((integration, index) => (
                  <div key={index} className="integration-category">
                    <h3 className="category-title">
                      <span className="category-icon">
                        {integration.category === 'CI/CD Tools' && '🔄'}
                        {integration.category === 'Test Management' && '📋'}
                        {integration.category === 'Application Platforms' && '🏢'}
                        {integration.category === 'Cloud & Infrastructure' && '☁️'}
                        {integration.category === 'Service Virtualization' && '🔌'}
                        {integration.category === 'Monitoring & Analytics' && '📊'}
                      </span>
                      {integration.category}
                    </h3>

                    <div className="tools-grid">
                      {integration.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="tool-integration-card">
                          <h4>{tool.name}</h4>
                          <p className="tool-description">{tool.description}</p>
                          <div className="tool-example">
                            <strong>Example:</strong>
                            <p>{tool.example}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI & LLM Integration Tab */}
          {activeTab === 'ai' && (
            <div className="content-section">
              <h2>AI & LLM Integration</h2>

              <div className="ai-overview">
                <div className="ai-intro">
                  <h3>🤖 TOSCA's AI-Powered Capabilities</h3>
                  <p>
                    Tricentis TOSCA is evolving to incorporate AI and Large Language Models (LLMs) to enhance test automation,
                    reduce maintenance, and enable intelligent test generation. While TOSCA has long used ML for risk-based testing,
                    the integration with modern LLMs like GPT-4, Claude, and Copilot opens new possibilities.
                  </p>
                </div>

                <div className="ai-capabilities-section">
                  <h3>Current AI/ML Capabilities</h3>

                  <div className="ai-capability-card">
                    <h4>1. Vision AI - Self-Healing Tests</h4>
                    <div className="capability-content">
                      <p><strong>What it does:</strong> Automatically identifies UI elements even when selectors change.</p>
                      <p><strong>How it works:</strong></p>
                      <ul>
                        <li>Uses computer vision and ML to recognize UI elements by appearance, not just technical properties</li>
                        <li>When a button's ID changes, Vision AI recognizes it by visual characteristics (color, shape, position, text)</li>
                        <li>Automatically updates element locators without manual intervention</li>
                      </ul>
                      <p><strong>Example:</strong> Login button changes from id="login-btn" to id="submit-login". Vision AI recognizes the button by its blue color, "Login" text, and position, updating the locator automatically. Test continues without failure.</p>
                      <p><strong>Benefit:</strong> 70% reduction in test maintenance due to UI changes.</p>
                    </div>
                  </div>

                  <div className="ai-capability-card">
                    <h4>2. Risk-Based Test Optimization with ML</h4>
                    <div className="capability-content">
                      <p><strong>What it does:</strong> Machine learning analyzes historical test data to predict which tests are most likely to find defects.</p>
                      <p><strong>How it works:</strong></p>
                      <ul>
                        <li>Analyzes code changes using static analysis</li>
                        <li>Maps code changes to test cases that exercise that code</li>
                        <li>Uses defect history and business criticality to assign risk scores</li>
                        <li>ML model learns which types of changes correlate with defects</li>
                      </ul>
                      <p><strong>Example:</strong> Developer modifies authentication service. ML model identifies this as high-risk based on historical defect patterns. TOSCA prioritizes 50 auth-related tests to run first in CI pipeline, catching regression bug in 5 minutes instead of waiting 2 hours for full suite.</p>
                      <p><strong>Benefit:</strong> 80% defect detection with 20% of test execution time.</p>
                    </div>
                  </div>

                  <div className="ai-capability-card">
                    <h4>3. Intelligent Test Data Generation</h4>
                    <div className="capability-content">
                      <p><strong>What it does:</strong> AI generates realistic synthetic test data.</p>
                      <p><strong>How it works:</strong></p>
                      <ul>
                        <li>Analyzes production data patterns (without exposing PII)</li>
                        <li>Generates statistically similar synthetic data</li>
                        <li>Ensures referential integrity across related tables</li>
                        <li>Creates edge cases and boundary value data automatically</li>
                      </ul>
                      <p><strong>Example:</strong> Need 10,000 test customer records. AI analyzes production data patterns: 30% customers in age 25-34, 60% have 1-2 orders, average order value $75. Generates synthetic data matching these distributions plus edge cases (age 0, 150, negative orders, etc.).</p>
                    </div>
                  </div>
                </div>

                <div className="llm-integration-section">
                  <h3>Integration with LLMs (GPT-4, Claude, Copilot)</h3>

                  <div className="llm-card">
                    <h4>🔮 1. Natural Language Test Creation</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> TOSCA + GPT-4/Claude API</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>Tester writes requirement in plain English: "Test that users can reset password using email link"</li>
                        <li>GPT-4 API converts to structured test steps</li>
                        <li>TOSCA maps steps to existing modules or suggests new ones</li>
                        <li>Tester reviews and executes AI-generated test</li>
                      </ol>
                      <p><strong>Example Prompt:</strong></p>
                      <div className="code-example">
                        <strong>Input:</strong> "Verify that admin users can export customer data as CSV with filters for date range and customer status"
                        <br/><br/>
                        <strong>GPT-4 Output:</strong>
                        <pre>{`1. Navigate to Admin Dashboard
2. Click "Customer Management"
3. Set Date Filter: Start Date = 01/01/2024, End Date = 01/31/2024
4. Set Status Filter = "Active"
5. Click "Export to CSV"
6. Verify CSV download initiated
7. Open CSV file
8. Verify columns: Customer ID, Name, Email, Status, Registration Date
9. Verify all records have Status = "Active"
10. Verify all Registration Dates between 01/01/2024 and 01/31/2024`}</pre>
                      </div>
                      <p><strong>TOSCA Action:</strong> Maps each step to TOSCA modules, generates executable test case.</p>
                    </div>
                  </div>

                  <div className="llm-card">
                    <h4>🧠 2. Intelligent Test Maintenance with LLMs</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> Claude + TOSCA API</p>
                      <p><strong>Scenario:</strong> Application UI changes significantly after redesign.</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>TOSCA detects 200 failing tests due to UI changes</li>
                        <li>Sends screenshots of old UI and new UI to Claude</li>
                        <li>Claude analyzes: "Login button moved from top-right to center, ID changed, but functionality same"</li>
                        <li>Claude suggests module updates with new locators</li>
                        <li>TOSCA auto-applies suggestions, re-runs tests</li>
                      </ol>
                      <p><strong>Example:</strong></p>
                      <div className="code-example">
                        <strong>Claude Analysis:</strong>
                        <pre>{`Old UI: <button id="submit-btn" class="primary">Submit Order</button>
New UI: <button id="order-submit" class="btn-primary">Submit Order</button>

Recommendation: Update module "SubmitOrderButton"
- Change locator from #submit-btn to #order-submit
- Update class assertion from "primary" to "btn-primary"
- Text remains "Submit Order" - no change needed

Confidence: 95%`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="llm-card">
                    <h4>💡 3. Defect Analysis & Root Cause Prediction</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> GPT-4 + TOSCA Execution Logs</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>Test fails with cryptic error message</li>
                        <li>TOSCA sends error log, screenshot, and test steps to GPT-4</li>
                        <li>GPT-4 analyzes context and suggests root cause</li>
                        <li>Provides remediation steps</li>
                      </ol>
                      <p><strong>Example:</strong></p>
                      <div className="code-example">
                        <strong>Test Failure:</strong> ElementNotInteractableException at step "Click Submit"
                        <br/><br/>
                        <strong>GPT-4 Analysis:</strong>
                        <pre>{`Root Cause: Submit button is present in DOM but covered by a modal overlay.

Evidence:
- Screenshot shows modal dialog in foreground
- Submit button exists (found by XPath)
- z-index of modal (1000) > z-index of button (1)

Likely Causes:
1. Test missing step to close modal dialog (90% probability)
2. Timing issue - modal appears after button click initiated (10% probability)

Recommended Fix:
Add step before "Click Submit":
- Wait for modal to close
- OR Click modal close button
- OR Press ESC key

Code suggestion:
ToscaCommander.WaitForElementNotVisible("#modal-overlay", timeout: 5000);`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="llm-card">
                    <h4>🎯 4. Smart Test Case Recommendation</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> Copilot for TOSCA Test Design</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>Tester starts creating test for "User Registration"</li>
                        <li>Copilot analyzes existing test library and application model</li>
                        <li>Suggests reusable modules and next steps</li>
                        <li>Auto-completes test case based on patterns</li>
                      </ol>
                      <p><strong>Example:</strong></p>
                      <div className="code-example">
                        <strong>Tester Action:</strong> Creates new TestCase "Register New User"
                        <br/><br/>
                        <strong>Copilot Suggestions:</strong>
                        <pre>{`Based on similar test cases, you may want to include:

✓ Module: NavigateToRegistrationPage (used in 12 other tests)
✓ Module: FillRegistrationForm (reusable, parameterized)
  - Suggested parameters: Email, Password, FirstName, LastName
✓ Module: VerifyEmailValidation (catches common defects)
✓ Module: SubmitRegistration
✓ Module: VerifySuccessMessage
✓ Module: VerifyWelcomeEmail (often forgotten, recommended)

Test Data Suggestions:
- Valid email: testuser_{{timestamp}}@example.com
- Edge cases:
  * Email without @ symbol
  * Password < 8 characters
  * Special characters in name fields

Coverage Gap Identified:
- Existing tests don't verify duplicate email prevention
- Recommend adding: Register with existing email → Verify error`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="llm-card">
                    <h4>📝 5. Automated Test Documentation</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> GPT-4 Document Generation</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>Select TOSCA test cases</li>
                        <li>GPT-4 analyzes test steps, modules, and verifications</li>
                        <li>Generates human-readable test documentation</li>
                        <li>Creates user-friendly test reports for stakeholders</li>
                      </ol>
                      <p><strong>Example Output:</strong></p>
                      <div className="code-example">
                        <strong>Test Case:</strong> TC_001_UserLogin
                        <br/><br/>
                        <strong>GPT-4 Generated Documentation:</strong>
                        <pre>{`Test Case: User Login Validation
Purpose: Verify that registered users can successfully log into the application

Preconditions:
- User account exists with email: testuser@example.com
- Password: Test@1234
- Application is accessible

Test Steps:
1. Navigate to application homepage (https://app.example.com)
2. Click "Login" button in navigation header
3. Enter email address in "Email" field
4. Enter password in "Password" field
5. Click "Sign In" button

Expected Results:
✓ User is redirected to dashboard page
✓ User's name appears in top-right corner: "Welcome, Test User"
✓ Session cookie is created with 24-hour expiration
✓ Login event is logged in audit trail

Pass Criteria:
- All expected results verified
- No error messages displayed
- Response time < 2 seconds

Test Data:
- Email: testuser@example.com
- Password: Test@1234

Related Requirements:
- REQ-AUTH-001: User Authentication
- REQ-SEC-005: Session Management`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="llm-card">
                    <h4>🔗 6. API Test Generation from OpenAPI Specs</h4>
                    <div className="llm-content">
                      <p><strong>Integration Approach:</strong> Claude + TOSCA API Testing</p>
                      <p><strong>How it works:</strong></p>
                      <ol>
                        <li>Import OpenAPI/Swagger specification</li>
                        <li>Claude analyzes endpoints, parameters, schemas</li>
                        <li>Generates comprehensive test cases including edge cases</li>
                        <li>TOSCA executes API tests</li>
                      </ol>
                      <p><strong>Example:</strong></p>
                      <div className="code-example">
                        <strong>OpenAPI Endpoint:</strong>
                        <pre>{`POST /api/v1/orders
Request Body:
{
  "customerId": "string",
  "items": [{"productId": "string", "quantity": integer}],
  "shippingAddress": {"street": "string", "city": "string", "zip": "string"}
}

Response 201:
{
  "orderId": "string",
  "totalAmount": number,
  "estimatedDelivery": "date"
}`}</pre>
                        <br/>
                        <strong>Claude Generated Test Cases:</strong>
                        <pre>{`1. Happy Path: Valid order with single item
2. Multiple Items: Order with 5 different products
3. Maximum Quantity: Single item with quantity = 999
4. Minimum Quantity: quantity = 1
5. Invalid Customer: Non-existent customerId → Expect 404
6. Missing Required Field: Omit shippingAddress → Expect 400
7. Invalid Data Type: quantity = "abc" → Expect 400
8. Boundary Value: quantity = 0 → Expect 400
9. Negative Quantity: quantity = -1 → Expect 400
10. Empty Items Array: items = [] → Expect 400
11. Duplicate Product IDs: Same productId twice → Verify handling
12. SQL Injection Attempt: customerId = "1'; DROP TABLE--" → Expect sanitization`}</pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="implementation-guide">
                  <h3>Implementation Architecture: TOSCA + LLM</h3>
                  <div className="implementation-diagram">
                    <div className="impl-step">
                      <div className="step-icon">1️⃣</div>
                      <div className="step-details">
                        <h4>TOSCA Extension</h4>
                        <p>Create custom TOSCA module that calls LLM API (OpenAI, Anthropic)</p>
                        <ul>
                          <li>Input: Test requirement or failure log</li>
                          <li>Output: Test steps or analysis</li>
                        </ul>
                      </div>
                    </div>

                    <div className="impl-step">
                      <div className="step-icon">2️⃣</div>
                      <div className="step-details">
                        <h4>API Integration Layer</h4>
                        <p>Middleware service handles TOSCA ↔ LLM communication</p>
                        <ul>
                          <li>Authentication with LLM provider</li>
                          <li>Prompt engineering for consistent outputs</li>
                          <li>Response parsing to TOSCA format</li>
                        </ul>
                      </div>
                    </div>

                    <div className="impl-step">
                      <div className="step-icon">3️⃣</div>
                      <div className="step-details">
                        <h4>Context Injection</h4>
                        <p>Provide LLM with TOSCA-specific context</p>
                        <ul>
                          <li>Application object model</li>
                          <li>Existing module library</li>
                          <li>Historical test data</li>
                          <li>Coding standards and conventions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="impl-step">
                      <div className="step-icon">4️⃣</div>
                      <div className="step-details">
                        <h4>Human-in-Loop</h4>
                        <p>Tester reviews AI suggestions before execution</p>
                        <ul>
                          <li>Approve/reject AI-generated test steps</li>
                          <li>Edit and refine outputs</li>
                          <li>Provide feedback for model improvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="future-roadmap">
                  <h3>🚀 Future AI/LLM Roadmap for TOSCA</h3>
                  <div className="roadmap-grid">
                    <div className="roadmap-item">
                      <strong>Autonomous Test Healing</strong>
                      <p>LLM automatically fixes broken tests by analyzing failure patterns and updating locators without human intervention.</p>
                    </div>
                    <div className="roadmap-item">
                      <strong>Predictive Test Analytics</strong>
                      <p>ML models predict which upcoming code changes will break which tests, proactively suggesting updates.</p>
                    </div>
                    <div className="roadmap-item">
                      <strong>Natural Language Test Execution</strong>
                      <p>Testers run tests by chatting: "Run all login tests on staging" → TOSCA executes and reports back in conversation.</p>
                    </div>
                    <div className="roadmap-item">
                      <strong>AI-Powered Test Coverage Analysis</strong>
                      <p>LLM analyzes requirements and code, identifies coverage gaps, suggests new test cases to fill gaps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="tosca-footer">
        <p>&copy; 2025 Tricentis TOSCA - Enterprise Test Automation Platform</p>
        <p className="footer-note">Information for educational and evaluation purposes</p>
      </footer>
    </div>
  );
};

export default ToscaDetailPage;
