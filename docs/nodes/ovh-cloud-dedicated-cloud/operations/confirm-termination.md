# OVH Cloud Dedicated Cloud — Confirm Service Termination

> Opération `confirmTermination` · Fichier source : `nodes/OvhCloudDedicatedCloud/root/confirmTermination.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `commentary` | string | — |
| `futureUse` | string | — |
| `reason` | string | — |
| `token` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
