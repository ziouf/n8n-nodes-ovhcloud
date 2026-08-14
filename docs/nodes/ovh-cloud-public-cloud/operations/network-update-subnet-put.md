# OVH Cloud Public Cloud — networkUpdateSubnetPut

> Opération `networkUpdateSubnetPut` · Fichier source : `nodes/OvhCloudPublicCloud/network/updateSubnetPut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{pnId}{subnetId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `pnId` | string | Oui |
| `subnetId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
