# Angelo's URL Shortener

My personal link shortener using [Airtable](https://airtable.com) as a database (✿◠‿◠)

Every invalid pages will attempt to be redirected 😌

## Details

NextJS will attempt to rewrite every unknown page (in the codebase) to redirect (/api/redirect).

Using NextJS' serverless function, we can resolve the requested path and match them against Airtable record.

## Development

```bash
yarn install
yarn dev
```
