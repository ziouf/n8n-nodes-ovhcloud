# OVH Cloud Dedicated Cloud — Enable Zerto Disaster Recovery

> Opération `zertoEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `primaryEndpointIp` | string | Oui |
| `secondaryDatacenterId` | number | Oui |
| `secondaryEndpointIp` | string | Oui |
| `secondaryServiceName` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
