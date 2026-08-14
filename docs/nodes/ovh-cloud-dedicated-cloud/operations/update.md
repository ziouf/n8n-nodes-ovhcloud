# OVH Cloud Dedicated Cloud — Update VMware on OVHcloud

> Opération `update` · Fichier source : `nodes/OvhCloudDedicatedCloud/root/update.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `description` | string | — |
| `sslV3` | boolean | — |
| `userAccessPolicy` | options | — |
| `Filtered` | — | — |
| `Open` | — | — |
| `userLimitConcurrentSession` | number | — |
| `userLogoutPolicy` | options | — |
| `First` | — | — |
| `Last` | — | — |
| `userSessionTimeout` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
