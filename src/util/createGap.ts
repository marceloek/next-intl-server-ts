export type IGap = number | number[]

export function createGap(gap: IGap): string {
  if (typeof gap === 'number') gap = [gap, gap]

  const [x, y] = gap

  return `gap-x-${x} gap-y-${y}`
}
