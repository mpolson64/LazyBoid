import { Boid } from './Boid'

export interface World {
    boids: Boid[];
    lookRadius: number;
    lookAngle: number;
}