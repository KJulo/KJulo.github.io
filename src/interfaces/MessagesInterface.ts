// En Paraglide v2, los mensajes se exportan como funciones individuales
// La propiedad 'm' es un namespace con todos los mensajes (para auto-import)
// Usamos Record para permitir acceso dinámico a las funciones de mensajes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MessageFunction = (...args: any[]) => string;

export default interface MessagesInterface {
  [key: string]: MessageFunction;
}
