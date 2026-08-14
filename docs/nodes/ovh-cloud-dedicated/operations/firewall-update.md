# OVH Cloud Dedicated — Firewall Update

> Opération `firewallUpdate` · Fichier source : `nodes/OvhCloudDedicated/resources/firewallUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicated/server/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `rules` | multiOptions | — |
| `Allow All` | — | — |
| `Deny All` | — | — |
| `Default Rules` | — | — |
| `Custom Rules` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
