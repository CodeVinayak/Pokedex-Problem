import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed the database with mock data
  await prisma.pokemon.createMany({
    data: [
      {
        name: 'Bulbasaur',
        types: ['grass', 'poison'],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      {
        name: 'Charmander',
        types: ['fire'],
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      },
      // Add more Pokemon data as needed
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });