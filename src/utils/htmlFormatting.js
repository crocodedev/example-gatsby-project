import beautifyLinks from "utils/beautifyLinks"

const htmlFormatting = (html) => {
  const newHtml = html
    .replace(/<a href="mailto:/g, '<a target="_blank" href="mailto:')
    .replace(/\n/g, "<br>")
  return `<div class="content">${beautifyLinks(newHtml)}</div>`
}

export default htmlFormatting
