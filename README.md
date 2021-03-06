## Dependencies 

Install the following dependencies to compile and run Fooston.com locally

- [PostgreSQL](https://www.postgresql.org/)
- [.NET Core](https://www.microsoft.com/net/) 
- [Node.js](https://nodejs.org/en/)

## App setup

1. Open a command terminal in the FoostonWeb directory and run

	```bash
	npm install
	```

## Database setup

1. Create PostgreSQL role
2. Create Database with owner set to role in step 1
3. Copy appsettings.json to appsettings.development.json
4. Add connection string to database in appsettings.Development.json

```json	
"ConnectionStrings": {
	"FoostonDb": "User ID=[role];Password=[password];Host=localhost;Port=5432;Database=[database];"
}
```

5. Open a command terminal in the FoostonWeb directory and run the following commands

	```bash
	dotnet restore
	dotnet ef database update
	```

## Tools

Stuff I use to work on this site

### DB Administration

 - pgAdmin III (free) - possibly installed with PostgreSQL
 - [DataGrip](https://www.jetbrains.com/datagrip/)

### IDE Suggestions

- Linux/macOS: [Visual Studio Code](https://code.visualstudio.com/)
- Windows: [Visual Studio](https://www.visualstudio.com/)
