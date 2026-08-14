# OVH Cloud Dedicated Cloud — Disable Zerto Disaster Recovery

> Opération `zertoDisable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoDisable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `secondaryDatacenterId` | number | Oui |
| `secondaryServiceName` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
