# OVH Cloud Dedicated Cloud — Deploy Private Management Gateway

> Opération `privateGatewayEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/privateGateway/privateGatewayEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `ip` | string | Oui |
| `netmask` | string | Oui |
| `portgroup` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
