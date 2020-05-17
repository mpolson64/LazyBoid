import { Boid } from '../types/Boid'
import { World } from '../types/World'

export function next(world: World): World {
    const nextBoids = world.boids.map(boid => {
        const visible = filterVisible(world.lookAngle, world.lookRadius, boid.position, world.boids);

        const separated = separate(visible, boid);
        const aligned = align(visible, boid);
        const cohered = cohere(visible, boid);

        const velocity: [number, number] = [
            (separated[0] + aligned[0] + cohered[0]) / 3,
            (separated[1] + aligned[1] + cohered[1]) / 3,
        ];

        const position: [number, number] = [
            boid.position[0] + velocity[0],
            boid.position[1] + velocity[1],
        ];

        return {
            position,
            velocity,
        };
    });

    return {
        boids: nextBoids,
        lookAngle: world.lookAngle,
        lookRadius: world.lookRadius
    };
}

// TODO
function filterVisible(lookAngle: number, lookRadius: number, position: [number, number], boids: Boid[]): Boid[] {
    return boids.filter(
        boid => {
            const inRadius = true;
            const inAngle = true;

            return inRadius && inAngle;
        }
    );
}

// TODO
function separate(visible: Boid[], boid: Boid): [number, number] {
    return boid.velocity;
}

// TODO
function align(visible: Boid[], boid: Boid): [number, number] {
    return boid.velocity;
}

// TODO
function cohere(visible: Boid[], boid: Boid): [number, number] {
    return boid.velocity;
}