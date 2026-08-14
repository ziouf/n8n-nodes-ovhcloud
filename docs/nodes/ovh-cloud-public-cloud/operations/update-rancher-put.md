# OVH Cloud Public Cloud — Update Rancher Service

> Opération `updateRancherPut` · Fichier source : `nodes/OvhCloudPublicCloud/rancher/serviceUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{rancherServiceId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `rancherServiceId` | resourceLocator | Oui |
| `plan` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
