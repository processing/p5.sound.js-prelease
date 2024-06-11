import * as Tone from "tone";

/**
 * Add reverb to a sound by specifying duration and decay.
 * @class Reverb
 * @constructor
 * @param {Number} [time] Set the decay time of the reverb
 * @example
 * <div>
 * <code>
 * let osc, env, reverb;
 * let randomTime = 0;
 * 
 * function setup() {
 *   let cnv = createCanvas(100, 100);
 *   cnv.mousePressed(playSound);
 *   noise = new Noise();
 *   env = new Envelope();
 *   reverb = new Reverb();
 *   noise.disconnect();
 *   noise.connect(env);
 *   env.disconnect();
 *   env.connect(reverb);
 *   noise.start();
 *   textAlign(CENTER);
 * }
 * 
 * function playSound() {
 *  randomTime = random(0.1, 3);
 *  Reverb(randomTime); 
 *  env.play();
 * }
 * 
 * function draw() {
 *   background(220);
 *   text('click to play', width/2, 20);
 *   text('decay ' + round(randomTime, 2), width/2, 40);
 * }
 * </code>
 * </div>
 */
class Reverb {
  constructor(decayTime) {
    this.decayTime = decayTime || 1;
    this.reverb = new Tone.Reverb(this.decayTime).toDestination();
  }

  /**
   * Set the decay time of the reverb.
   * @method set
   * @for Reverb
   * @param {Number} t Decay time of the reverb
   */
  set(t) {
    this.reverb.decay = t;
  }

  getNode() {
    return this.reverb;
  }

  /**
   * Connects the Reverb to a destination for processing.
   * @method connect
   * @for Reverb
   * @param {Object} unit A p5.sound processor or modulation index.
   */
  connect(destination) {
    this.reverb.connect(destination.getNode());
  }
  
  /**
   * Disconnects the Reverb from the output destination.
   * @method disconnect
   * @for Reverb
   */
  disconnect() {
    this.reverb.disconnect(Tone.Context.destination);
  }
}

export default Reverb;