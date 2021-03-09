<template>
  <div ref="sketchParent"></div>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */
import P5 from 'p5';
import { ref, onMounted } from 'vue';

interface WaveOptions {
  noiseOffset?: number;
  noiseStep?: number;
  speed?: number;
  rgba?: [number, number, number, number];
  height?: number;
  constraint?: number;
}

class Wave {
  private noiseOffset: number;

  private readonly noiseStep: number;

  private readonly speed: number;

  private readonly rgba: [number, number, number, number];

  private readonly height: number;

  private readonly constraint: number;

  private p: P5;

  constructor(p: P5, options: WaveOptions) {
    this.noiseOffset = options.noiseOffset || 0;
    this.noiseStep = options.noiseStep || 0.01;
    this.speed = options.speed || 0.01;
    this.rgba = options.rgba || [0, 0, 0, 1];
    this.height = options.height || 0;
    this.constraint = options.constraint || 100;
    this.p = p;
  }

  show() {
    const {
      p,
      height,
      noiseStep,
      rgba,
      constraint,
    } = this;

    p.noStroke();
    p.fill(...rgba);
    p.beginShape();

    p.vertex(0, p.height);
    for (let i = 0; i < p.width; i += 1) {
      const val = p.noise(this.noiseOffset + i * noiseStep);
      p.vertex(i, p.height - val * constraint - height);
    }
    p.vertex(p.width, p.height);

    p.endShape(p.CLOSE);
    this.noiseOffset += this.speed;
  }
}

export default {
  name: 'Sketch',
  setup() {
    const sketchParent = ref();

    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const p5 = new P5((p) => {
        const waves: Wave[] = [];
        p.setup = () => {
          p.noiseSeed(103); // always the same animation

          p.createCanvas(sketchParent.value.clientWidth, window.innerHeight)
            .parent(sketchParent.value);

          waves.push(new Wave(p, {
            noiseOffset: -300,
            noiseStep: 0.001,
            speed: -0.0001,
            height: 300,
            constraint: 500,
            rgba: [3, 130, 140, 50],
          }));
          waves.push(new Wave(p, {
            noiseOffset: -200,
            noiseStep: 0.001,
            speed: -0.0001,
            height: 200,
            constraint: 300,
            rgba: [3, 180, 30, 70],
          }));
          waves.push(new Wave(p, {
            noiseOffset: -100,
            noiseStep: 0.005,
            speed: 0.0006,
            height: 170,
            rgba: [3, 200, 9, 80],
          }));
          waves.push(new Wave(p, {
            noiseOffset: -900,
            noiseStep: 0.005,
            speed: 0.0006,
            height: 190,
            rgba: [3, 200, 200, 70],
          }));
          waves.push(new Wave(p, {
            noiseStep: 0.002,
            speed: 0.0005,
            height: 155,
            rgba: [2, 200, 8, 130],
          }));
          waves.push(new Wave(p, {
            noiseOffset: 100,
            noiseStep: 0.003,
            speed: 0.001,
            height: 100,
            constraint: 300,
            rgba: [0, 49, 45, 255],
          }));
          waves.push(new Wave(p, {
            noiseOffset: 150,
            noiseStep: 0.002,
            speed: 0.002,
            height: 50,
            constraint: 150,
            rgba: [1, 35, 34, 255],
          }));
          waves.push(new Wave(p, {
            noiseOffset: 200,
            noiseStep: 0.0025,
            speed: 0.003,
            rgba: [0, 0, 0, 255],
          }));
        };

        p.draw = () => {
          p.background(0);
          p.stroke(255);
          p.strokeWeight(1);
          waves.forEach((wave) => wave.show());
        };

        p.windowResized = () => {
          p.resizeCanvas(sketchParent.value.clientWidth, window.innerHeight);
        };
      });
    });

    return {
      sketchParent,
    };
  },
};
</script>
