# OVH Cloud Dedicated Cloud — List Zerto Protected Virtual Machines

> Opération `zertoUsageReport` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoUsageReport.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `month` | number | Oui |
| `year` | number | Oui |
| `returnAll` | boolean | — |
| `limit` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
