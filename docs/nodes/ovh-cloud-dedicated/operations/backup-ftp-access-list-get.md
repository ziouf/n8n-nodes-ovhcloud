# OVH Cloud Dedicated — Backup FTP Access List

> Opération `backupFtpAccessListGet` · Fichier source : `nodes/OvhCloudDedicated/resources/backupFtpAccessListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicated/server/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `ipBlockFilter` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
