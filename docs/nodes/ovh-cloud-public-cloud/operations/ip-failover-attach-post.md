# OVH Cloud Public Cloud — Attach Failover IP

> Opération `ipFailoverAttachPost` · Fichier source : `nodes/OvhCloudPublicCloud/ip/failoverAttachPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{projectId}{failoverIpId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `failoverIpId` | string | Oui |
| `instanceId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
