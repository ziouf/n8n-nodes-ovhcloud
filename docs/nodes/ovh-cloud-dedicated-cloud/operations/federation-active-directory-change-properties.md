# OVH Cloud Dedicated Cloud — Update Federated Active Directory

> Opération `federationActiveDirectoryChangeProperties` · Fichier source : `nodes/OvhCloudDedicatedCloud/federation/federationActiveDirectoryChangeProperties.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{activeDirectoryId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `activeDirectoryId` | number | Oui |
| `description` | string | — |
| `password` | string | Oui |
| `sslThumbprint` | string | — |
| `username` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
