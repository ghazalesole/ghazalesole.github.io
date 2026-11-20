# Austin bikeshare destination ID audit

I checked how often a trip had a recorded destination station ID that could not be converted to an integer. A station report that requires a numeric ID could omit those rides. The audit flagged 119 trip records when I ran it.

The [SQL query](audit.sql) runs against the public BigQuery table `bigquery-public-data.austin_bikeshare.bikeshare_trips`. SQL NULLs are excluded. The count can change as the public data is updated.

[City of Austin data source](https://data.austintexas.gov/Transportation-and-Mobility/Austin-MetroBike-Trips/tyfh-5r8s)
