# OVH Cloud Iam — Retrieve All Policies

> Opération `iampolicyListGet` · Fichier source : `nodes/OvhCloudIam/iampolicyListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/iam/policy` |

## Paramètres

Aucun paramètre supplémentaire.

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.action` | `action` | string |
| `filters.identity` | `identity` | string |
| `filters.resourceURN` | `resourceURN` | string |
| `filters.readOnly` | `readOnly` | options |
| `filters.details` | `details` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
