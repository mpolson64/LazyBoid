import { Boid } from '../types/Boid'

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

export { averagePosition, averageVelocity }