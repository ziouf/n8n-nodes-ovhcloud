# OVH Cloud Veeam Enterprise Plus — Confirm Termination

> Opération `confirmTermination` · Fichier source : `nodes/OvhCloudVeeamEnterprisePlus/confirmTermination.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/veeam/veeamEnterprise/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `token` | string | Oui |
| `reason` | options | — |
| `Other` | — | — |
| `Cost` | — | — |
| `Performance` | — | — |
| `No Longer Needed` | — | — |
| `futureUse` | options | — |
| `Will Use Again` | — | — |
| `Switching Provider` | — | — |
| `Not Using Anymore` | — | — |
| `commentary` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
