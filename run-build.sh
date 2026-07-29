#!/bin/bash
cd /workspaces/n8n-nodes-ovhcloud
echo "=== START BUILD ==="
npm run build 2>&1
echo "=== END BUILD ==="
