# OVH Cloud Public Cloud — Delete Rancher Service

> Opération `deleteRancherDelete` · Fichier source : `nodes/OvhCloudPublicCloud/rancher/serviceDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/publicCloud/project/{projectId}{rancherServiceId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `rancherServiceId` | resourceLocator | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
