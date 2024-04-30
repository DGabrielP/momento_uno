// src/interface.ts

// src/interface.ts

// Enum para los tipos de recursos
export enum ResourceType {
  Water,
  Minerals,
  Gas
}

// Definición de la interfaz para la nave espacial
export interface Spaceship {
  health: number;         // Salud de la nave
  cargoCapacity: number;  // Capacidad de carga
  speed: number;          // Velocidad de la nave
  shots: number;          // Disparos que faltan, se iniciará en 5
}

