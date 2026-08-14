# OVH Cloud Hosting — dbImportDump

> Opération `dbImportDump` · Fichier source : `nodes/OvhCloudHosting/databaseSub/importPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/database/{serviceName}{databaseName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `databaseName` | string | Oui |
| `dumpUrl` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
