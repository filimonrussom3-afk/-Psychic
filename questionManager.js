 class QuestionManager {
  constructor() {
    this.questions = [
      "Calm or busy?",
      "Routine or risky?",
      "Simple or complex?",
      "Quick or slow?",
      "Pattern or random?",
      "Energy or calm?",
      "Nature or imagination?",
      "Bright or soft?",
      "Creative or practical?",
      "Neutral or bold?"
    ];

    this.choices = [
      ["calm","busy"],
      ["routine","risky"],
      ["simple","complex"],
      ["quick","slow"],
      ["pattern","random"],
      ["energy","calm"],
      ["nature","imagination"],
      ["bright","soft"],
      ["creative","practical"],
      ["neutral","bold"]
    ];
  }

  get(step) { return this.questions[step-1]; }
  getChoices(step) { return this.choices[step-1]; }
}