// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from "node-fetch"

export default async function recaptchaCheck(req, res) {
  const result = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=&response=${
      JSON.parse(req.body).token
    }`,
    {
      method: "POST",
    },
  ).then((ans) => {
    return ans.json()
  })
  res.json(result)
}
