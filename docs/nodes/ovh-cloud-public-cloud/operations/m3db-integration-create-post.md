# OVH Cloud Public Cloud — M3dbIntegrationCreatePost

> Opération `M3dbIntegrationCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/m3db/M3dbIntegrationCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `sourceServiceId` | string | Oui |
| `destinationServiceId` | string | Oui |
| `parameters` | string | — |
| `type` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
