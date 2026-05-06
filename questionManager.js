 class QuestionManager {
  constructor() {
    this.questions = [
      "Do you prefer calm situations or busy situations?",
      "Do you prefer routine or taking risks?",
      "Do you prefer simple things or complex things?",
      "Do you prefer working quickly or slowly?",
      "Do you prefer patterns or randomness?",
      "Do you prefer energy and excitement or a calm feeling?",
      "Do you prefer nature or imagination?",
      "Do you prefer bright things or soft things?",
      "Do you prefer being creative or being practical?",
      "Do you prefer neutral choices or bold choices?"
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