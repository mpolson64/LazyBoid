import { World } from '../types/World'

function next(world: World): World {
    const nextBoids = world.boids.map(boid => boid)

    return {
        boids: nextBoids,
        lookAngle: world.lookAngle,
        lookRadius: world.lookRadius
    };
}

export { next }