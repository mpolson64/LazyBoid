import { Boid } from '../types/Boid'
import { World } from '../types/World'

export function next(world: World): World {
    const nextBoids = world.boids.map(boid => boid)

    return {
        boids: nextBoids,
        lookAngle: world.lookAngle,
        lookRadius: world.lookRadius
    };
}