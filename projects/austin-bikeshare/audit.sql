SELECT COUNT(*) AS trips_with_noninteger_destination_id
FROM `bigquery-public-data.austin_bikeshare.bikeshare_trips`
WHERE end_station_id IS NOT NULL
  AND SAFE_CAST(end_station_id AS INT64) IS NULL;
