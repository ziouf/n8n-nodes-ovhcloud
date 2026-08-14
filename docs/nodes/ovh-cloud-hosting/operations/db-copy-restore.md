# OVH Cloud Hosting — dbCopyRestore

> Opération `dbCopyRestore` · Fichier source : `nodes/OvhCloudHosting/databaseSub/copyRestorePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/database/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `databaseName` | string | Oui |
| `copyId` | string | Oui |
| `flushDatabase` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
