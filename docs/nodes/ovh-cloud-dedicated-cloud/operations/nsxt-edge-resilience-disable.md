# OVH Cloud Dedicated Cloud — Stop NSX-T Edge Resilience Test

> Opération `nsxtEdgeResilienceDisable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/nsxtEdge/nsxtEdgeResilienceDisable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{nsxtEdgeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `nsxtEdgeId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
