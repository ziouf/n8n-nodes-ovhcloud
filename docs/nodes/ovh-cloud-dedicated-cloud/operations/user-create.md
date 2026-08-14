# OVH Cloud Dedicated Cloud — Create User

> Opération `userCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/user/userCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `canAddRessource` | boolean | — |
| `canManageRights` | boolean | — |
| `email` | string | — |
| `encryptionRight` | boolean | — |
| `expirationDate` | string | — |
| `firstName` | string | — |
| `lastName` | string | — |
| `name` | string | Oui |
| `networkRole` | options | — |
| `Admin` | — | — |
| `Manager` | — | — |
| `noAccess` | — | — |
| `Readonly` | — | — |
| `nsxRight` | boolean | — |
| `password` | string | — |
| `phoneNumber` | string | — |
| `receiveAlerts` | boolean | — |
| `right` | options | — |
| `Disabled` | — | — |
| `Readwrite` | — | — |
| `tokenValidator` | boolean | — |
| `vmNetworkRole` | options | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
