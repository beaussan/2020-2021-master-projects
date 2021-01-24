# Hasura as API gateway

## Hasura ? Is it a new cloud provider ?

Yes, in part, Hasura make your development easier, it provide you out-of-the-box Graphql API with authentification, authorization and caching.

**Api !! Ok. But to provide what ?**

To provide data ! According to Hasura, the key bottleneck that needs to be addressed is making data accessible. With Hasura you can provide data from a tabase(Postgres, MySql & SqlServer _soon_), remote HTTP endpoint and other graphql API. That means you can focus all your data in one endpoint without developing an application to request your data sources.

**How it work ?**

Before replying, it is interesting to know that Hasura is developed with Haskell, a fully functional language.

Hasura is quite a JIT compiler, Hasura takes the incoming GraphQL API calls over HTTP and then tries to achieve theoretically optimal performance while delegating the data fetches to downstream data-sources.

**And concretely ?**

Hasura executes GraphQL queries as follows:

- The incoming GraphQL query is parsed into an [abstract syntax tree](<[https://en.wikipedia.org/wiki/Abstract_syntax_tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)>) (AST) which is how GraphQL is represented
- The GraphQL AST is validated against the schema to generate an internal representation.
- The internal representation is converted into an SQL statement (a prepared statement whenever possible).
- The (prepared) statement is executed on Postgres to retrieve the result of the query.

**Above, you said: it can provide data from HTTP endpoint**

Yes, In Hasura there are several ways to provide data from or to HTTP endpoint:

- Actions, allows you to create a request or mutation signature, which will call an http handler whose url you must specify. In the case that you need to send data, it is embedded in a payload in the request body.
- Events, with this feature you can trigger webhook url on sql event(insert, update, delete...). For example, you can call a webhook when an entity is delete.

## How Hasura increase development speed ?

**Plug and play**

Just need to provide a database url and Hasura is able to make you Graphql API available.

**Hasura console**

Hasura come with a management interface, this allow you to easily request for data(graphiql interface) or create data tables, relationship, action and event trigger. Then you can export your configuration into code to initialize other instances of Hasura. For example, to achieve a dev -> staging -> production environment promotion scenario.

_You can configure it with code to(Hasura CLI)._

**GraphQL + Typescript**

In this part we are outside of the Hasura scope, but you can keep in mind that Graphql can also increase your development speed in the front part of your application. With tool like [GraphQL Code Generator](<[https://graphql-code-generator.com/](https://graphql-code-generator.com/)>) you can generate typescript code that contains queries, mutation, subscription and entities.

## Performence:

Hasura come with a caching system that reduce the cost of requests. Above we have seen that Hasura convert your graphql request into a prepared statement that it will execute on Postgres. This statement is store in a caching system, in case you fetch the same request. The stored statement can be called if the request is exactly the same or if parameters have changed.

For more detail, you have an explanation here:

[Query performance | Hasura GraphQL Docs](https://hasura.io/docs/1.0/graphql/core/queries/performance.html#analysing-query-performance)

## It is possible to use an existing database ?

In the case you have an existing database, it is possible to "plug" Hasura engine on it, without recreating all tables. You just need to track existing tables and relationships. Once Hasura configurated you can access data from GraphQL endpoint:

[Setting up a GraphQL schema using an existing database | Hasura GraphQL Docs](https://hasura.io/docs/1.0/graphql/core/schema/using-existing-database.html)

## How to secure my GraphQL endpoint ?

**Authentication:**

Hasura do not take charge the authentication part by itself, it's handled outside of the box. There are two authentication system:

- Webhook: it's a service who handles each request, then interprets the header request and send back an object to Hasura. The returned object must contain user information(id, role, etc).
- JWT token: You can pass a JWT token with specific encoded contain([claims properties](<[https://hasura.io/docs/1.0/graphql/core/auth/authentication/jwt.html#the-spec](https://hasura.io/docs/1.0/graphql/core/auth/authentication/jwt.html#the-spec)>), then hasura verify token validity and decode it to get user role.

**Authorization**:

With Hasura you can define granular role-based access control rules for every field in your GraphQL schema. You can directly set it from the web interface.

[Authentication & Authorization | Hasura GraphQL Docs](https://hasura.io/docs/1.0/graphql/core/auth/index.html#)
