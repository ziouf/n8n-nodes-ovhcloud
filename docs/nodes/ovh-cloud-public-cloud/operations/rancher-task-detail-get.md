# OVH Cloud Public Cloud — Get Task

> Opération `rancherTaskDetailGet` · Fichier source : `nodes/OvhCloudPublicCloud/rancher/taskDetailGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/publicCloud/project/{projectId}{rancherServiceId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `rancherServiceId` | resourceLocator | Oui |
| `taskId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
