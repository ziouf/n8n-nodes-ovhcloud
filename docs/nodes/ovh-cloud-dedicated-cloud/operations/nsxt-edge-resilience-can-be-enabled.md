# OVH Cloud Dedicated Cloud — Check NSX-T Edge Resilience Test Availability

> Opération `nsxtEdgeResilienceCanBeEnabled` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/nsxtEdge/nsxtEdgeResilienceCanBeEnabled.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicatedCloud/{serviceName}{datacenterId}{nsxtEdgeId}` |

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
