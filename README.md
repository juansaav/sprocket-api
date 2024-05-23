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

## Run the app 
```
npm run start
```
This command will:
1. Run the postgres instance using docker-compose, port `5432`
2. Build the project
3. Run the project on port `3000`
4. Insert seed data

### List factories paginated
Lists factories paginated using `offset` and `limit`.
```
GET /factory?offset=:offset&limit=:limit`
```

### Get factory paginated
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
GET /scrocket/:id
```

### Create scrocket. 
Returns the scrocket by `id`. All fields are required.
```
POST /scrocket
{
	"teeth": 1,
    "pitchDiameter": 2,
    "outsideDiameter": 3,
    "pitch": 4
}
```

### Update scrocket
Updates the scrocket by `id`. All fields are optional.
```
PUT /scrocket/:id
{
	"teeth": 1,
    "pitchDiameter": 2,
    "outsideDiameter": 3,
    "pitch": 4
}
```
