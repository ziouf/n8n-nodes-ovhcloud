# OVH Cloud Dedicated Cloud — Reconfigure Private Management Gateway

> Opération `privateGatewayReconfigure` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/privateGateway/privateGatewayReconfigure.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `ip` | string | — |
| `netmask` | string | — |
| `newDatacenterId` | number | — |
| `portgroup` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
