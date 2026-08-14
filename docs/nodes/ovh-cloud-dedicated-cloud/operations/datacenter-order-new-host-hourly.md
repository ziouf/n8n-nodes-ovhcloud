# OVH Cloud Dedicated Cloud — Order Hourly Host

> Opération `datacenterOrderNewHostHourly` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/datacenterOrderNewHostHourly.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `name` | string | Oui |
| `vmwareClusterId` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
