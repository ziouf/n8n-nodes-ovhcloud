# OVH Cloud Dedicated Cloud — Update User Datacenter Right

> Opération `userRightUpdate` · Fichier source : `nodes/OvhCloudDedicatedCloud/user/userRightUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicatedCloud/{serviceName}{userId}{rightId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `userId` | number | Oui |
| `rightId` | number | Oui |
| `canAddRessource` | boolean | — |
| `networkRole` | options | — |
| `Admin` | — | — |
| `Manager` | — | — |
| `noAccess` | — | — |
| `Readonly` | — | — |
| `right` | options | — |
| `Disabled` | — | — |
| `Readwrite` | — | — |
| `vmNetworkRole` | options | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
