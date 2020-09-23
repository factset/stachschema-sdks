git clone --depth 1 https://github.com/factset/stachschema.git schema

$env:SCHEMA="$(pwd)/schema/proto"

docker-compose -f docker-compose.generate.yml up --remove-orphans

rm /s /q schema