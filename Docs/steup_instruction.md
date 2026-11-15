# Database configuration

The backend uses the local PostgreSQL database `sliit-football` by default when
you run it on your computer. You can override the connection using
`SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, and
`SPRING_DATASOURCE_PASSWORD`. It also accepts PostgreSQL's `PGHOST`, `PGPORT`,
`PGDATABASE`, `PGUSER`, and `PGPASSWORD` variables.

The public website sends signup and login requests to the deployed Spring Boot
backend. A deployed backend's `localhost` is the backend host, not your laptop,
so its data will not appear in PostgreSQL running only on your laptop. For live
signups, attach a PostgreSQL service to the backend host (Railway) and set these
variables on the backend service, replacing `Postgres` with the exact database
service name:

```text
PGHOST=${{Postgres.PGHOST}}
PGPORT=${{Postgres.PGPORT}}
PGDATABASE=${{Postgres.PGDATABASE}}
PGUSER=${{Postgres.PGUSER}}
PGPASSWORD=${{Postgres.PGPASSWORD}}
```

Redeploy the backend after adding the variables. If you need records on your
laptop, export them from the hosted database or import a backup locally. Making
a laptop database directly reachable from the public internet is not
recommended.
