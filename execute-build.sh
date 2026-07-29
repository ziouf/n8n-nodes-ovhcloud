#!/bin/bash
cd /workspaces/n8n-nodes-ovhcloud
npm run build > /tmp/build.log 2>&1
cat /tmp/build.log
