# OVH Cloud Dedicated Cloud — Update User Properties

> Opération `userChangeProperties` · Fichier source : `nodes/OvhCloudDedicatedCloud/user/userChangeProperties.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `userId` | number | Oui |
| `canManageIpFailOvers` | boolean | — |
| `canManageNetwork` | boolean | — |
| `canManageRights` | boolean | — |
| `email` | string | — |
| `encryptionRight` | boolean | — |
| `firstName` | string | — |
| `fullAdminRo` | boolean | — |
| `lastName` | string | — |
| `nsxRight` | boolean | — |
| `phoneNumber` | string | — |
| `receiveAlerts` | boolean | — |
| `tokenValidator` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
