define([
  'knockout',
  'ojs/ojarraydataprovider',
  'ojs/ojchart',
  'ojs/ojtable',
  'ojs/ojcollapsible'
], function(ko, ArrayDataProvider) {
  function IncidentsViewModel() {
    var self = this;

    // ----------- Project 1: Timecard Automation ---------
    self.timecardHighlightsDataProvider = new ArrayDataProvider([
      { highlight: "Annual timecards processed", impact: "10,000+" },
      { highlight: "Manual intervention reduced", impact: "60%" },
      { highlight: "Invoice processing time", impact: "<2 days (from 5 days)" }
    ], {keyAttributes: 'highlight'});

    self.timecardChallengesDataProvider = new ArrayDataProvider([
      { challenge: "Multi-format input", resolution: "Dynamic fragment rendering" },
      { challenge: "PO/BPA validation", resolution: "Automated OIC checks" },
      { challenge: "Manual approvals", resolution: "Workflow automation, routing" }
    ], {keyAttributes: 'challenge'});

    self.timecardPieChartSeries = ko.observableArray([
      { name: "Automated", items: [60] },
      { name: "Manual", items: [40] }
    ]);

    // ----------- Project 2: Job Management ---------
    self.jobMgmtHighlightsDataProvider = new ArrayDataProvider([
      { highlight: "Job records managed", impact: "5,000+" },
      { highlight: "Assignments tracked", impact: "15,000+" },
      { highlight: "Audit traceability", impact: "80% improved" }
    ], {keyAttributes: 'highlight'});

    self.jobMgmtChallengesDataProvider = new ArrayDataProvider([
      { challenge: "Bulk updates", resolution: "PL/SQL packages" },
      { challenge: "Traceability", resolution: "Timestamped audit trail" },
      { challenge: "Manual lookups", resolution: "REST-based HCM integration" }
    ], {keyAttributes: 'challenge'});

    self.jobMgmtBarSeries = ko.observableArray([
      { name: "Records", items: [5000, 15000] }
    ]);
    self.jobMgmtBarGroups = ko.observableArray(["Job Records", "Assignments"]);

    // ----------- Project 3: Fusion Automation ---------
    self.automationHighlightsDataProvider = new ArrayDataProvider([
      { highlight: "Test scripts delivered", impact: "1,500+" },
      { highlight: "Regression cycle speed-up", impact: "70%" },
      { highlight: "UAT cycle reduction", impact: "1.5 weeks faster" }
    ], {keyAttributes: 'highlight'});

    self.automationChallengesDataProvider = new ArrayDataProvider([
      { challenge: "Manual test prep", resolution: "Angular-based transformation UI" },
      { challenge: "Slow defect cycles", resolution: "Regression automation" },
      { challenge: "Coverage gaps", resolution: "QA & functional team alignment" }
    ], {keyAttributes: 'challenge'});

    self.automationChartSeries = ko.observableArray([
      { name: "Regression Time (days)", items: [10, 3] }
    ]);
    self.automationChartGroups = ko.observableArray(["Before Automation", "After Automation"]);

    // ----------- Internship 1: Resort CV Project ---------
    self.cvInternshipTableDataProvider = new ArrayDataProvider([
      { highlight: "Detection Accuracy", impact: "95%" },
      { highlight: "Crime Reduction", impact: "20%" },
      { highlight: "Deployment", impact: "Live, UI delivered" }
    ], {keyAttributes: 'highlight'});

    self.cvInternshipPieChartSeries = ko.observableArray([
      { name: "Detected", items: [95] },
      { name: "Undetected", items: [5] }
    ]);

    // ----------- Internship 2: Sentiment Analysis ---------
    self.sentimentInternshipTableDataProvider = new ArrayDataProvider([
      { highlight: "NLP Tools", impact: "NLTK, TextBlob" },
      { highlight: "Automated insights", impact: "Sentiment extraction" },
      { highlight: "Independence", impact: "Self-driven research" }
    ], {keyAttributes: 'highlight'});

    self.sentimentInternshipPieChartSeries = ko.observableArray([
      { name: "Positive", items: [55] },
      { name: "Negative", items: [25] },
      { name: "Neutral", items: [20] }
    ]);

    return self;
  }
  return IncidentsViewModel;
});
