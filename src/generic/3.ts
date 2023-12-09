/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, V extends object> (objA: T, objB: V): T & V {
  return Object.assign(objA, objB);
}

export { merge }