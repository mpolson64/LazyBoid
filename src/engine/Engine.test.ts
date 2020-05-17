import { next } from './Engine'

test('next', () => {
    const world = {
        boids: [
            {
                positionX: 0,
                positionY: 0,
                velocityX: 0,
                velocityY: 0,
            }
        ],
        lookAngle: 0,
        lookRadius: 0,
    };

    const nextWorld = next(world);

    // these should not be mutated through next() calls
    expect(nextWorld.boids.length).toEqual(world.boids.length);
    expect(nextWorld.lookAngle).toEqual(world.lookAngle);
    expect(nextWorld.lookRadius).toEqual(world.lookRadius);
});