#!/bin/bash
# Script to generate cron schedules for all repos

repos=(
  "owner/repo1"
  "owner/repo2"
  # ... all 70 repos
)

for repo in "${repos[@]}"; do
  # Create a hash of the repo name and convert to decimal
  hash=$(echo -n "$repo" | md5sum | cut -c1-8)
  decimal=$((0x$hash))
  
  # Distribute across 4 hours (240 minutes)
  minute_offset=$((decimal % 240))
  hour=$((minute_offset / 60))
  minute=$((minute_offset % 60))
  
  echo "Repo: $repo"
  echo "Cron: '$minute $hour * * *'"
  echo "---"
done
