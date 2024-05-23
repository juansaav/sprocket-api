# sprocket-api
This is a RESTful API that uses:

- Node.js
- Typescript.js
- Express.js
- Postgresql
- Prisma 
- express-validator
- TypeDI
- Docker & Docker compose

## Install dependencies
```
npm install
```

## Run the api 
Prerequisites: have Docker running

```
npm run start
```
This command will:
1. Run the postgres instance using docker-compose, port `5432`
2. Build the project
3. Run the project on port `3000`
4. Insert seed data

## Test

You can import from Postman the `Sprocket API.postman_collection.json` file or create your own requests.

### List factories paginated
Lists factories paginated using `offset` and `limit`.
```
GET /factory?offset=:offset&limit=:limit`
```

### Get factory
Returns the factory by `id`
```
GET /factory/:id
```

### Get factory performance values
Returns factory performance values between `fromDate` and `toDate`. If no values are passed, default values are assigned.
```
GET /factory/:id/performance-values?fromDate=:fromDate&toDate=:toDate
```

### Get scrocket
Returns the scrocket by `id`.
```
GET /sprocket/:id
```

### Create sprocket. 
Returns the sprocket by `id`. All fields are required.
```
POST /sprocket
{
    "teeth": 1,
    "pitchDiameter": 2,
    "outsideDiameter": 3,
    "pitch": 4
}
```

### Update sprocket
Updates the sprocket by `id`. All fields are optional.
```
PUT /sprocket/:id
{
    "teeth": 1,
    "pitchDiameter": 2,
    "outsideDiameter": 3,
    "pitch": 4
}
```


## Future work 
- Implement authentication endpoint using JWT
- Authenticate all endpoints
- Improve data validation
- Implement pagination for sprockets
- Implement testing: unit, integration, E2E, load
- Use Swagger to document the API
- Create two more envs: stg, prod. Create terraform scripts to deploy using Kubernetes
- Implement CI/CD pipeline, add github actions or use Buildkite to validate PRs and deploy
- Consider using a cache like Redis to cache data, i.e. factory data
