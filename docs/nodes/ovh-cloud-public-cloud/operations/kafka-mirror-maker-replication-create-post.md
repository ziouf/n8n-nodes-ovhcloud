# OVH Cloud Public Cloud — kafkaMirrorMakerReplicationCreatePost

> Opération `kafkaMirrorMakerReplicationCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{publicCloudProjectId}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `clusterId` | string | Oui |
| `destinationServiceId` | string | — |
| `sourceServiceId` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
