import * as Tone from "tone";
const clamp = (val, min=-1, max=1) => Math.min(Math.max(val, min), max)

class Panner {
  constructor() {
    this.panner= new Tone.Panner(0).toDestination();
  }

  pan(p) {
    this.panner.pan.rampTo(clamp(p), 0.01);
  }

  getNode() {
    return this.panner;
  }

  connect(destination) {
    this.panner.connect(destination.getNode());
  }

  disconnect() {
    this.panner.disconnect(Tone.Context.destination);
  }
}

export default Panner;