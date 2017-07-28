var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var root = {
  hello: () => {
    return 'Hello world!'
  }
}

async function main() {
  response = await graphql(schema, '{hello}', root)
  console.log(response)
}

main()
