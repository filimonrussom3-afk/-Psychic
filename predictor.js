 class Predictor {
  constructor() {
    this.reset();
  }

  reset() {
    this.score = 50;
    this.bias = 0;
    this.colors = { red:0, yellow:0, green:0, blue:0, purple:0, none:0 };
  }

  process(step, ans) {
    ans = ans.toLowerCase();

    if (step === 1) ans.includes("calm") ? this.score -= 20 : this.score += 20;
    if (step === 2) ans.includes("routine") ? this.bias++ : this.bias--;
    if (step === 3) ans.includes("simple") ? this.score -= 10 : this.score += 10;
    if (step === 4) ans.includes("quick") ? this.score += 5 : this.score -= 5;
    if (step === 5) ans.includes("pattern") ? this.bias++ : this.bias--;

    if (step === 6) ans.includes("energy") ? this.colors.red++ : this.colors.blue++;
    if (step === 7) ans.includes("nature") ? this.colors.green++ : this.colors.purple++;
    if (step === 8) ans.includes("bright") ? this.colors.yellow++ : this.colors.blue++;
    if (step === 9) ans.includes("creative") ? this.colors.purple++ : this.colors.green++;
    if (step === 10) ans.includes("neutral") ? this.colors.none += 2 : this.colors.red++;
  }

  getScore() {
    this.score = constrain(this.score, 0, 100);
    return this.score;
  }

  getColor() {
    let best = "none", max = -1;
    for (let c in this.colors) {
      if (this.colors[c] > max) {
        max = this.colors[c];
        best = c;
      }
    }
    return best;
  }
}