#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_BASE:=/var/www/liying}"
: "${RELEASES_DIR:=${DEPLOY_BASE}/releases}"
: "${CURRENT_LINK:=${DEPLOY_BASE}/current}"
: "${ROLLBACK_VERSION:=}"

if [[ -z "${ROLLBACK_VERSION}" ]]; then
  echo "ROLLBACK_VERSION is required" >&2
  echo "Available releases:" >&2
  ls -1 "${RELEASES_DIR}" 2>/dev/null || true
  exit 1
fi

target="${RELEASES_DIR}/${ROLLBACK_VERSION}"
if [[ ! -d "${target}" ]]; then
  echo "Release not found: ${target}" >&2
  echo "Available releases:" >&2
  ls -1 "${RELEASES_DIR}" 2>/dev/null || true
  exit 1
fi

ln -sfn "${target}" "${CURRENT_LINK}"

echo "Rolled back to ${ROLLBACK_VERSION}"
