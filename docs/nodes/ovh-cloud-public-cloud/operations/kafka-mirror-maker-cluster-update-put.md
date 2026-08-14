# OVH Cloud Public Cloud — kafkaMirrorMakerClusterUpdatePut

> Opération `kafkaMirrorMakerClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaMirrorMaker/clusterUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{publicCloudProjectId}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `clusterId` | string | Oui |
| `description` | string | — |
| `plan` | string | — |
| `version` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
