# OVH Cloud Over The Box — Create Remote Access

> Opération `remoteAccessesPost` · Fichier source : `nodes/OvhCloudOverTheBox/resources/remoteAccesses/remoteAccessesPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/overTheBox/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `allowedIp` | string | — |
| `expirationDate` | dateTime | — |
| `exposedPort` | number | Oui |
| `publicKey` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
