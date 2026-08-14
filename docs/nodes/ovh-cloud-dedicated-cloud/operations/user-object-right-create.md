# OVH Cloud Dedicated Cloud — Create User Object Right

> Opération `userObjectRightCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/user/userObjectRightCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `userId` | number | Oui |
| `propagate` | boolean | — |
| `right` | options | Oui |
| `Admin` | — | — |
| `Disabled` | — | — |
| `Readonly` | — | — |
| `Readwrite` | — | — |
| `type` | options | Oui |
| `Cluster` | — | — |
| `Datastore` | — | — |
| `Dvportgroup` | — | — |
| `Folder` | — | — |
| `Pool` | — | — |
| `Vm` | — | — |
| `vmwareObjectId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
