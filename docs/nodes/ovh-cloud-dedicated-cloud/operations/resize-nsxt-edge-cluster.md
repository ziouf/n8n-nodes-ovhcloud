# OVH Cloud Dedicated Cloud — Resize NSX-T Edge Cluster

> Opération `resizeNsxtEdgeCluster` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/nsxtEdge/resizeNsxtEdgeCluster.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `size` | options | Oui |
| `Large` | — | — |
| `Medium` | — | — |
| `Extra Large` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
