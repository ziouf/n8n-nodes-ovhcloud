# OVH Cloud Horizon View — List Dedicated Horizon Tasks

> Opération `taskGet` · Fichier source : `nodes/OvhCloudHorizonView/resources/dedicatedHorizon/taskGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/horizonView/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `state` | options | — |
| `Canceled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `Error` | — | — |
| `Fixing` | — | — |
| `To Cancel` | — | — |
| `To Create` | — | — |
| `To Do` | — | — |
| `Unknown` | — | — |
| `Waiting For Childs` | — | — |
| `Waiting To Do` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
