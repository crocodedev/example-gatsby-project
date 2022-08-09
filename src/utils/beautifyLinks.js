const beautifyLinks = (text) => {
  let prettifyText = text
  const searchedValue = Array.from(
    text.matchAll(/<a[\w\d\s"@=:/.]*>(<a[\w\d\s"@=:/.]*>([\w"@=:/.]+)<\/a>)<\/a>/g),
  )
  if (searchedValue) {
    searchedValue.forEach((el) => {
      prettifyText = prettifyText.replace(el[1], el[2])
      return null
    })
  }

  return prettifyText
}

export default beautifyLinks
