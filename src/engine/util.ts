import { Boid } from '../types/Boid'
import { tuple } from '../util'

function averagePosition(boids: Boid[]): [number, number] {
    return [
        boids.reduce<number>((a, b) => a + b.position[0] / boids.length, 0),
        boids.reduce<number>((a, b) => a + b.position[1] / boids.length, 0),
    ];
}

function averageVelocity(boids: Boid[]): [number, number] {
    return [
        boids.reduce<number>((a, b) => a + b.velocity[0] / boids.length, 0),
        boids.reduce<number>((a, b) => a + b.velocity[1] / boids.length, 0),
    ];
}

// TODO tune the speed
function turnTowardsVector(target: [number, number], self: [number, number]): [number, number] {
    const direction = tuple(target[0] + self[0], target[1] + self[1]);

    return normalizeVector(direction, Math.sqrt(self[0] ** 2 + self[1] ** 2))
}

function normalizeVector(vector: [number, number], magnitude: number): [number, number] {
    const currentMagnitude = Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
    const normalized = vector.map(component => (component / currentMagnitude) * magnitude);

    return tuple(normalized[0], normalized[1]);
}

export { averagePosition, averageVelocity, turnTowardsVector }