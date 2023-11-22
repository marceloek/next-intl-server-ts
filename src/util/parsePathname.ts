function findPage(pathname: string, page: string): number {
  const pathnameSplitted = pathname.split('/')

  const findIndex = pathnameSplitted.findIndex(item => item === page)

  return findIndex
}

function replacePage(pathname: string, page: string, index: number): string {
  const pathnameSplitted = pathname.split('/')

  pathnameSplitted.splice(index, 1, page)

  return pathnameSplitted.join('/')
}

function isEqualPage(pathname: string, page: string, index: number): boolean {
  const pathnameSplitted = pathname.split('/')

  return pathnameSplitted[index] === page
}

export { findPage, isEqualPage, replacePage }
