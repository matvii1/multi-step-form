export function getLabelName(valType: string) {
  let labelName = valType[0].toUpperCase()

  for (let i = 1; i < valType.length; i++) {
    const nextIndex = i + 1

    if (
      valType[nextIndex] &&
      valType[nextIndex] === valType[nextIndex].toUpperCase()
    ) {
      labelName += valType[i] + ' '

      continue
    }

    if (valType[nextIndex] && valType[i] === valType[i].toUpperCase()) {
      labelName += valType[i].toLowerCase()

      continue
    }

    labelName += valType[i]
  }

  return labelName
}
