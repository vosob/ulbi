type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  const modClasses = Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className);

  return [cls, ...additional.filter(Boolean), ...modClasses].join(" ").trim(); // .trim() додано, щоб позбутися зайвих пробілів
}
