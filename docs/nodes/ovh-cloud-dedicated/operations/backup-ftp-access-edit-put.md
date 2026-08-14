# OVH Cloud Dedicated — Backup FTP ACL Edit

> Opération `backupFtpAccessEditPut` · Fichier source : `nodes/OvhCloudDedicated/resources/backupFtpAccessEditPut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicated/server/{serviceName}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `ipBlock` | string | Oui |
| `ftp` | boolean | — |
| `cifs` | boolean | Oui |
| `nfs` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
