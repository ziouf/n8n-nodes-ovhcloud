# OVH Cloud Dedicated Cloud — List Restore Points

> Opération `vmRestorePointsList` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmRestorePointsList.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |
| `returnAll` | boolean | — |
| `limit` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
