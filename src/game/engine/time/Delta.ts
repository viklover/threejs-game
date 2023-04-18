
export default class Delta {
  
  public value: number | null;
  public elapsed: number = 0;

  public start: number;
  public first_start: number;
  
  constructor() {
    const currentTime: number = Date.now();
    this.first_start = currentTime;
    this.start = currentTime;
  }

  update() {

    const currentTime = Date.now();

    this.value = currentTime - this.start;
    this.elapsed = currentTime - this.first_start;
  }
}
