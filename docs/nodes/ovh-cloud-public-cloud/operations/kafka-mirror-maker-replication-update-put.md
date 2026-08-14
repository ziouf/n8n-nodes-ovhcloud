# OVH Cloud Public Cloud — kafkaMirrorMakerReplicationUpdatePut

> Opération `kafkaMirrorMakerReplicationUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaMirrorMaker/replicationUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{publicCloudProjectId}{clusterId}{replicationId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `clusterId` | string | Oui |
| `replicationId` | string | Oui |
| `destinationServiceId` | string | — |
| `sourceServiceId` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
