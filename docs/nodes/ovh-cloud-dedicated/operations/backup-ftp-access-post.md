# OVH Cloud Dedicated — Backup FTP Access Post

> Opération `backupFtpAccessPost` · Fichier source : `nodes/OvhCloudDedicated/resources/backupFtpAccessPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicated/server/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `ipBlock` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
