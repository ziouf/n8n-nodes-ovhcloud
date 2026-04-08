#! /usr/bin/env bash

base_uri="https://eu.api.ovh.com"

for version in v1 v2; do
    mkdir -p api_docs/${version}
    curl -sSL ${base_uri}/${version} | jq '.' > api_docs/${version}/_index.json
    for path in $(jq -r '.apis[].path' < api_docs/${version}/_index.json); do
        service=$(echo ${path} | cut -d'/' -f2)
        curl -sSL ${base_uri}/${version}${path}.json | jq '.' > api_docs/${version}/${service//\//_}.json
    done
done
