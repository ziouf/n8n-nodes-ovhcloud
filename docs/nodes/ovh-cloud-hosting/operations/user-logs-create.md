# OVH Cloud Hosting — userLogsCreate

> Opération `userLogsCreate` · Fichier source : `nodes/OvhCloudHosting/userLogs/createPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `login` | string | Oui |
| `password` | string | Oui |
| `description` | string | Oui |
| `ownLogsId` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
