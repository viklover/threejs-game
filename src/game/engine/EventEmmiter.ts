
type CallbackFunction = (args: any[]) => void;

export default abstract class EventEmitter {

  private callbacks: {[key: string]: CallbackFunction} = {};

  public on(name: string, callback: CallbackFunction): void {
    this.callbacks[name] = callback;
  }

  public off(name: string): void {
    delete this.callbacks[name];
  }

  public trigger(name: string, args: any[] = []): void {

    if (name in this.callbacks) {
      this.callbacks[name](args);
    } else {
      throw new Error(`calls a not existing trigger by '${name}' name`);
    }
  }
}
