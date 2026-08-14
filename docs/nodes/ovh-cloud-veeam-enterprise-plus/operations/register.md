# OVH Cloud Veeam Enterprise Plus — Register Backup Server

> Opération `register` · Fichier source : `nodes/OvhCloudVeeamEnterprisePlus/register.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/veeam/veeamEnterprise/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `ip` | string | Oui |
| `username` | string | Oui |
| `password` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
