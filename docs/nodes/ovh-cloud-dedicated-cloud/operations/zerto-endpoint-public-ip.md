# OVH Cloud Dedicated Cloud — Change Zerto Endpoint Public IP

> Opération `zertoEndpointPublicIp` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zerto/zertoEndpointPublicIp.operation.ts`

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
