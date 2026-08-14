# OVH Cloud Dedicated Cloud — Enable Zerto Single Disaster Recovery

> Opération `zertoSingleEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `localVraNetwork` | string | Oui |
| `ovhEndpointIp` | string | Oui |
| `remoteVraNetwork` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
