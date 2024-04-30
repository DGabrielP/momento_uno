// src/user.ts

import readline from 'readline';

// Función para obtener la entrada del usuario desde la consola
export function getUserInput(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(prompt, (input: string) => {
      rl.close();
      resolve(input.trim());
    });
  });
}

// Función para iniciar la interacción con el usuario
export async function startUserInteraction(): Promise<string> {
  console.log("Hola, eres un viajero espacial.");
  let playerName = await getUserInput("¿Cuál es tu nombre?: ");
  playerName = playerName || "Space traveler";
  console.log(`Bien, ${playerName}, estamos en medio de la nada y las opciones son: Un planeta muy grande al norte, un planeta pequeño al sur o unas naves desconocidas al este`);
  let direction = await getUserInput("¿A dónde quieres ir? (escribe solo norte, sur o este): ");
  return direction;
}
