// src/class.ts

import { ResourceType } from './interface';

export enum PlanetSize {
  Grande,
  Mediano,
  Pequeno
}

export class Planet {
  constructor(
    public name: string,             // Nombre del planeta
    public size: PlanetSize         // Tamaño del planeta
  ) {
    // Configurar recursos y peligro basado en el tamaño del planeta
    switch (size) {
      case PlanetSize.Grande:
        this.resources = [ResourceType.Water, ResourceType.Minerals, ResourceType.Gas];
        this.dangerLevel = 3;
        break;
      case PlanetSize.Mediano:
        this.resources = this.getRandomResources(2);
        this.dangerLevel = 2;
        break;
      case PlanetSize.Pequeno:
        this.resources = this.getRandomResources(1);
        this.dangerLevel = 1;
        break;
      default:
        throw new Error("Tamaño de planeta no válido");
    }
  }

  private getRandomResources(count: number): ResourceType[] {
    const resources: ResourceType[] = [];
    while (resources.length < count) {
      const randomResource = Math.floor(Math.random() * Object.keys(ResourceType).length / 2);
      if (!resources.includes(randomResource)) {
        resources.push(randomResource);
      }
    }
    return resources;
  }

  public resources: ResourceType[];  // Recursos del planeta
  public dangerLevel: number;        // Nivel de peligro del planeta

  // Método para obtener los recursos del planeta después de conquistarlo
  public conquerPlanet(): ResourceType[] {
    return this.resources;
  }
}

export class Enemy {
  constructor(
    public resistance: number,  // Resistencia del enemigo
    public attack: number       // Ataque del enemigo
  ) {}
}
