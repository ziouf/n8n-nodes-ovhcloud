# OVH Cloud Public Cloud — List Tasks

> Opération `rancherTaskListGet` · Fichier source : `nodes/OvhCloudPublicCloud/rancher/taskListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/publicCloud/project/{projectId}{rancherServiceId}` |

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
