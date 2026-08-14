# OVH Cloud Domain — List All Domain Tasks

> Opération `domainTaskListGet` · Fichier source : `nodes/OvhCloudDomain/resources/service/task/domainTaskListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/domain/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `function_` | string | — |
| `status` | options | — |
| `Cancelled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `error` | — | — |
| `Problem` | — | — |
| `Todo` | — | — |
| `type` | options | — |
| `Alldom` | — | — |
| `Domain` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
