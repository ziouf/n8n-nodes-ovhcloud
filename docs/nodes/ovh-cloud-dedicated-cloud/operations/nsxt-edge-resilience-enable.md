# OVH Cloud Dedicated Cloud — Start NSX-T Edge Resilience Test

> Opération `nsxtEdgeResilienceEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/nsxtEdge/nsxtEdgeResilienceEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{nsxtEdgeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `nsxtEdgeId` | number | Oui |
| `duration` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
