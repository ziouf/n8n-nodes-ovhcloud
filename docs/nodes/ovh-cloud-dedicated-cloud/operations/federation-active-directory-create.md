# OVH Cloud Dedicated Cloud — Create Federated Active Directory

> Opération `federationActiveDirectoryCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/federation/federationActiveDirectoryCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `baseDnForGroups` | string | Oui |
| `baseDnForUsers` | string | Oui |
| `description` | string | — |
| `domainAlias` | string | Oui |
| `domainName` | string | Oui |
| `ip` | string | Oui |
| `ldapHostname` | string | — |
| `ldapTcpPort` | number | — |
| `noSsl` | boolean | — |
| `password` | string | Oui |
| `sslThumbprint` | string | — |
| `username` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
