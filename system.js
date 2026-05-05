 class System {
  constructor() {
    this.predictor = new Predictor();
    this.qm = new QuestionManager();
    this.step = 1;
    this.users = [];

    // simple container
    this.container = createDiv();
    this.container.style("text-align", "center");
    this.container.style("margin-top", "50px");

    createElement("h2", "Prediction System").parent(this.container);

    this.nameInput = createInput("").parent(this.container);
    this.startBtn = createButton("Start").parent(this.container);

    this.question = createP("").parent(this.container);

    this.btn1 = createButton("").parent(this.container);
    this.btn2 = createButton("").parent(this.container);

    this.btn1.hide();
    this.btn2.hide();

    this.output = createDiv("").parent(this.container);

    this.startBtn.mousePressed(() => this.start());
    this.btn1.mousePressed(() => this.answer(this.btn1.html()));
    this.btn2.mousePressed(() => this.answer(this.btn2.html()));
  }

  start() {
    this.name = this.nameInput.value();

    if (this.name === "") {
      this.question.html("Enter a name");
      return;
    }

    this.predictor.reset();
    this.step = 1;

    this.nameInput.hide();
    this.startBtn.hide();

    this.btn1.show();
    this.btn2.show();

    this.showQuestion();
  }

  showQuestion() {
    this.question.html("Q" + this.step + ": " + this.qm.get(this.step));

    let c = this.qm.getChoices(this.step);
    this.btn1.html(c[0]);
    this.btn2.html(c[1]);
  }

  answer(choice) {
    this.predictor.process(this.step, choice);

    this.step++;

    if (this.step > 10) this.finish();
    else this.showQuestion();
  }

  finish() {
    let num = this.predictor.getScore();
    let col = this.predictor.getColor();

    // Store user in the users array
    this.users.push(new User(this.name, num, col));

    this.output.html(
      this.output.html() + `<p>${this.name}: ${num}, ${col}</p>`
    );

    this.reset();
  }

  reset() {
    this.nameInput.show();
    this.startBtn.show();

    this.btn1.hide();
    this.btn2.hide();

    this.nameInput.value("");
    this.question.html("");
  }
}