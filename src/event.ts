// src/event.ts

import { Spaceship, ResourceType} from './interface';
import { Planet, PlanetSize, Enemy } from './class';
import { getUserInput } from './user';

// Función para manejar la llegada del usuario a un planeta
export function handlePlanetArrival(planet: Planet, shots: number): void {
  console.log(`Haz llegado al planeta ${getPlanetSizeString(planet.size)}`);

let water: number = 0;
let gas: number = 5;
let minerals: number = 0;

  const userInput = getUserInput("¿Deseas atacar (y/n)? ");
  userInput.then((response) => {
    if (response.toLowerCase() === 'y') {
      // Si decide atacar
      shots -= planet.dangerLevel;
      if (shots >= 0) {
        // Conquista exitosa
        console.log(`¡Excelente! Haz conquistado el planeta y has conseguido los siguientes recursos: ${getResourceString(planet.conquerPlanet())}`);
        // Incrementar recursos conquistados
        planet.conquerPlanet().forEach(resource => {
          switch (resource) {
            case ResourceType.Water:
              water++;
              break;
            case ResourceType.Gas:
              gas++;
              break;
            case ResourceType.Minerals:
              minerals++;
              break;
          }
        });
      } else {
        // Fracaso en la conquista
        console.log("¡Has fracasado!");
      }
    }
  });
}

// Función para manejar encuentros con enemigos
export function handleEnemyEncounter(spaceship: Spaceship, enemy: Enemy): void {
  console.log("¡Has encontrado un enemigo!");

  // Calcular el resultado del combate
  const spaceshipHealthAfterCombat = spaceship.health - enemy.attack;
  const spaceshipShotsAfterCombat = spaceship.shots - enemy.resistance;

  // Verificar el resultado del combate
  if (spaceshipHealthAfterCombat > 0 && spaceshipShotsAfterCombat > 0) {
    console.log("¡Ganaste!");
  } else {
    console.log("La misión ha fracasado");
  }
}

// Función para obtener la cadena de texto del tamaño del planeta
function getPlanetSizeString(size: PlanetSize): string {
  switch (size) {
    case PlanetSize.Grande:
      return "grande";
    case PlanetSize.Mediano:
      return "mediano";
    case PlanetSize.Pequeno:
      return "pequeño";
  }
}

// Función para obtener la cadena de texto de los recursos
function getResourceString(resources: ResourceType[]): string {
  return resources.map(resource => {
    switch (resource) {
      case ResourceType.Water:
        return "agua";
      case ResourceType.Gas:
        return "gas";
      case ResourceType.Minerals:
        return "minerales";
    }
  }).join(", ");
}
