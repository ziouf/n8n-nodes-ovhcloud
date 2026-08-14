# OVH Cloud Dedicated Cloud — Change Zerto Single Endpoint Public IP

> Opération `zertoSingleEndpointPublicIp` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleEndpointPublicIp.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `newEndpointPublicIp` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
