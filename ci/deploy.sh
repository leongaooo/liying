#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_BASE:=/var/www/liying}"
: "${RELEASES_DIR:=${DEPLOY_BASE}/releases}"
: "${CURRENT_LINK:=${DEPLOY_BASE}/current}"
: "${KEEP_RELEASES:=5}"

if [[ ! -d dist ]]; then
  echo "dist/ not found; run the build first" >&2
  exit 1
fi

release_id="${BUILD_NUMBER:-manual}-$(date +%Y%m%d%H%M%S)"
release_dir="${RELEASES_DIR}/${release_id}"

mkdir -p "${RELEASES_DIR}"
rsync -a --delete dist/ "${release_dir}/"

ln -sfn "${release_dir}" "${CURRENT_LINK}"

if [[ "${KEEP_RELEASES}" =~ ^[0-9]+$ ]]; then
  ls -1dt "${RELEASES_DIR}"/* 2>/dev/null | tail -n +"$((KEEP_RELEASES+1))" | xargs -r rm -rf
fi

echo "Deployed ${release_id}"
