# OVH Cloud Hosting — dbChangePassword

> Opération `dbChangePassword` · Fichier source : `nodes/OvhCloudHosting/databaseSub/changePasswordPut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/hosting/web/database/{serviceName}{databaseName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `databaseName` | string | Oui |
| `newPassword` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
