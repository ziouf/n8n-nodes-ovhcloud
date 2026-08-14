# OVH Cloud Dedicated — BIOS SGX Configure Post

> Opération `biosSgxConfigurePost` · Fichier source : `nodes/OvhCloudDedicated/resources/biosSgxConfigurePost.operation.ts`

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
| `prmrr` | options | — |
| `Disabled` | — | — |
| `1MB` | — | — |
| `2MB` | — | — |
| `4MB` | — | — |
| `8MB` | — | — |
| `status` | options | — |
| `Enabled` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
